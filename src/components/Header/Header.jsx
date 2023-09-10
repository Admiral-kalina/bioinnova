import React, {useEffect, useRef, useState} from 'react';

import logo from "../../../public/media/svg/logo.svg"

import "./header.scss";


import { Select } from 'antd';


const Header = () => {
    const [selectedOption, setSelectedOption] = useState({ value: 'RU', label: 'RU' });
    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };

    const [isScrolled, setIsScrolled] = useState(false)
    const ref = useRef();
    console.log(isScrolled)
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
    },[])

    return (
        <header ref={ref} className={`header ${isScrolled ? 'scrolled' : 'unscrolled'}`}>
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
                            defaultValue={selectedOption}
                            style={{
                                width: 120,
                            }}
                            onChange={setSelectedOption}
                            options={[
                                {
                                    value: 'RU',
                                    label: 'RU',
                                },
                                {
                                    value: 'UA',
                                    label: 'UA',
                                },
                                {
                                    value: 'EN',
                                    label: 'EN',
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