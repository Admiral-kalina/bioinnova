import * as styles from "../webinars.module.scss";
import {Link} from "gatsby";
import React from "react";

export const WebinarsList = ({webinars}) => {
    return (
        <>


            {webinars.map(webinar =>
                <div className={styles.column}>
                    <p className={styles.section}>{webinar.section} №{webinar.id}</p>
                    <p className={styles.name}>{webinar.name}</p>
                    <p className={styles.date}> {webinar.date}</p>
                    <p className={styles.teacher}>{webinar.teacher}</p>
                    <p className={styles.time}>{webinar.duration} <span>минут</span></p>
                    <Link
                        to={`/services/webinars-and-lectures/${webinar.keyName + webinar.id}`}
                    >
                        Открыть
                    </Link>
                </div>
            )}
        </>


    )
}