import React from 'react'
import moment, { weekdays } from 'moment'
import { Table } from '../../components/table/Table'
import { IHabits } from '../../types/habits'
import { useAppDispatch } from '../../state/hooks'
import { newHabitUnit } from '../../state/thunks/habits'


interface HabitsTableProps {
  habits: IHabits[];
  getDate: () => string[]
  }
  
const HabitsTable = ({ habits, getDate }:HabitsTableProps) => {
  const AppDispatch = useAppDispatch()
  const currentDay = moment().format('YYYY-MM-DD')

  let arr : JSX.Element[] = []
  const col: JSX.Element[][] = []


  habits.forEach(habit => {

    arr.push(<th>{habit.title}</th> )

    for (let i = 0 ; i < getDate().length ; i ++) {
      const date = getDate()[i]
      const weekday = moment(date).format('dddd')
      console.log(date)
      console.log(habit.startDate)

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
      (habit.weekDays.includes(weekday) && moment(date).isAfter(currentDay) ){
        arr.push(<td><input type='checkbox' disabled/></td>)

      } else {
        arr.push(<td>-</td>)
      }
    }
    col.push(arr)
    arr = []
  })


  return ( 
    <Table headers={[''].concat(weekdays())}>
      {col.map((r,i) => <tr key={i}>{r}</tr>)}
    </Table>
  )
}

export default HabitsTable
