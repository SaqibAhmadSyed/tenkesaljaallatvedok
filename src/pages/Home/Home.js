import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../Components/Title/Title';

const Home = () => {
    const { t } = useTranslation();
    const homeImagePath = "../img/about-us.jpg";

    return (
        <div  style={{ fontSize: '16px' }} >
            <Title title={t('home.title')} imagePath={homeImagePath}/>
        </div>
    );
}

export default Home;
