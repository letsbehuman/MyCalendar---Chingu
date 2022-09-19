import './App.scss';
import React, { useContext } from 'react';
import AppointmentsView from './AppointmentsView/AppointmentsView';
import MonthView from './Monthview/MonthView';
import AddAppointment from './Modals/AddAppointment';
import SelectedAppointment from './Modals/SelectedAppointment';
import AppContext from './context/AppContext';

function App() {
  const { addModal, setAddModal, updateModal, setUpdateModal } =
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

  return (
    <div className="App">
      <MonthView />
      <AppointmentsView modalHandle={modalHandle} />
      {addModal && (
        <div className="modal" onClick={modalHandle}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <AddAppointment modalHandle={modalHandle} />
          </div>
        </div>
      )}
      {updateModal && (
        <div className="modal" onClick={modalHandle}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <SelectedAppointment modalHandle={modalHandle} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
