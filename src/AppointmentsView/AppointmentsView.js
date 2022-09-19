import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { TbCalendarPlus } from 'react-icons/tb';
import './appointmentsView.scss';
import dayjs from 'dayjs';

const AppointmentsView = ({ modalHandle }) => {
  const { currentTime, setSelectedEvent, savedEvents } = useContext(AppContext);

  const getAppointments = (day) => {
    const currentAppointments = savedEvents.filter(
      (a) => dayjs(a.day).format('DD/MM/YYYY') == currentTime.fullDate
    );
    return currentAppointments;
  };

  const showSelectedEvent = (event) => {
    modalHandle('update');
    setSelectedEvent(event);
  };

  return (
    <div className="dayView-container">
      <h3>{currentTime.weekday}</h3>
      <h3>{`${currentTime.fullMonth} ${currentTime.day}`}</h3>
      <div className="appointments-container">
        {getAppointments(currentTime.day).length
          ? getAppointments(currentTime.day).map((event, index) => (
              <div
                key={index}
                className="appointment-content"
                onClick={() => showSelectedEvent(event)}
              >
                <span>{`${event.begins} ${event.title}`}</span>
              </div>
            ))
          : 'No appointments'}
      </div>
      <button className="add-appointment" onClick={() => modalHandle('add')}>
        <TbCalendarPlus />
      </button>
    </div>
  );
};

export default AppointmentsView;
