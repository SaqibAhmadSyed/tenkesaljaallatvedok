import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomCard from '../Components/CustomCard';

const AdoptableDog = () => {
    const { t } = useTranslation();

    return (
        <div className='container p-5'>
            <div className='row justify-content-center'> 
                <div className="col-lg-4 mb-4">
                    <CustomCard 
                        imgUrl={"../img/falco.jpg"}
                        title={t('adopt.subtitle-1')}
                        body={t('adopt.text-1')}
                    />
                </div>
                <div className="col-lg-4 mb-4"> 
                    <CustomCard 
                        imgUrl={"../img/bella.jpg"}
                        title={t('adopt.subtitle-2')}
                        body={t('adopt.text-2')}
                    />
                </div>
                <div className="col-lg-4 mb-4">
                    <CustomCard 
                        imgUrl={"../img/jack.jpg"}
                        title={t('adopt.subtitle-5')}
                        body={t('adopt.text-5')}
                    />
                </div>

            </div>
            <div className='row justify-content-center'>
                <div className="col-lg-4 mb-4">
                    <CustomCard 
                        imgUrl={"../img/pocok.jpg"}
                        title={t('adopt.subtitle-4')}
                        body={t('adopt.text-4')}
                    />
                </div>
                <div className="col-lg-4 mb-4"> 
                    <CustomCard 
                        imgUrl={"../img/bobi.jpg"}
                        title={t('adopt.subtitle-3')}
                        body={t('adopt.text-3')}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdoptableDog;
