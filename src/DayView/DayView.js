import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { TbCalendarPlus } from 'react-icons/tb';
import './dayView.scss';

const DayView = ({ modalHandle }) => {
  const { currentTime, dayEvents } = useContext(AppContext);
  return (
    <div className="dayView-container">
      <h3>{currentTime.weekday}</h3>
      <h3>{`${currentTime.fullMonth} ${currentTime.day}`}</h3>
      <div className="appointments-container">
        {/* {!dayEvents.length
          ? 'No appointments'
          : dayEvents.map((event, index) => {
              const {
                title,
                startDate,
                endDate,
                begins,
                ends,
                people,
                location,
                description,
              } = event;
              return (
                <div key={index} className="appointment-content">
                  <span>{begins}</span>
                  <span>{title}</span>
                  <span>{startDate}</span>
                  <span>{endDate}</span>
                  <span>{ends}</span>
                  <span>{people}</span>
                  <span>{location}</span>
                  <span>{description}</span>
                </div>
              );
            })} */}
      </div>
      <button className="add-appointment" onClick={() => modalHandle()}>
        <TbCalendarPlus />
      </button>
    </div>
  );
};

export default DayView;
