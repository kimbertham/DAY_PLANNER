import React from 'react'
import { useParams } from 'react-router-dom'
import { IHabits } from '../../types/habits'
import HabitsTable from './HabitsTable'
import { useAppSelector,useAppDispatch } from '../../state/hooks'
import moment from 'moment'
import { delHabit } from '../../state/thunks/habits'



const HabitDetail = () => {
  const AppDispatch = useAppDispatch()

  const { id } = useParams<{ id: string }>()
  const habit: IHabits = useAppSelector((state) => state.habits.habits.filter(h => h._id === id))[0]

  return (
    <div>
      <h1>{habit.title}</h1>
      <p>Since {moment(habit.startDate).format('DD-MM-YYYY')}</p>
      <p>{habit.description}</p>


      <button onClick={() => AppDispatch(delHabit(habit))}> Delete Habit</button>
      <HabitsTable  habits={[habit]} dateLength={'month'}/>
    </div>
  )
}

export default HabitDetail