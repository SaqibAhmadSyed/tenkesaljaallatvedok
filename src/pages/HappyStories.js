import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomCard from '../Components/CustomCard';

const HappyStories = () => {
    const { t } = useTranslation();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
            <Carousel responsive={responsive} swipeable={true}>
                {cardData.map((card, index) => (
                    <div key={index}>
                        <CustomCard imgUrl={card.imgUrl} title={card.title} body={card.body} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default HappyStories;
