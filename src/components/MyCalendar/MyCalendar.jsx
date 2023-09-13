import React, {useRef} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'


// styles
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";
import CustomToolbar from "./CustomCalendar";
import * as styles from "../Home/home.module.scss";
import 'moment/locale/uk'
import 'moment/locale/ru'

const localizer = momentLocalizer(moment)


const MyCalendar = ({general}) => {
    moment.locale("ua");
    const ref = useRef()
    console.log(ref)

    return (
        <div className={styles.gridCalendar}>
            <div className={`calendar ${general ? 'generalCalendar' : ''}`}>
                <Calendar
                    ref={ref}
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    components={{toolbar: CustomToolbar}}
                />
            </div>
        </div>

    );
};

export default MyCalendar;

