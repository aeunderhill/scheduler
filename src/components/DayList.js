import React from 'react';
import DayListItem from 'components/DayListItem';


export default function DayList(props){
console.log("----", props)
  const schedule = props.days.map(dayObj => {
    const function1 = (argument)=>console.log("this is set day", argument)
    return (
      <DayListItem
      key={dayObj.id}
      name={dayObj.name}
      spots={dayObj.spots}
      selected={dayObj.name === props.day}
      setDay={function1} />
    )
  })
  return <ul>{schedule}</ul>
}