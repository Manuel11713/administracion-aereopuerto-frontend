import React from 'react';

import {DatePicker, TimePicker} from 'antd';

const Date_Time = ({setDate, setTime}) => {
    const changeDate = (date, dateString) => {
        setDate(dateString);
    }

    const changeTime = (time, timeString) => {
        setTime(timeString);  
    };

    return(
        <div className="container">
            <h2>Date and Time</h2>
            <DatePicker style={{width:'100%'}} onChange={changeDate}/>
            <TimePicker style={{width:'100%'}} onChange={changeTime}/>
        </div>
    );
}

export default Date_Time;