import dayjs from 'dayjs';
import React from 'react';
import './monthView.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MonthView = ({ currentTime, selectedDate, setSelectedDate }) => {
  const selectDay = (e) => {
    const { numMonth, year } = currentTime;
    const day = e.target.innerHTML;
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

    //Getting the rest days to sum 42 from prevMonth and currMonth

    const lastDays =
      prevMonthDays.length < 7
        ? 42 - prevMonthDays.length - currMonthDays.length
        : 42 - currMonthDays.length;

    //Creating a new array with the first days of the nextMonth
    const nextMonthDays = Array.from(
      {
        length: dayjs(selectedDate).add(1, 'month').daysInMonth(),
      },
      (curr, i) => i + 1
    ).slice(0, lastDays);
    //Displaying the results
    return (
      <div className="month-days">
        {prevMonthDays.length < 7 &&
          prevMonthDays.map((day, index) => (
            <div
              key={index}
              onClick={() => setMonthBtn('prev')}
              className="non-current-month"
            >
              {day}
            </div>
          ))}
        {currMonthDays.map((day, index) => (
          <div
            key={index}
            id={index}
            className={
              currentTime.day == day ? 'selected-day card-day' : 'card-day'
            }
            onClick={(e) => {
              selectDay(e);
            }}
          >
            {day}
          </div>
        ))}
        {nextMonthDays.map((day, index) => (
          <div
            key={index}
            onClick={() => setMonthBtn('next')}
            className="non-current-month"
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  const setMonthBtn = (str) => {
    const { year, day, prevMonth, nextMonth } = currentTime;
    if (str === 'next') {
      setSelectedDate(dayjs(`${year}-${nextMonth}-${day}`));
    }
    if (str === 'prev') {
      setSelectedDate(dayjs(`${year}-${prevMonth}-${day}`));
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
        <IoIosArrowBack />
      </button>
      <div className="display">
        <div className="months">
          <button
            className="non-current-month"
            onClick={() => setMonthBtn('prev')}
          >
            {currentTime.prevMonth}
          </button>
          <button className="current-month">{currentTime.month}</button>
          <button
            className="non-current-month"
            onClick={() => setMonthBtn('next')}
          >
            {currentTime.nextMonth}
          </button>
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
        <div className="">{displayDays(currentTime)}</div>
      </div>
      <button
        className="display__btn next-btn"
        onClick={() => setMonthBtn('next')}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MonthView;
