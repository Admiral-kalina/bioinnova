import React from 'react';

import logo from "../../../public/media/svg/logo.svg"

import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="container d-block-md">
                <div className="header__logo">
                    <img
                        className="inline-svg"
                        src={logo}
                        alt="Logo Bioscience Innova"
                    />
                </div>

                <nav className="header__nav">
                    {/*<ul>*/}
                    {/*    <li><a href="#" className="text-uppercase">о компании</a></li>*/}
                    {/*    <li><a href="#" className="text-uppercase">услуги</a></li>*/}
                    {/*    <li><a href="#" className="text-uppercase">мероприятия</a></li>*/}
                    {/*    <li><a href="#" className="text-uppercase">контакты</a></li>*/}
                    {/*</ul>*/}
                </nav>

                <div className="header__aside">
                    <nav className="header__aside--person">
                        <ul>
                            <li>
                                <a href="#" className="text-uppercase"
                                ><i className="icon-person"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-uppercase"
                                ><i className="icon-basket"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="tabheader-mobile has-form">
                        <form action="">
                            <select name="mobile-tabs" id="mobile-tabs">
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                                <option value="ua">UA</option>
                            </select>
                        </form>
                    </div>
                </div>


                <div className="header__mobile">
                    <ul className="nav-menu__mobile">
                        {/*<li>*/}
                        {/*    <a href="#" className="text-uppercase active">о компании</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#" className="text-uppercase">услуги</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#" className="text-uppercase">мероприятия</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#" className="text-uppercase">контакты</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#" className="text-uppercase"*/}
                        {/*    ><i className="icon-basket"></i>*/}
                        {/*        корзина*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#" className="text-uppercase"*/}
                        {/*    ><i className="icon-person"></i>*/}
                        {/*        аккаунт*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li>
                            <ul className="nav-menu__mobile--lang">
                                <li>
                                    <a href="#" className="active">UA</a>
                                </li>
                                <li>
                                    <a href="#">EN</a>
                                </li>
                                <li>
                                    <a href="#">RU</a>
                                </li>
                            </ul>
                            <li>
                                <a href="tel:+38 (616) 566-58-96">+38 (616) 566-58-96</a>
                            </li>
                            <li>
                                <a href="tel:+38 (616) 566-58-96">+38 (616) 566-58-96</a>
                            </li>
                            <li>
                                <a href="tel:+38 (616) 566-58-96">+38 (616) 566-58-96</a>
                            </li>
                        </li>
                    </ul>
                </div>


                <div className="burger-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;