import React, { useState } from 'react';
import Button from  'components/Button';
import InterviewerList from 'components/InterviewerList'





export default function Form(props) {


  const [currentName, setName] = useState(props.name || "");

  const [currentInterviewer, setInterviewer] = useState(props.interviewer || null)

  const [error, setError] = useState("");

  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  function cancel() {
    reset()
    props.onCancel()
  }

  //function to validate that the error message is showing

  function validate() {
    if (currentName === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(currentName, currentInterviewer);
  }

//function to save interview usually in place of validate function below

  function saveInterviewer() {
    console.log(currentName, currentInterviewer)
    props.onSave(currentName, currentInterviewer)
    
  }
//console.log(props)
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name={props.name}
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={currentName}
        placeholder="Enter Student Name"
        data-testid="student-name-input"
        /*
          This must be a controlled component
        */
      />
      <section className="appointment__validation">{error}</section>
    </form>
    <InterviewerList 
    interviewers={props.interviewers} 
    interviewer={currentInterviewer} 
    setInterviewer={setInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onSubmit={(event) => event.preventDefault()} onClick={() => {
        validate()
      }}>Save</Button>
    </section>
  </section>
</main>
  )
}