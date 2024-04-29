import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Volunteer from "./Volunteer";
import Donate from "./Donate";
import DonateToUs from "./DonateToUs";
import Adopt from './AdoptableDog';
import Foster from './FosterHome';

const Home = () => {
    const { t } = useTranslation();

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(false);

    // Function to update isSmallScreen and isExtraSmallScreen states based on viewport width
    const updateScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 1240);
        setIsExtraSmallScreen(window.innerWidth <= 975);
    };

    // Update isSmallScreen and isExtraSmallScreen states on component mount and window resize
    useEffect(() => {
        updateScreenSize(); // Initial call to set initial states
        window.addEventListener('resize', updateScreenSize); // Add event listener for window resize
        return () => {
            window.removeEventListener('resize', updateScreenSize); // Remove event listener on component unmount
        };
    }, []); 

    return (
        <div className='container-fluid p-5'>
            <div className='row justify-content-center align-items-center home-contact mb-5'>
                <div className='col-lg-4 mb-4 d-relative'>
                    <div style={{ position: "relative" }}>
                        <h2 style={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)", color: "white", zIndex: "1", fontWeight: "600", textAlign: "center", fontSize: isSmallScreen ? (isExtraSmallScreen ? '25px' : '35px') : '35px'
                        }}>
                            Postaszállás, Mattyi út, Siklós, Hungary
                        </h2>
                        <img src="../img/home-1.jpg" alt="" style={{ maxHeight: "500px", width: "100%", zIndex: "100", objectFit: "cover", borderRadius: "15px" }} className='mh-50' />
                    </div>
                </div>
                <div className='col-lg-4 mb-4'>
                    <div style={{ position: "relative" }}>
                        <h2 style={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)", color: "white", zIndex: "1", fontWeight: "600", textAlign: "center", fontSize: isSmallScreen ? (isExtraSmallScreen ? '25px' : '35px') : '35px'
                        }}>
                            +36 70 587 6260
                        </h2>
                        <img src="../img/home-2.jpg" alt="" style={{ maxHeight: "500px", width: "100%", zIndex: "100", objectFit: "cover", borderRadius: "15px" }} className='mh-50' />
                    </div>
                </div>
                <div className='col-lg-4 mb-4'>
                    <div style={{ position: "relative" }}>
                        <h2 style={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)", color: "white", zIndex: "1", fontWeight: "600", textAlign: "center", fontSize: isSmallScreen ? (isExtraSmallScreen ? '25px' : '35px') : '35px'
                        }}>
                            tenkesaljaallatvedoe
                            gyesulet@gmail.com
                        </h2>
                        <img src="../img/home-3.jpg" alt="" style={{ maxHeight: "500px", width: "100%", zIndex: "100", objectFit: "cover", borderRadius: "15px" }} className='mh-50' />
                    </div>
                </div>
            </div>
            <Adopt />
            <Donate />
            <DonateToUs />
            <Volunteer />
            <Foster />
        </div>
    );
}

export default Home;
