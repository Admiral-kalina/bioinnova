import React, {useEffect} from "react";
import {userData} from "../../helpers/userData";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCourses} from "../../features/userSlice/userSlice";
import Container from "../Container/Container";

// styles
import * as styles from "./home.module.scss";
// assets
import union from "../../images/home/union.svg";
import laptop from "../../images/home/laptop.svg";
import schedule from "../../images/home/schedule.svg";
import about from "../../images/home/about.svg";
import MyCalendar from "../MyCalendar/MyCalendar";
import {Link, Route, Routes} from "react-router-dom";

import Programs from "../Programs/Programs";
import {ProgramsList} from "../Programs/ProgramsList";
import {fetchCourses} from "../../features/coursesSlice/coursesSlice";
import {findObjectsByLanguage} from "../../helpers/findObjectByLanguage";
import {WebinarsList} from "../Webinars/WebinarList/WebinarsList";


const navs = [
    {description: 'Вебинары', path: 'webinars', img: union},
    {description: 'программы', path: 'programs', img: laptop},
    {description: 'расписание', path: 'schedule', img: schedule},
    {description: 'о нас', path: 'about-us', img: about},
]

const Home = ({context}) => {
    const {language} = useSelector(store => store.user.user);
    const user = useSelector(store => store.user);
    const globalCourses = useSelector(store => store.courses);

    console.log('QQ', 1)
    if (user.isLoading && globalCourses.isLoading) {
        return (
            <div>loading</div>
        )
    }

    const userProgram = user.user.courses.programs;
    const userWebinars = user.user.courses.programs;
    const userProgramsByLanguage = findObjectsByLanguage(userProgram, language, true);
    const userWebinarsByLanguage = findObjectsByLanguage(userWebinars, language, true);


    const globalProgram = globalCourses.courses.programs;
    const globalWebinars = globalCourses.courses.webinars;
    const globalProgramsByLanguage = findObjectsByLanguage(globalProgram, language, false);
    const globalWebinarsByLanguage = findObjectsByLanguage(globalWebinars, language, false);

    console.log('PROP', context)

    return (

        <div className={styles.root}>

            <div className={styles.gridSidebar}>
                {navs.map(nav =>
                    <div
                        className={`
                        ${styles.block} 
                        ${context?.path === nav.path ? styles.active : ''}
                        `}>
                        <Link to={`/home/${nav.path}`}>
                            <div className={styles.blockElement}>
                                <img src={nav.img} alt="laptop"/>
                                <p>{nav.description}</p>
                            </div>
                        </Link>
                    </div>
                )}

                <div className={styles.block}>
                    <div className={styles.blockElement}>
                        <p>ВЫЙТИ</p>
                    </div>
                </div>
            </div>

            <div className={styles.gridContent}>
                <div className={styles.contentWrapper}>
                    <Routes>
                        <Route path='/home/schedule/' element={<MyCalendar/>}/>

                        <Route path='/home/webinars/' element={
                            <div className={styles.webinarsRow}>
                                <WebinarsList webinars={userWebinarsByLanguage}/>
                            </div>
                        }/>

                        <Route path='/home/programs/' element={
                            <div className={styles.programsRow}>
                                <ProgramsList programs={userProgramsByLanguage}/>
                            </div>
                        }/>
                    </Routes>
                </div>
            </div>
        </div>

    );
};

export default Home;