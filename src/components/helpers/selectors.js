export function getAppointmentsForDay(state, day) {
  let appointmentArray = [];
  state.days.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.appointments.forEach(appointmentId => appointmentArray.push(state.appointments[appointmentId]))
    }
  })
  return appointmentArray
}


export function getInterview(state, interview) {
  if (!interview) {
    return null
  };
};

export function getInterviewsForDay(state, day) {
  let interviewsArray = [];
  state.days.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.interviews.forEach(interviewerId => interviewsArray.push(state.interviews[interviewerId]))
    }
  })
  return interviewsArray
}