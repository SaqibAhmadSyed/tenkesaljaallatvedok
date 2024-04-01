import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../Components/Title/Title';
import { NavLink } from "react-router-dom";

const Donate = () => {
    const { t } = useTranslation();
    const homeImagePath = "../img/donate.png";
    return (
        <div>
            <Title title={t('donate.title')} imagePath={homeImagePath} />
            <div className="container p-5">
                <h1 className='text-center mb-3' style={{ color: '#58c459', fontWeight: '600' }}>{t("donate.subtitle-1")}</h1>
                <h4 className='text-center mb-5'>{t("donate.subtitle-2")}</h4>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0 mb-4">
                            <img className="card-img-top" src="../img/donate-1.jpg" alt="" />
                            <div className="card-body bg-light p-4 shadow">
                                <h3 className="card-title text-center" style={{ color: '#58c459', fontWeight: '600' }}>{t("donate.list-title-1")}</h3>
                                <ul>
                                    <p>{t("donate.content-1")}</p>
                                    <ul>
                                        <li>{t("donate.content-2")}</li>
                                        <li>{t("donate.content-3")}</li>
                                    </ul>
                                    <br />
                                    <p>{t("donate.content-4")}</p>
                                    <ul>
                                        <li>{t("donate.content-5")}</li>
                                        <li>{t("donate.content-6")}</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0 mb-4">
                            <img className="card-img-top" src="../img/donate-2.jpg" alt="" />
                            <div className="card-body bg-light p-4 shadow">
                                <h3 className="card-title text-center" style={{ color: '#58c459', fontWeight: '600' }}>{t("donate.list-title-2")}</h3>
                                <p> {t("donate.content-7")}
                                    <br />
                                    <NavLink
                                        to="/donating-items-to-us"
                                        className=""
                                        style={{ color: '#58c459', textDecoration: 'none' }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {t("donate.content-8")}&nbsp;
                                    </NavLink>
                                    {t("donate.content-9")}
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;
