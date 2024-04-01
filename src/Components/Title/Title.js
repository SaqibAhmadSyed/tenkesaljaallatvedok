import React, { useState, useEffect } from 'react';

const Title = ({ title, imagePath }) => {
    // State to store whether it's a small screen or not
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    return (
        <div style={{ position: "relative", backgroundColor: "black" }}>
            <h1 style={{ position: "absolute", top: "50%", left: "50%", fontSize: isSmallScreen ? '25px' : '50px' ,
            transform: "translate(-50%, -50%)", color: "white", zIndex: "1", fontWeight: "600", textAlign: "center" }} className='title__text'>
               {title}
            </h1>
            <img src={imagePath} alt="" style={{ maxHeight: "400px", width: "100%", zIndex: "100", objectFit: "cover", opacity: "0.2" }} className='title__img mh-50' />
        </div>
    );
}

export default Title;
