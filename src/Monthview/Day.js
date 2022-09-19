import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import './monthView.scss';
import dayjs from 'dayjs';
import { useEffect } from 'react';

const Day = ({ day }) => {
  const { currentTime, setSelectedDate, savedEvents } = useContext(AppContext);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = savedEvents.filter((e) => dayjs(e.day).format('D') == day);
    setDayEvents(events);
  }, [savedEvents, day]);

  const selectDay = (e) => {
    const { numMonth, year } = currentTime;
    const day = e.target.innerHTML;
    setSelectedDate(dayjs(`${year}-${numMonth}-${day}`));
  };

  return (
    <div
      className={currentTime.day == day ? 'selected-day card-day' : 'card-day'}
      onClick={(e) => selectDay(e)}
    >
      <div className="header">{day}</div>
      <div className="day-with-date">
        {dayEvents.length ? <div className="appointment">{'-'}</div> : ''}
      </div>
    </div>
  );
};

export default Day;
