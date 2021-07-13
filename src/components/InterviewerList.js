import React from 'react';
import 'components/InterviewList.scss';
import InterviewerListItem from './InterviewerListItem';
import PropTypes from 'prop-types';



//Our InterviewerList takes in three props:

//interviewers:array - an array of objects containing the information of each interviewer
//interviewer:number - the id of an interviewer
//setInterviewer:function - a function that accepts an interviewer id

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );
  });

return (
  <section className="interviewers">
  <h4 className="interviewers__header text--light"></h4>
  <ul className="interviewers__list">
    {interviewers}
  </ul>
  </section>
)}

