import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import DayView from './DayView/DayView';
import MonthView from './Monthview/MonthView';
import dayjs from 'dayjs';
import AddAppointment from './Modals/AddAppointment';
import SelectedAppointment from './Modals/SelectedAppointment';
import AppContext from './context/AppContext';
import calendarService from './helpers/calendarService';

function App() {
  const { addModal, setAddModal, updateModal, setUpdateModal, currentTime } =
    useContext(AppContext);
  const modalHandle = (str) => {
    if (str === 'add') {
      setAddModal(!addModal);
    } else if (str === 'update') {
      setUpdateModal(!updateModal);
    } else {
      setAddModal(false);

      setUpdateModal(false);
    }
  };
  console.log(currentTime);
  const appointmentHandle = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <MonthView />
      <DayView modalHandle={modalHandle} />
      {addModal && (
        <div className="modal" onClick={modalHandle}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <AddAppointment
              modalHandle={modalHandle}
              appointmentHandle={appointmentHandle}
            />
          </div>
        </div>
      )}
      {updateModal && (
        <div className="modal" onClick={modalHandle}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <SelectedAppointment
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
