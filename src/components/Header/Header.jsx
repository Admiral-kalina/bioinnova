import React, {useEffect, useRef, useState} from 'react';

import logo from "../../images/logo.png"
import "./header.scss";


import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {changeUserLanguage} from "../../features/userSlice/userSlice";


const Header = ({type}) => {
    const {language} = useSelector(store => store.user.user)

    const [isScrolled, setIsScrolled] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState({value: language, label: language});

    const dispatch = useDispatch()

    const ref = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 5) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        });
        return () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 5) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            });
        }
    }, [])

    const handleLanguageChange = ({label, value}) => {
        setSelectedLanguage({label, value})
        dispatch(changeUserLanguage(label))
    }

    console.log('loh',type)
    return (
        <header ref={ref}
                className={
                    `header 
            ${isScrolled ? 'scrolled' : 'unscrolled'}
            ${type === 'full' ? 'about-page' : ''}
            `}>
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
                        <Select
                            labelInValue
                            defaultValue={selectedLanguage}
                            style={{
                                width: 120,
                            }}
                            onChange={handleLanguageChange}
                            options={[
                                {
                                    value: 'ru',
                                    label: 'ru',
                                },
                                {
                                    value: 'ua',
                                    label: 'ua',
                                },
                                {
                                    value: 'en',
                                    label: 'en',
                                },
                            ]}
                        />
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


                {/*<div className="burger-menu">*/}
                {/*    <span className="bar"></span>*/}
                {/*    <span className="bar"></span>*/}
                {/*    <span className="bar"></span>*/}
                {/*</div>*/}
            </div>
        </header>
    );
};

export default Header;