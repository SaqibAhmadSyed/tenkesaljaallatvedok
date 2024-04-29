import React from 'react';
import { useTranslation } from 'react-i18next';

const Memoriam = () => {
    const { t } = useTranslation();

    return (
        <div className='container p-5'>
            <div className="row justify-content-center">
                <div className="col-lg-4 mb-5">
                    <div className='text-center'>
                        <img className="w-75 mb-5" src="../img/lizi.png" alt="" />
                    </div>
                    <p>{t('memoriam.text-1')}</p>
                    <p>{t('memoriam.text-2')}</p>
                    <p>{t('memoriam.text-3')}</p>
                </div>
                <div className='col-2'></div>
                <div className="col-lg-4 mb-5">
                    <div className='text-center'>
                        <img className="w-75 mb-5" src="../img/reno.png" alt="" />
                    </div>
                    <p>{t('memoriam.text-4')}</p>
                    <p>{t('memoriam.text-5')}</p>
                    <p>{t('memoriam.text-6')}</p>
                </div>
            </div>
        </div>
    );
}

export default Memoriam;
