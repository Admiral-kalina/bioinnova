import React from 'react';
import * as styles from "../programElement.module.scss";

import arrowUpRight from "../../../images/arrowUpRightSm.svg";
import {Link} from "gatsby";


const ProgramElement = ({programs}) => {
    console.log('SOME',programs)
    return (
        <>
            {programs.map(program =>
                <div className={styles.column}>
                    <Link to={`program${program.id}`}>
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
        </>
    );
};

export default ProgramElement;