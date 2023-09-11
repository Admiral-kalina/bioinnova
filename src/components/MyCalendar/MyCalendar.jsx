import React, {useRef} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'


// styles
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import CustomToolbar from "./CustomCalendar";
import * as styles from "../Home/home.module.scss";

const localizer = momentLocalizer(moment)


const MyCalendar = () => {
    const ref = useRef()
    console.log(ref)
    return (
        <div className={styles.gridCalendar}>
        <Calendar
            ref={ref}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            components={{toolbar: CustomToolbar}}
        />
        </div>

    );
};

export default MyCalendar;

