import React from 'react';
import Container from "../Container/Container";

import * as styles from "./services.module.scss";
import {Link} from "gatsby";

// assets
import program from "../../images/services/program.svg";
import webinar from "../../images/services/webinar.svg"
import arrowUpRight from "../../images/arrowUpRight.svg"

const Services = () => {
    return (
        <div className={styles.root}>
            <Container>
                <div className={styles.row}>
                    <p className={styles.title}>Услуги</p>
                    <div className={styles.courseRow}>
                        <Link to='/services/programs'>
                            <div className={styles.courseColumn}>
                                <img className={styles.logo} src={program} alt="program"/>
                                <p className={styles.description}>Программы обучения</p>
                                <img className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link to='/services/webinars-and-lectures'>
                            <div className={styles.courseColumn}>

                                <img className={styles.logo} src={webinar} alt="webinar"/>
                                <p className={styles.description}>Лекции и вебинары</p>
                                <img className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>

                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;