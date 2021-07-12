import React from 'react';
import DayListItem from 'components/DayListItem';


export default function DayList(props){
console.log("----", props)
  const schedule = props.days.map(dayObj => {
    
    return (
      <DayListItem
      key={dayObj.id}
      name={dayObj.name}
      spots={dayObj.spots}
      selected={dayObj.name === props.day}
      setDay={() => props.setDay(dayObj.name)} />
    )
  })
  return <ul>{schedule}</ul>
}