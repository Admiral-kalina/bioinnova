import Container from "../../Container/Container";
import * as styles from "../programs.module.scss";
import {Link} from "gatsby";
import arrowUpRight from "../../../images/arrowUpRightSm.svg";
import React from "react";
import ProgramElement from "../ProgramElement/ProgramElement";

export const ProgramsList = ({programs}) => {
    return (
        <Container>
            <div className={styles.root}>
                <p className={styles.back}>Услуги</p>
                <p className={styles.title}>Программы обучения</p>
                <div className={styles.row}>
                    <ProgramElement programs={programs}/>
                </div>
            </div>
        </Container>
    )
}