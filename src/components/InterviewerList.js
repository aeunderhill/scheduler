import React from 'react';
import 'components/InterviewList.scss';
import InterviewListItem from 'components/InterviewListItem';

//Our InterviewerList takes in three props:

//interviewers:array - an array of objects containing the information of each interviewer
//interviewer:number - the id of an interviewer
//setInterviewer:function - a function that accepts an interviewer id

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewerObj => {
    return (
      <InterviewerListItem
      key={interviewerObj.id}
      name={interviewerObj.name}
      avatar={interviewerObj.avatar}
      selected={interviewerObj.id === props.interviewer}
      setInterviewer={props.setInterviewer}
      />
    )
  })
  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list"></ul>
</section>
  )
}