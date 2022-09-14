import './App.scss';
import React, { useState, useEffect } from 'react';
import DayView from './DayView/DayView';
import MonthView from './Monthview/MonthView';
import dayjs from 'dayjs';
import AddAppointment from './AddAppointment/AddAppointment';

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [newAppointment, setNewAppointment] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {}, [newAppointment]);

  console.log('app', newAppointment);

  const currentTime = {
    fullDate: dayjs(selectedDate).format('DD/MM/YYYY'),
    day: dayjs(selectedDate).format('D'),
    weekday: dayjs(selectedDate).format('dddd'),
    numDay: dayjs(selectedDate).format('d'),
    totalDays: dayjs(selectedDate).daysInMonth(),
    month: dayjs(selectedDate).format('MMM'),
    numMonth: dayjs(selectedDate).format('M'),
    nextMonth: dayjs(selectedDate).add(1, 'month').format('MMM'),
    prevMonth: dayjs(selectedDate).subtract(1, 'month').format('MMM'),
    fullMonth: dayjs(selectedDate).format('MMMM'),
    year: dayjs(selectedDate).year(),
  };
  // console.log(currentTime);
  const modalHandle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <MonthView
        currentTime={currentTime}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <DayView
        currentTime={currentTime}
        modalHandle={modalHandle}
        newAppointment={newAppointment}
      />
      {showModal && (
        <div className="modal" onClick={modalHandle}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <AddAppointment
              modalHandle={modalHandle}
              setNewAppointment={setNewAppointment}
              newAppointment={newAppointment}
              selectedDay={selectedDate}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
