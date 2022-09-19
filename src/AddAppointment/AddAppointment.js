import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import './addAppointment.scss';

const AddAppointment = ({ modalHandle }) => {
  const { selectedDate, dispachCalEvent, setAppointments } =
    useContext(AppContext);

  const [formData, setFormData] = useState([
    {
      title: '',
      startDate: '',
      endDate: '',
      begins: '',
      ends: '',
      people: '',
      location: '',
      description: '',
    },
  ]);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const calendarEvent = {
      id: Date.now(),
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      begins: formData.begins,
      ends: formData.ends,
      people: formData.people,
      location: formData.location,
      description: formData.description,
      day: selectedDate.valueOf(),
    };
    dispachCalEvent({ type: 'push', payload: calendarEvent });
    setAppointments((prevAppointments) => [...prevAppointments, calendarEvent]);
    modalHandle();
  };

  const onChangeHandle = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={(e) => onSubmitHandle(e)}>
      <label className="label">Title:</label>
      <input
        name="title"
        value={formData.title}
        type="text"
        placeholder="Event title"
        onChange={(e) => onChangeHandle(e)}
        className="input-long"
        required
      ></input>
      <label className="label">Start date:</label>
      <input
        type="text"
        defaultValue={selectedDate.format('MM/DD/YYYY')}
        required
      ></input>
      <label className="end-date">End date:</label>
      <input
        type="date"
        placeholder="dd/mm/yyyy"
        value={formData.endDate}
        name="endDate"
        onChange={(e) => onChangeHandle(e)}
      ></input>
      <label className="label">Begins:</label>
      <input
        type="time"
        placeholder="00:00"
        value={formData.begins}
        name="begins"
        onChange={(e) => onChangeHandle(e)}
        required
      ></input>
      <label className="ends">Ends:</label>
      <input
        type="time"
        placeholder="00:00"
        value={formData.ends}
        name="ends"
        onChange={(e) => onChangeHandle(e)}
      ></input>
      <label className="label">People:</label>
      <input
        type="text"
        placeholder=""
        value={formData.people}
        name="people"
        onChange={(e) => onChangeHandle(e)}
        className="input-long"
      ></input>
      <label className="label">Location:</label>
      <input
        type="text"
        placeholder=""
        value={formData.location}
        name="location"
        onChange={(e) => onChangeHandle(e)}
        className="input-long"
      ></input>
      <label className="label">Description:</label>
      <input
        type="text"
        placeholder=""
        value={formData.description}
        name="description"
        onChange={(e) => onChangeHandle(e)}
        className="input-long"
      ></input>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddAppointment;
