import React from 'react';
import { useTranslation } from 'react-i18next';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CustomCard from '../Components/CustomCard';

const HappyStories = () => {
    const { t } = useTranslation();
    
    const cardData = [
        {
            imgUrl: "../img/puffi.jpg",
            title: t('happy-stories.subtitle-1'),
            body: t('happy-stories.text-1')
        },
        {
            imgUrl: "../img/picur.jpg",
            title: t('happy-stories.subtitle-2'),
            body: t('happy-stories.text-2')
        },
        {
            imgUrl: "../img/potyi.jpg",
            title: t('happy-stories.subtitle-3'),
            body: t('happy-stories.text-3')
        },
        {
            imgUrl: "../img/blanca.jpg",
            title: t('happy-stories.subtitle-4'),
            body: t('happy-stories.text-4')
        },
        {
            imgUrl: "../img/joey.jpg",
            title: t('happy-stories.subtitle-5'),
            body: t('happy-stories.text-5')
        },
        {
            imgUrl: "../img/lexi.jpg",
            title: t('happy-stories.subtitle-6'),
            body: t('happy-stories.text-6')
        },
    ];

    return (
        <div className='container p-5'>
            <OwlCarousel
                className='owl-theme'
                loop
                margin={10}
                responsive={{
                    0: { items: 1 },
                    800: { items: 2 },
                    1200: { items: 3 }
                }}
                style={{ boxShadow: 'none' }} // Add inline style to remove shadow
            >
                {/* Carousel items */}
                {cardData.map((card, index) => (
                    <div key={index} className='item'>
                        <CustomCard imgUrl={card.imgUrl} title={card.title} body={card.body}/>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
}

export default HappyStories;
