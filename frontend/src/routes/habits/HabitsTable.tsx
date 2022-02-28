import React, { useState } from 'react'
import moment, { weekdays } from 'moment'
import { Table } from '../../components/table/Table'
import { IHabits } from '../../types/habits'
import { useAppDispatch } from '../../state/hooks'
import { newHabitUnit } from '../../state/thunks/habits'
import { Link } from 'react-router-dom'


interface HabitsTableProps {
  habits: IHabits[];
  dateLength: string;
  }
  

const HabitsTable = ({ habits, dateLength }:HabitsTableProps) => {
  const AppDispatch = useAppDispatch()
  const currentDay = moment().format('YYYY-MM-DD')
  
  const [date, setDate] = useState(currentDay)

  const getDate = () => {
    const days = [] 

    const weekStart = moment(date).clone().startOf('week')
    const length = dateLength === 'week' ? 6 : moment(date).daysInMonth()
    for (var i = 0; i <= length; i++) {
      days.push(moment(weekStart).add(i, 'days').format('YYYY-MM-DD'))
    }
    return days
  }


  let arr : JSX.Element[] = []
  const col: JSX.Element[][] = []


  habits.forEach(habit => {

    dateLength === 'week' && arr.push( 
      <Link to={`/habit/${habit._id}`}>
        <th>{habit.title}</th>
      </Link>)


    for (let i = 0 ; i < getDate().length ; i ++) {
      const date = getDate()[i]
      const weekday = moment(date).format('dddd')

      if (habit.units?.find(unit => unit.date === currentDay) && date === currentDay){
        arr.push(<td>check</td> )

      } else if 
      (date === currentDay){
        arr.push(<td>
          <input type='checkbox' 
            onChange={() => 
              AppDispatch(newHabitUnit(
                { checked: true,
                  date: currentDay, 
                  habit: habit 
                }))}/>
        </td>)

      } else if (habit.units?.find(unit => unit.date === date)) {
        arr.push(<td>PastCheckedDay</td>)

      } else if
      (habit.weekDays.includes(weekday) && moment(date).isBefore(currentDay) && moment(date).isAfter(moment(habit.startDate))){
        arr.push(<td>PastMissedDay</td>)

      } else if 
      (habit.weekDays.includes(weekday) && moment(date).isAfter(currentDay)  ){
        arr.push(<td><input type='checkbox' disabled/></td>)

      } else {
        arr.push(<td>-</td>)
      }

      if ((i + 1) % 7 === 0) {
        col.push(arr)
        arr = []
      } 

    }
    col.push(arr)
    arr = []

  })



  return ( 
    <Table headers={ dateLength === 'week' ? [''].concat(weekdays()) : weekdays()}>
      {col.map((r,i) => <tr key={i}>{r}</tr>)}
    </Table>
  )
}

export default HabitsTable
