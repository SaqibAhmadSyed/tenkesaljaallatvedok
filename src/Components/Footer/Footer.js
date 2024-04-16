import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useTranslation } from "react-i18next";

const fb = <SocialIcon url="https://www.facebook.com/profile.php?id=100064767426529" />
const ig = <SocialIcon url="www.instagram.com" />;


const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>{t('footer.contact')}</h4>
                        <p>Postaszállás, Mattyi út, Siklós, Hungary</p>
                        <p>Tel: +36 70 587 6260</p>
                        <p>
                            <a href="mailto:tenkesaljaallatvedoegyesulet@gmail.com">
                                tenkesaljaallatvedoe<br />gyesulet@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>{t('footer.links')}</h4>
                        <NavLink to="/">
                            <p>{'>'} {t('nav.home')}</p>
                        </NavLink>
                        <NavLink to="/about-us">
                            <p>{'>'} {t('nav.about')}</p>
                        </NavLink>
                        <NavLink to="/adopt">
                            <p>{'>'} {t('nav.adopt')}</p>
                        </NavLink>
                        <NavLink to="/volunteer">
                            <p>{'>'} {t('nav.volunteer')}</p>
                        </NavLink>
                        <NavLink to="/privacy">
                            <p>{'>'} {t('footer.privacy')}</p>
                        </NavLink>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>{t('footer.support')}</h4>
                        <p>{t('footer.tax')}</p>
                        <p>{t('footer.bank')}</p>
                        <p>{t('footer.transfer1')}
                            <br />
                            <br />
                            {t('footer.transfer2')}</p>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>{t('footer.social')}</h4>
                        <div className="socialmedia">
                            <p>
                                {fb}
                            </p>
                            <p>
                                {ig}
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            Copyright @{new Date().getFullYear()}  {t('home.title')}, {t('footer.rights')}
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <div><p>{t('footer.created')} Consultation S.O.S.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
