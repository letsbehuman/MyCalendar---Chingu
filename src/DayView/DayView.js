import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { TbCalendarPlus } from 'react-icons/tb';
import './dayView.scss';
import dayjs from 'dayjs';

const DayView = ({ modalHandle }) => {
  const { currentTime, appointments, setAppointments } = useContext(AppContext);

  const getAppointments = (day) => {
    const currentAppointments = appointments.filter(
      (a) => dayjs(a.day).format('D') == currentTime.day
    );
    return currentAppointments;
  };

  return (
    <div className="dayView-container">
      <h3>{currentTime.weekday}</h3>
      <h3>{`${currentTime.fullMonth} ${currentTime.day}`}</h3>
      <div className="appointments-container">
        {getAppointments(currentTime.day).length
          ? getAppointments(currentTime.day).map((event, index) => (
              <div key={index} className="appointment-content">
                <span>{`${event.begins} ${event.title}`}</span>
              </div>
            ))
          : 'no appointmets'}
      </div>
      <button className="add-appointment" onClick={() => modalHandle()}>
        <TbCalendarPlus />
      </button>
    </div>
  );
};

export default DayView;
