import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import DayView from './DayView/DayView';
import MonthView from './Monthview/MonthView';
import dayjs from 'dayjs';
import AddAppointment from './AddAppointment/AddAppointment';
import AppContext from './context/AppContext';
import calendarService from './helpers/calendarService';

function App() {
  const { showModal, setShowModal } = useContext(AppContext);

  const modalHandle = () => {
    setShowModal(!showModal);
  };
  const appointmentHandle = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <MonthView />
      <DayView modalHandle={modalHandle} />
      {showModal && (
        <div className="modal" onClick={modalHandle}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <AddAppointment
              modalHandle={modalHandle}
              appointmentHandle={appointmentHandle}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
