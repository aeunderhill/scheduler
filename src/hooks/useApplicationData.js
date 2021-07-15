import { useState, useEffect} from "react";
import axios from 'axios';

export default function useApplicationData() {

const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});

const setDay = day => setState({ ...state, day });


useEffect(() => {
  Promise.all([
    Promise.resolve(axios.get('http://localhost:8001/api/days')),
    Promise.resolve(axios.get('http://localhost:8001/api/appointments')),
    Promise.resolve(axios.get('http://localhost:8001/api/interviewers'))
  ]).then((all) => {
    console.log(all)
    setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  })
}, []);

//get interview spots for day function

function getSpotsForDay(appState, appointments) {

 let spots = 0;
 const dayObject = appState.days.find(day => day.name === appState.day)

dayObject.appointments.forEach(appointmentId => {
  if(!appointments[appointmentId].interview)
  spots++
});

return spots
};

//save/book interview function

function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  const dayObject = state.days.find(day => day.name === state.day)

  dayObject.spots = getSpotsForDay(state, appointments)

  const newDays = state.days
  newDays[dayObject.id - 1] = dayObject


  return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment).then(() => setState(prev => ({...prev, appointments, days: newDays})))
  };

//cancel interview function

function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  const dayObject = state.days.find(day => day.name === state.day)

  dayObject.spots = getSpotsForDay(state, appointments)

  const newDays = state.days
  newDays[dayObject.id - 1] = dayObject



  return axios.delete(`http://localhost:8001/api/appointments/${id}`, appointment)
  .then(() => setState(prev => ({...prev, appointments, days: newDays})))}

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }

};