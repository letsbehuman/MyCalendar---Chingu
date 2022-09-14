import './App.scss';
import React, { useState, useEffect } from 'react';
import DayView from './DayView/DayView';
import MonthView from './Monthview/MonthView';
import dayjs from 'dayjs';
import AddAppointment from './AddAppointment/AddAppointment';

function App() {
  // const [selectedDate, setSelectedDate] = useState({
  //   day: '',
  //   weekday: '',
  //   month: '',
  //   prevMonth: '',
  //   nextMonth: '',
  //   totalDays: '',
  //   year: '',
  // });

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // setSelectedDate({
    //   day: currentTime.day,
    //   weekday: currentTime.numDay,
    //   month: currentTime.month,
    //   totalDays: currentTime.totalDays,
    //   year: currentTime.year,
    // });
  }, []);

  // console.log('app', selectedDate);

  const currentTime = {
    fullDate: dayjs(selectedDate).format('DD/MM/YYYY'),
    day: dayjs(selectedDate).format('D'),
    weekday: dayjs(selectedDate).format('dddd'),
    numDay: dayjs(selectedDate).format('d'),
    totalDays: dayjs(selectedDate).daysInMonth(),
    month: dayjs(selectedDate).format('MMM'),
    numMonth: dayjs(selectedDate).format('M'),
    prevMonth: dayjs(selectedDate).add(1, 'month').format('MMM'),
    nextMonth: dayjs(selectedDate).subtract(1, 'month').format('MMM'),
    fullMonth: dayjs(selectedDate).format('MMMM'),
    year: dayjs(selectedDate).year(),
    // firstDayMonth: dayjs(`${currentTime.year}-${currentTime.numMonth}-1`),
  };
  // console.log(currentTime);
  return (
    <div className="App">
      <MonthView
        currentTime={currentTime}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <DayView
        currentTime={currentTime}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showModal && <AddAppointment selectedDay={selectedDate} />}
    </div>
  );
}

export default App;
