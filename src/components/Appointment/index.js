import React, { Fragment, useEffect } from 'react';
import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Confirm from 'components/Appointment/Confirm'
import 'components/Appointment/styles.scss'
import useVisualMode from 'hooks/useVisualMode'
import Form from 'components/Appointment/Form'
import Status from 'components/Appointment/Status'


export default function Appointment(props) {

  //const [mode, setMode] = useState(EMPTY);

  const EMPTY = "EMPTY";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

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

  function remove() {
    if (mode === CONFIRM) {
      transition(DELETING)
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
    } else {
      transition(CONFIRM)
    }
  }

  function edit() {
    transition(EDIT);
  }



  return (

    <article className="appointment">
     <Header time={props.time} />
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
       <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={remove}
        onEdit={() => transition(EDIT)}
       />
      )}  
      {mode === CREATE && <Form 
                            name={props.name} 
                            value={props.value} 
                            interviewers={props.interviewers} 
                            onCancel={back} 
                            onSave={save}/>}
      {mode === SAVING && <Status meesage="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && 
      <Confirm
        onCancel={back}
        onConfirm={remove}
        message="Are you sure you want to delete this appointment?"
       />}
       {mode === EDIT && (
         <Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
          />
       )}
    </article>
  )};