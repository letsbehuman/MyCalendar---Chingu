import React, { useState } from 'react';
import './addAppointment.scss';

const AddAppointment = ({
  selectedDay,
  setNewAppointment,
  modalHandle,
  newAppointment,
}) => {
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
    const appointmentsArray = [];
    e.preventDefault();
    setNewAppointment((prevNewAppointments) => [
      ...prevNewAppointments,
      formData,
    ]);

    modalHandle();
  };

  const onChangeHandle = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        startDate: selectedDay.format('DD/MM/YYYY'),
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
      ></input>
      <label className="label">Start date:</label>
      <div>{selectedDay.format('DD/MM/YYYY')}</div>
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
      <button onClick={(e) => onSubmitHandle(e)}>Add Event</button>
    </form>
  );
};

export default AddAppointment;
