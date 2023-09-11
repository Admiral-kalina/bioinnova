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
import {Route, Routes} from "react-router-dom";
import {Link} from "gatsby";


const homeNavs = [
    {
        id: 1,
        path: 'webinar',
        isActive: false,
    }
    ,
    {
        id: 2,
        path: 'programs',
        isActive: false,
    }
    ,
    {
        id: 3,
        path: 'schedule',
        isActive: false,
    }
    ,
    {
        id: 4,
        path: 'about-us',
        isActive: false,
    }
]

const navs = [
    {description: 'Вебинары', path: 'webinar', img: union},
    {description: 'программы', path: 'programs', img: laptop},
    {description: 'расписание', path: 'schedule', img: schedule},
    {description: 'о нас', path: 'about-us', img: about},
]

const Home = ({context}) => {
    const dispatch = useDispatch()
    const a = useSelector(store => store.user);

    useEffect(() => {
        dispatch(fetchUserCourses())
    }, [])

    console.log('PROP', context)

    const {username} = userData();
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
                <Routes>
                    <Route path='/home' element={<MyCalendar/>}/>
                    <Route path='/home/schedule' element={<MyCalendar/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default Home;