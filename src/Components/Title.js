import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Title = ({ title, imagePath }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const location = useLocation();

    // Function to update isSmallScreen state based on viewport width
    const updateScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 1100);
    };

    // Update isSmallScreen state on component mount and window resize
    useEffect(() => {
        updateScreenSize(); // Initial call to set initial state
        window.addEventListener('resize', updateScreenSize); // Add event listener for window resize
        return () => {
            window.removeEventListener('resize', updateScreenSize); // Remove event listener on component unmount
        };
    }, []); // Empty dependency array ensures effect only runs on mount and unmount

    // Effect to show image after a delay when pathname changes
    useEffect(() => {
        setShowImage(false); // Initially hide the image
        // Delay showing the image to ensure the transition effect is visible
        const showImageTimer = setTimeout(() => {
            setShowImage(true); // Show image after a delay to allow transition
        }, 100); // Adjust the delay as needed
        return () => {
            clearTimeout(showImageTimer); // Clear timeout on component unmount
        };
    }, [location.pathname]); // Re-run effect when the pathname changes

    return (
        <div style={{ position: "relative", backgroundColor: "black" }}>
            <h1 style={{ position: "absolute", top: "50%", left: "50%", fontSize: isSmallScreen ? '25px' : '50px',
                transform: "translate(-50%, -50%)", color: "white", zIndex: "1", fontWeight: "600", textAlign: "center" }} className='title__text'>
                {title}
            </h1>
            <div className="image-container"> {/* Wrap the image with a container */}
                <img src={imagePath} alt="" className={showImage ? "title__img-visible" : "title__img-hidden"} />
            </div>
        </div>
    );
}

export default Title;
