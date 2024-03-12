import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const fb = <SocialIcon url="https://www.facebook.com/profile.php?id=100064767426529" />
const ig = <SocialIcon url="www.instagram.com" />;

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Contact Us</h4>
                        <p>Postaszállás, Mattyi út, Siklós, Hungary</p>
                        <p>Tel: +36 70 587 6260</p>
                        <p>E-mail: tenkesaljaallatvedoegyesulet@gmail.com</p>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Quick Links</h4>
                        <NavLink to="/" activeClassName="active">
                            <p>{'>'} Home</p>
                        </NavLink>
                        <NavLink to="/about-us" activeClassName="active">
                            <p>{'>'} About us</p>
                        </NavLink>
                        <NavLink to="/adopt" activeClassName="active">
                            <p>{'>'} Adopt</p>
                        </NavLink>
                        <NavLink to="/volunteer" activeClassName="active">
                            <p>{'>'} Volunteer</p>
                        </NavLink>
                        <NavLink to="/privacy" activeClassName="active">
                            <p>{'>'} Privacy</p>
                        </NavLink>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Support Us</h4>
                        <p>Tax number: 18646748-1-02 </p>
                        <p>Bank account number: 10402434-50526777-87481014</p>
                        <p>International transfers: IBAN: HU23 1040 2434 5052 6777 8748 1014 <br /><br /> SWIFT CODE: OKHBHUHB</p>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100064767426529" target="blank">
                                    {fb}
                                </a>
                            </p>
                            <p>
                                <a href="" target="blank">
                                    {ig}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            Copyright @{new Date().getFullYear()}  Tenkesalja Animal Welfare Protection Association
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <div><p>Website created by Consultation S.O.S.</p></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
