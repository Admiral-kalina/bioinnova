import React, {useState} from 'react';

// styles
import * as styles from "./loginHeader.module.scss"

// assets
import basket from "../../images/basket.svg";
import logo from "../../images/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {changeUserLanguage} from "../../features/userSlice/userSlice";
import i18n from "i18next";
import {Link} from "gatsby";
import Container from "../Container/Container";


const LoginHeader = () => {
    const dispatch = useDispatch();
    const {language} = useSelector(store => store.user.user);
    const languageVariant = language === 'RU' ? 'EN' : "RU";
    const [isLanguageActive, setLanguageActive] = useState(false);

    const handleLanguageClick = () => {
        dispatch(changeUserLanguage(languageVariant))
    }

    const changeLanguage = () => {
        i18n.changeLanguage(languageVariant)
    }
    const handleLanguage =(bool) => {
        setLanguageActive(bool)
    }

    return (
        <div className={styles.root}>

                <img className={styles.logo} src={logo} alt="logo"/>
                <ul className={styles.menu}>
                    <li><img src={basket} alt="basket"/></li>
                    <li
                        onMouseOver={() => handleLanguage(true)}
                        onMouseLeave={() => handleLanguage(false)}
                        onClick={changeLanguage}
                    >
                        <Link
                            className={styles.item}

                        >
                            {language}
                        </Link>
                        <p onClick={handleLanguageClick} className={`${styles.linksMenu} ${styles.item} ${styles.linksMenuLanguage} ${isLanguageActive ? styles.show : ''}`}>
                            {languageVariant}
                        </p>
                    </li>
                </ul>

        </div>
    );
};

export default LoginHeader;