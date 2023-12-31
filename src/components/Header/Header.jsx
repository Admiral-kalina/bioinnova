import React, {useEffect, useRef, useState} from 'react';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import logo from "../../images/logo.png"
import icon5 from "../../images/icon/icon5.svg"
import icon6 from "../../images/icon/icon6.svg"
import icon7 from "../../images/icon/icon7.svg"
import icon8 from "../../images/icon/icon8.svg"
import "./header.scss";


import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {changeUserLanguage} from "../../features/userSlice/userSlice";
import {Link} from "gatsby";
import {useLocation} from "react-router-dom";
import i18n from "i18next";

const Header = ({type}) => {
    const {language} = useSelector(store => store.user.user)
    const [burgerState, setBurgerState] = useState(false)
    const [endpoint, setEndpoint] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState({value: language, label: language});

    useEffect(() => {

        if (burgerState) {
            console.log('TY', burgerState)

        }

    }, [burgerState]);

    const dispatch = useDispatch()

    const ref = useRef();

    useEffect(() => {

        const queryString = window.location.pathname;
        // const paymentID = queryString.replace(/[^0-9]/g, "");;
        const endpoint = queryString.replace(/[^a-zA-Z0-9 ]/g, "");
        setEndpoint(endpoint)


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
        i18n.changeLanguage(label)
    }

    const handleBurgerClick = () => {
        let body = document.getElementsByTagName("body")[0];

        if (burgerState) {
            body.style.height = "auto";
            body.style.overflow = "unset";
            body.style.width = "auto";
            body.style.position = "unset";
            setBurgerState(state => !state)
        } else {
            body.style.height = "100%";
            body.style.overflow = "hidden";
            body.style.width = "100%";
            body.style.position = "fixed";
            setBurgerState(state => !state)
        }
    }

    const handleMobileClick = () => {
        let body = document.getElementsByTagName("body")[0];
        body.style.height = "auto";
        body.style.overflow = "unset";
        body.style.width = "auto";
        body.style.position = "unset";;
        console.log('Done')
    }

    return (
        <header ref={ref}
                className={
                    `header 
                   
            ${isScrolled ? 'scrolled' : 'unscrolled'}
            ${type === 'full' ? 'about-page' : ''}
            `}>
            <div className="container d-block-md">
                <div className="header__logo">
                    <Link to='/'>
                        <img
                            className="inline-svg"
                            src={logo}
                            alt="Logo Bioscience Innova"
                        />
                    </Link>
                </div>

                <nav className="header__nav">
                    <ul>
                        {/*<li><a href="#" className="text-uppercase">о компании</a></li>*/}
                        {/*<li><a href="#" className="text-uppercase">услуги</a></li>*/}
                        {/*<li><a href="#" className="text-uppercase">мероприятия</a></li>*/}
                        {/*<li><a href="#" className="text-uppercase">контакты</a></li>*/}
                        {/*<li><Link className={`text-uppercase ${endpoint === 'aboutCompany' ? 'active' : ''}`} to={'/aboutCompany'}>о компании</Link></li>*/}
                        <li><Link className={`text-uppercase ${endpoint === 'contacts' ? 'active' : ''}`} to={'/contacts'}>контакты</Link></li>
                    </ul>
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


                <div className={`header__mobile ${burgerState ? 'active' : ''}`}>
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
                        {/*<li onClick={handleMobileClick}><Link className={`text-uppercase ${endpoint === 'aboutCompany' ? 'active' : ''}`} to={'/aboutCompany'}>о компании</Link></li>*/}
                        <li onClick={handleMobileClick}><Link className={`text-uppercase ${endpoint === 'contacts' ? 'active' : ''}`} to={'/contacts'}>контакты</Link></li>
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
                        <li className="nav-menu__mobile--block">
                            <ul className="nav-menu__mobile--lang">
                                <li>
                                    <a href="#">UA</a>
                                </li>
                                <li>
                                    <a href="#">EN</a>
                                </li>
                                <li>
                                    <a href="#" className="active">RU</a>
                                </li>
                            </ul>
                            <ul className="nav-menu__mobile--info">
                                <li>
                                    <a href="tel:+38 (095) 382-92-64">+380 95 382 9264</a>
                                    <p>01033, місто Київ, ВУЛИЦЯ ТАРАСІВСЬКА, будинок 4-А, офіс 7</p>
                                </li>
                                <li className="nav-menu__mobile--info--social">
                                    <Link to={'/'}><img src={icon5} alt="mail"/></Link>
                                    <Link to={'/'}><img src={icon6} alt="youtube"/></Link>
                                    <Link to={'/'}><img src={icon7} alt="linkedin"/></Link>
                                    <Link to={'/'}><img src={icon8} alt="facebook"/></Link>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>


                <div onClick={handleBurgerClick} className={`burger-menu ${burgerState ? 'open' : ''}`}>
                    <span className="bar first"></span>
                    <span className="bar second"></span>
                    <span className="bar third"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;