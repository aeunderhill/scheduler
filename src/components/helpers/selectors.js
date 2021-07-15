

export function getAppointmentsForDay(state, day) {
  let appointmentArray = [];
  state.days.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.appointments.forEach(appointmentId => appointmentArray.push(state.appointments[appointmentId]))
    }
  })
  return appointmentArray
};


export function getInterview(state, interview) {
  //console.log(interview)
  if (!interview) {
    return null
  }
  return {
    ...interview, 
    interviewer: state.interviewers[interview.interviewer]
  };
};

export function getInterviewersForDay(state, day) {
  let interviewsArray = [];
  state.days.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.interviewers.forEach(interviewerId => interviewsArray.push(state.interviewers[interviewerId]))
    }
  })
  return interviewsArray
};

