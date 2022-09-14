import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import './monthView.scss';

const MonthView = ({ currentTime, selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState([]);

  useEffect(() => {}, [selectedDate]);

  const selectDay = (e) => {
    const { numMonth, year } = currentTime;
    const day = e.target.innerHTML;
    // console.log(numMonth, year, day);
    // console.log(dayjs(`${year}-${numMonth}-${day}`));
    setSelectedDate(dayjs(`${year}-${numMonth}-${day}`));
  };

  const displayDays = (date) => {
    //display 42 days
    //getting the index[0] of first day of the current month
    const firstDayMonth = dayjs(`${date.year}-${date.numMonth}-1`).format('d');
    //Creating a new Array from the current month
    const currMonthDays = Array.from(
      { length: date.totalDays },
      (curr, i) => i + 1
    );
    //Creating a new array from the prevMonth only last necesary days
    const prevMonthDays = Array.from(
      {
        length: dayjs(selectedDate).subtract(1, 'month').daysInMonth(),
      },
      (curr, i) => i + 1
    ).slice(-firstDayMonth);

    // console.log('firsrday:', firstDayMonth, 'prevMonth:', prevMonthDays);

    //Getting the rest days to sum 42 from prevMonth and currMonth

    const lastDays =
      prevMonthDays.length < 6
        ? 42 - prevMonthDays.length - currMonthDays.length
        : 42 - currMonthDays.length;

    console.log(lastDays);

    //Creating a new array with the first days of the nextMonth
    const nextMonthDays = Array.from(
      {
        length: dayjs(selectedDate).add(1, 'month').daysInMonth(),
      },
      (curr, i) => i + 1
    ).slice(0, lastDays);
    //Joining all arrays
    const matchingDate =
      prevMonthDays.length < 6
        ? [...prevMonthDays, ...currMonthDays, ...nextMonthDays]
        : [...currMonthDays, ...nextMonthDays];
    // const matchingDate = [...prevMonthDays, ...currMonthDays, ...nextMonthDays];
    //Displaying the results
    return matchingDate.map((day, index) => (
      <div
        key={index}
        className={
          currentTime.day == day ? 'selected-day card-day' : 'card-day'
        }
        onClick={(e) => {
          selectDay(e);
        }}
      >
        {day}
      </div>
    ));
  };
  let countPrevMonth = 0;
  let countNextMonth = 0;

  const countHandler = (str) => {
    if (str === 'next') {
      countNextMonth += 1;
      countPrevMonth = 0;
    }
    if (str === 'prev') {
      countNextMonth = 0;
      countPrevMonth += 1;
    }
  };
  const setMonthBtn = (str) => {
    const { year, day, prevMonth, nextMonth } = currentTime;
    if (str === 'next') {
      setSelectedDate(dayjs(`${year}-${prevMonth}-${day}`));
    }
    if (str === 'prev') {
      setSelectedDate(dayjs(`${year}-${nextMonth}-${day}`));
    }
  };

  return (
    <div className="monthView-container">
      <h1 className="monthView__title">eCalendar</h1>
      <h4 className="monthView__year">{currentTime.year}</h4>
      <button
        className="display__btn prev-btn"
        onClick={() => setMonthBtn('prev')}
      >
        {' '}
        prev{' '}
      </button>
      <div className="display">
        <div className="months">
          <button className="prev-month">{currentTime.prevMonth}</button>
          <button className="current-month">{currentTime.month}</button>
          <button className="next-month">{currentTime.nextMonth}</button>
        </div>
        <div className="weekdays">
          <div className="weekday">SUN</div>
          <div className="weekday">MON</div>
          <div className="weekday">TUE</div>
          <div className="weekday">WED</div>
          <div className="weekday">THU</div>
          <div className="weekday">FRI</div>
          <div className="weekday">SAT</div>
        </div>
        <div className="month-days">{displayDays(currentTime)}</div>
      </div>
      <button
        className="display__btn next-btn"
        onClick={() => setMonthBtn('next')}
      >
        next
      </button>
    </div>
  );
};

/* 
to get days of current month
chech weekday and place it in currespond weekday
display 42 days

*/

export default MonthView;
