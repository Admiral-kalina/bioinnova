import React from 'react';
import arrowUpRight from "../../../images/arrowUpRightSm.svg";

import * as styles from "../programElement.module.scss";
import {Link} from "react-router-dom";



const ProgramElement = ({programs}) => {
    console.log('SOME',programs)
    return (
        <>
            {programs.map(program =>
                <div className={styles.column}>

                    <Link to={`/home/programs/program?program=${program.id}#programs`}>
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