import { createContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useReducer } from 'react';

const AppContext = createContext();
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((e) => (e.id === payload.id ? payload : e));
    case 'delete':
      return state.filter((e) => e.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem('savedEvents');
  const parsedEvenets = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvenets;
}

export function AppContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [savedEvents, dispachCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem('saveEvents', JSON.stringify(savedEvents));
  }, [savedEvents, appointments]);

  const currentTime = {
    fullDate: dayjs(selectedDate).format('DD/MM/YYYY'),
    day: dayjs(selectedDate).format('D'),
    weekday: dayjs(selectedDate).format('dddd'),
    numDay: dayjs(selectedDate).format('d'),
    totalDays: dayjs(selectedDate).daysInMonth(),
    month: dayjs(selectedDate).format('MMM'),
    numMonth: dayjs(selectedDate).format('M'),
    nextMonth: dayjs(selectedDate).add(1, 'month').format('MMM'),
    prevMonth: dayjs(selectedDate).subtract(1, 'month').format('MMM'),
    fullMonth: dayjs(selectedDate).format('MMMM'),
    year: dayjs(selectedDate).year(),
    daysArray: [],
  };

  return (
    <AppContext.Provider
      value={{
        currentTime,
        selectedDate,
        setSelectedDate,
        addModal,
        setAddModal,
        savedEvents,
        dispachCalEvent,
        selectedEvent,
        setSelectedEvent,
        updateModal,
        setUpdateModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
