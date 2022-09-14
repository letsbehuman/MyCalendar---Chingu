import React, { useState } from 'react';
import './dayView.scss';

const DayView = ({
  currentTime,
  selectedDate,
  setSelectedDate,
  showModal,
  setShowModal,
}) => {
  const modalHandle = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <div className="dayView-container">
      <div className="signin">sign in</div>
      <h3>{currentTime.weekday}</h3>
      <h3>{`${currentTime.fullMonth} ${currentTime.day}`}</h3>
      <div className="appointments-container">
        <div className="appointment">{'appointment'}</div>
      </div>
      <button className="add-apointment" onClick={() => modalHandle()}>
        {'+'}
      </button>
    </div>
  );
};

export default DayView;
