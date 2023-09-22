import React from 'react';

import * as styles from "./webinarOverview.module.scss";
import WebinarDescription from "../WebinarDescription/WebinarDescription";

import mockImg from "../../../images/home/webinarMock.png"
import MyButton from "../../UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

const WebinarOverviewHome = ({webinar}) => {
    const navigate = useNavigate()
    console.log('WEBINAR', webinar)
    if (!webinar) {
        return <div>Loading</div>
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.root}>
            <p onClick={handleBack} className={styles.back}>BACK</p>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.scrollable}`}>
                    <p className={styles.section}>Вебинар</p>
                    <p className={styles.name}>Клинические испытания</p>
                    <div className={`${styles.contentTop} ${styles.showOnPhone}`}>
                        <p className={styles.date}>15.11.2023</p>
                        <p className={styles.teacher}>Андрей Шимко, эксперт GMP/GDP</p>
                        <p className={styles.program}>Фармакология</p>
                        <p className={styles.time}>30 минут</p>
                        <p className={styles.time}>11:30</p>
                    </div>
                    <p className={styles.text}>Вебинар "Аспекты Фармаконадзора" представляет собой обзор ключевых
                        аспектов и основных понятий в области фармаконадзора. Она может быть полезной для студентов
                        медицинских, фармацевтических, исследовательских и связанных с здравоохранением
                        направлений. </p>
                    <img src={mockImg} alt="preview"/>
                    <div className={styles.description}>
                        <WebinarDescription/>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.fixed}`}>
                    <div className={`${styles.contentTop} ${styles.hideOnPhone}`}>
                        <p className={styles.date}>15.11.2023</p>
                        <p className={styles.teacher}>Андрей Шимко, эксперт GMP/GDP</p>
                        <p className={styles.program}>Фармакология</p>
                        <p className={styles.time}>30 минут</p>
                        <p className={styles.time}>11:30</p>
                    </div>
                    {webinar.isAcquired ?
                        <div className={styles.content}>
                            <div className={styles.contentBottom}>
                                <MyButton transparent>Смотреть на YouTube</MyButton>
                                <MyButton transparent>Скачать конспект лекции</MyButton>
                                <MyButton transparent>Скачать презентацию</MyButton>
                            </div>
                        </div>
                        :
                        <div className={styles.content}>

                            <div className={styles.contentBottom}>
                                <p className={styles.price}>180$</p>
                                <MyButton transparent>Купить</MyButton>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default WebinarOverviewHome;