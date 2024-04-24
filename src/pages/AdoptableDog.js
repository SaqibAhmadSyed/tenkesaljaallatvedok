import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CustomCard from '../Components/CustomCard';

const AdoptableDog = () => {
    const { t } = useTranslation();

    return (
        <div className='container p-5'>
            <CustomCard 
            className="mb-5"
            imgUrl={"../img/falco.png"}
            title={t('adopt.subtitle-1')}
            body={t('adopt.text-1')}
            direction={"ltr"}
            />
            <CustomCard 
            imgUrl={"../img/bella.jpg"}
            title={t('adopt.subtitle-2')}
            body={t('adopt.text-2')}
            direction={"rtl"}
            />
            <CustomCard 
            imgUrl={"../img/bobi.jpg"}
            title={t('adopt.subtitle-3')}
            body={t('adopt.text-3')}
            direction={"ltr"}
            />
            <CustomCard 
            imgUrl={"../img/pocok.png"}
            title={t('adopt.subtitle-4')}
            body={t('adopt.text-4')}
            direction={"rtl"}
            />
            <CustomCard 
            imgUrl={"../img/jack.png"}
            title={t('adopt.subtitle-5')}
            body={t('adopt.text-5')}
            direction={"ltr"}
            />
        </div>
    );
};

export default AdoptableDog;
