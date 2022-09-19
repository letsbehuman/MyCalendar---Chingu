import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import './monthView.scss';
import dayjs from 'dayjs';
import { useEffect } from 'react';

const Day = ({ date }) => {
  const { currentTime, setSelectedDate, savedEvents } = useContext(AppContext);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = savedEvents.filter(
      (e) =>
        dayjs(e.day).format('MM/DD/YYYY') === dayjs(date).format('MM/DD/YYYY')
    );
    setDayEvents(events);
  }, [savedEvents, date]);

  const selectDay = (e) => {
    const { numMonth, year } = currentTime;
    const day = e.target.innerHTML;
    setSelectedDate(dayjs(`${year}-${numMonth}-${day}`));
  };

  return (
    <div
      className={
        currentTime.day == dayjs(date).format('D')
          ? 'selected-day card-day'
          : 'card-day'
      }
      onClick={(e) => selectDay(e)}
    >
      <div className="header">{dayjs(date).format('D')}</div>
      <div className="day-with-date">
        {dayEvents.length ? <div className="appointment">{'-'}</div> : ''}
      </div>
    </div>
  );
};

export default Day;
