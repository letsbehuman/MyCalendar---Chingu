import React from 'react';
import './addAppointment.scss';

const AddAppointment = ({ selectedDay }) => {
  return (
    <div className="modal">
      <div className="form-container">
        <form>
          <label>Title:</label>
          <input type="text" placeholder="Event title"></input>
          <label>Start date:</label>
          <input type="date" placeholder="dd/mm/yyyy"></input>
          <label>End date:</label>
          <input type="text" placeholder="dd/mm/yyyy"></input>
          <label>Begins:</label>
          <input type="text" placeholder="00:00"></input>
          <label>Ends:</label>
          <input type="text" placeholder="00:00"></input>
          <label>People:</label>
          <input type="text" placeholder=""></input>
          <label>Location:</label>
          <input type="text" placeholder=""></input>
          <label>Description:</label>
          <input type="text" placeholder=""></input>
          <button>Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
