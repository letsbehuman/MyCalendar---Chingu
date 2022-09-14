import React, { useState } from 'react';
import { TbCalendarPlus } from 'react-icons/tb';
import './dayView.scss';

const DayView = ({ currentTime, modalHandle, newAppointment }) => {
  console.log(
    newAppointment.map((appointment, index) => {
      return appointment;
    })
  );

  return (
    <div className="dayView-container">
      <h3>{currentTime.weekday}</h3>
      <h3>{`${currentTime.fullMonth} ${currentTime.day}`}</h3>
      <div className="appointments-container">
        {!newAppointment.length
          ? 'No appointments'
          : newAppointment.map((appointment, index) => {
              const {
                title,
                startDate,
                endDate,
                begins,
                ends,
                people,
                location,
                description,
              } = appointment;
              return (
                <div key={index} className="appointment-content">
                  <div>{`${begins} ${title} with ${people} at ${location}. ${description}`}</div>

                  {/* <div>{begins}</div>
                  <div>{title}</div>
                  <div>{startDate}</div>
                  <div>{endDate}</div>
                  <div>{ends}</div> 
                  <div>{people}</div>
                  <div>{location}</div>
                  <div>{description}</div> */}
                </div>
              );
            })}
      </div>
      <button className="add-appointment" onClick={() => modalHandle()}>
        <TbCalendarPlus />
      </button>
    </div>
  );
};

export default DayView;
