import React, { Fragment, useEffect } from 'react';
import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import 'components/Appointment/styles.scss'
import useVisualMode from 'hooks/useVisualMode'


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

    useEffect(() => {
      if (!props.interview && mode === SHOW) {
        transition(EMPTY);
      }
      
      if (props.interview && mode === EMPTY) {
        transition(SHOW)
      }
    }, [mode, transition, props.interview])


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(
      () => transition(SHOW)
    )
  };

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (

    <article className="appointment">
     <Header time={props.time} />
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
       <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
       />
      )}  
      {mode === CREATE && <Form 
                            name={props.name} 
                            value={props.value} 
                            interviewers={props.interviewers} 
                            onCancel={back} 
                            onSave={save}/>}
      {mode === SAVING && <Status meesage="Saving" />}
    </article>
  )}