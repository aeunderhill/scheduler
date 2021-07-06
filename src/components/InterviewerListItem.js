import React from 'react';
const classNames = require('classnames')
import 'components/InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  let interviewerStyles = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item": !props.selected
  })

  let imageStyles = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected,
    "interviewers__item-image": !props.selected
  })

  return (
    <li
      className={interviewerStyles}
      onClick={() => props.setInterviewer(props.name)} >
        <img
        className={imageStyles}
        src={props.avatar}
        alt={props.name}
        />
        {props.name}
      </li>
  )
}