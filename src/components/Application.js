
import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList"
import "components/DayListItem.js"
import Appointment from "components/Appointment"
import axios from "axios"
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors"

function bookInterview(id, interview) {
  console.log(id, interview);
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment).then(() => setState(prev => ({...state, appointments})))
  };



  //setState({
    //...state,
    //appointments
  //});





const appointmentObjs = getAppointmentsForDay(state, state.day)
const interviewers = getInterviewsersForDay(state, state.day)

const appt = appointmentObjs.map((appointmentObj) => {
  const interview = getInterview(state, appointment.interview);

  return (
    <Appointment key={appointmentObj.id} id={appointmentObj.id} time={appointmentObj.time} interview={interview} interviewers={interviewers} bookInterview={bookInterview}/>
  )
})



export default function Application(props) {
  //const [day, setDay] = useState("Monday")

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });
  //const setDays = days => setState(prev => ({...prev, days}));


  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('http://localhost:8001/api/days')),
      Promise.resolve(axios.get('http://localhost:8001/api/appointments')),
      Promise.resolve(axios.get('http://localhost:8001/api/interviewers'))
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, [])


  return (
    <main className="layout">
      <section className="sidebar">
         <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList
  days={state.days}
  day={state.day}
  setDay={setDay}
/>
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/> 
      </section>
      <section className="schedule">
        {appt}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


