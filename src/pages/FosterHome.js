import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../Components/Title/Title';
import { NavLink } from "react-router-dom";

const FosterHome = () => {
    const { t } = useTranslation();
    const homeImagePath = "../img/foster.jpg";
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },);

    return (
        <div>
            <Title title={t('foster.title')} imagePath={homeImagePath} />
            <div className="row justify-content-center m-5">
                <div className={`col-md-${windowWidth <= 1080 ? '12' : '4'}${windowWidth <= 1080 ? ' border-bottom' : ''}`}>
                    <h1 className='text-center mb-4' style={{ color: '#58c459', fontWeight: '600' }}>
                        {t('foster.subtitle-1')}
                    </h1>

                    <div className='text-center mb-3'>
                        <img src="../img/foster-1.jpg" alt="Fostering Animals" className="img-fluid" style={{ maxWidth: "100%" }} />
                    </div>
                    <p>
                        {t('foster.content-1')}
                        <br /><br />
                    </p>
                </div>
                <div className='col-md-1'></div>
                <div className={`col-md-${windowWidth <= 1080 ? '12' : '4'}`} style={
                    {
                        marginLeft: windowWidth > 1080 ? '20px' : '0px',
                        marginTop: windowWidth <= 1080 ? '40px' : '0px'
                    }}>
                    <h1 className='text-center' style={{ color: '#58c459', fontWeight: '600' }}>{t('foster.subtitle-2')}</h1>
                    <p>
                        {t('foster.content-2')}
                    </p>
                    <ul>
                        <li>- {t('foster.list-1')}</li>
                        <li>- {t('foster.list-2')}</li>
                        <li>- {t('foster.list-3')}</li>
                    </ul>
                    <p>
                    {t('foster.content-3')}
                    </p>
                    <h1 className="mt-5 text-center" style={{ color: '#58c459', fontWeight: '600' }}>{t('foster.subtitle-3')}</h1>
                    <p>
                    {t('foster.content-4')}
                    </p>
                    <ul>
                        <li>- {t('foster.list-4')}</li>
                        <li>- {t('foster.list-5')}</li>
                        <li>- {t('foster.list-6')}</li>
                        <li>- {t('foster.list-7')}</li>
                        <li>- {t('foster.list-8')}</li>
                    </ul>
                </div>
                <div className='text-center'>
                    <p className="p-3 border-top">
                    {t('foster.content-5')}
                    </p>
                    <NavLink
                        to="/contact"
                        className="nav__cta m-auto">
                        {t('nav.contact')}
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default FosterHome;
