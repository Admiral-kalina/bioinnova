import Container from "../Container/Container";
import * as styles from "./webinars.module.scss";
import {Link} from "gatsby";
import React from "react";

export const WebinarsList = ({webinars}) => {
    return (
        <Container>
            <div className={styles.root}>

                <p className={styles.back}>Услуги</p>
                <p className={styles.title}>Лекции и вебинары</p>
                <div className={styles.row}>
                    {webinars.map(webinar =>
                        <div className={styles.column}>
                            <p className={styles.section}>{webinar.section} №{webinar.id}</p>
                            <p className={styles.name}>{webinar.name}</p>
                            <p className={styles.date}> {webinar.date}</p>
                            <p className={styles.teacher}>{webinar.teacher}</p>
                            <p className={styles.time}>{webinar.duration} <span>минут</span></p>
                            <Link to={webinar.keyName + webinar.id}>Открыть</Link>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}