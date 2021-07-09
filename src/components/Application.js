
import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList"
import "components/DayListItem.js"
import Appointment from "components/Appointment"
import axios from "axios"


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "Michael Jordan",
      interviewer: {
        id: 2,
        name: "Phil Jackson",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 4,
    time: "6pm"
  }
];

const appt = appointments.map((appointment) => {
  return (
    <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview} />
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
  const setDays = days => setState(prev => ({...prev, days}));


  useEffect(() => {
    axios.get('http://localhost:8001/api/days')
      .then(res => {
        setDays(res.data)
      })
      .catch(err => console.log(err))
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


