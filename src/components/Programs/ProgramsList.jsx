import Container from "../Container/Container";
import * as styles from "./programs.module.scss";
import {Link} from "gatsby";
import arrowUpRight from "../../images/arrowUpRightSm.svg";
import React from "react";

export const ProgramsList = ({programs}) => {
    return (
        <Container>
            <div className={styles.root}>
                <p className={styles.back}>Услуги</p>
                <p className={styles.title}>Программы обучения</p>
                <div className={styles.row}>
                    {programs.map(program =>
                        <div className={styles.column}>
                            <Link to={program.keyName + program.id}>
                                <p className={styles.section}>{program.section}</p>
                                <p className={styles.name}>{program.name}</p>
                                <p className={styles.date}><span>Начало:</span> {program.date}</p>
                                <div className={styles.bottom}>
                                    <p><span>Вебинаров:</span> {program.webinarsCount}</p>
                                    <img src={arrowUpRight} alt="arrowUpRight"/>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}