import React from 'react';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import './modals.scss';

const SelectedAppointment = ({ modalHandle }) => {
  const { selectedEvent, dispachCalEvent } = useContext(AppContext);

  const [formData, setFormData] = useState({
    id: selectedEvent ? selectedEvent.id : '',
    title: selectedEvent ? selectedEvent.title : '',
    startDate: selectedEvent ? selectedEvent.startDate : '',
    endDate: selectedEvent ? selectedEvent.endDate : '',
    begins: selectedEvent ? selectedEvent.begins : '',
    ends: selectedEvent ? selectedEvent.ends : '',
    people: selectedEvent ? selectedEvent.people : '',
    location: selectedEvent ? selectedEvent.location : '',
    description: selectedEvent ? selectedEvent.description : '',
  });

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(formData);
    dispachCalEvent({ type: 'update', payload: formData });
    modalHandle('update');
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
        value={formData.startDate}
        name="startDate"
        onChange={(e) => onChangeHandle(e)}
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
      <div className="update-btns">
        <button
          type="button"
          onClick={() => {
            dispachCalEvent({ type: 'delete', payload: selectedEvent });
            modalHandle();
          }}
        >
          Delete
        </button>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default SelectedAppointment;
