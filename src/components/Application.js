
import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList"
import InterviewerList from "./InterviewerList"
import "components/DayListItem.js"
import Appointment from "components/Appointment"
import axios from "axios"
import { getAppointmentsForDay, getInterview, getInterviewsForDay } from "./helpers/selectors"
import useApplicationData from "hooks/useApplicationData";





export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
   = useApplicationData();

  const appointmentObjs = getAppointmentsForDay(state, state.day)
  
  const appt = appointmentObjs.map((appointmentObj) => {
    const interview = getInterview(state, appointmentObj.interview);
    //console.log(interview)
    const interviewers = getInterviewsForDay(state,  state.day);
  
    return (
      <Appointment key={appointmentObj.id} 
      id={appointmentObj.id} 
      time={appointmentObj.time} 
      interview={interview} 
      interviewers={interviewers} 
      bookInterview={bookInterview} 
      cancelInterview={cancelInterview}/>
    )
  })



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


