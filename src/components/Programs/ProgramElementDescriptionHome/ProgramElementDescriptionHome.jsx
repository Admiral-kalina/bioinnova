import React from 'react';

// styles
import * as styles from "./programElement.module.scss"
import MyButton from "../../UI/MyButton/MyButton";
import WebinarListHome from "../../Webinars/WebinarListHome/WebinarListHome";

const ProgramElementDescriptionHome = ({program}) => {
    if (!program){
        return <div>Loading</div>
    }
    console.log('PROGRAM', program)
    return (
        <div className={styles.root}>
            <div className={styles.row}>
                <div className={styles.webinarsList}>
                    <WebinarListHome webinars={program.webbinarrs.data} isWebinarHome={false}/>
                </div>
                <div className={styles.program}>
                    <div className={styles.programTop}>
                        <p className={styles.section}>Программа</p>
                        <p className={styles.name}>{program.name}</p>
                        <p className={styles.date}>{program.start}</p>
                        <p className={styles.webinarCount}>{program.webinarsCount}</p>
                    </div>
                    {program.isAcquired?
                        <></>
                        :
                        <div className={styles.programBottom}>
                            <p className={styles.price}>{program.price}</p>
                            <MyButton>Купить Программу</MyButton>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProgramElementDescriptionHome;