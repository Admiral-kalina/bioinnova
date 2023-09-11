import React from 'react';

import logo from "../../images/logo.png"
import icon5 from "../../images/icon/icon5.svg"
import icon6 from "../../images/icon/icon6.svg"
import icon7 from "../../images/icon/icon7.svg"
import icon8 from "../../images/icon/icon8.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container d-block-md">
                <div className="footer__wrapper">
                    <div className="footer__contacts">
                        <a href="tel:+38 (616) 566-58-96">+38 (616) 566-58-96</a>
                        <p>01033, город Киев, Улица Тарасовская, дом 4-А, офис 7
                        </p>
                        <div className="footer__mail">
                            <a href="mailto:info@bioinnova.com.ua">info@bioinnova.com.ua</a>
                        </div>
                    </div>

                    <div className="footer__center">
                        <div className="footer__social">
                            <a href="mailto:info@bioinnova.com.ua"><img src={icon5} alt=""/><i className="icon-mail"></i></a>
                            <a href="#"><img src={icon6} alt=""/></a>
                            <a href="#"><img src={icon7} alt=""/></a>
                            <a href="#"><img src={icon8} alt=""/></a>

                        </div>
                        <div className="footer__copyright">
                            © all rights reserved
                        </div>
                    </div>

                    <div className="footer__end">
                        <div className="footer__logo">
                            <img
                                className="inline-svg"
                                src={logo}
                                alt="Logo Bioscience Innova"
                            />
                        </div>
                        <div className="footer__mail">
                            <a href="mailto:info@bioinnova.com.ua">info@bioinnova.com.ua</a>
                        </div>

                        <div className="footer__copyright">
                            © all rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;