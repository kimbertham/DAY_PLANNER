/* eslint-disable react-hooks/exhaustive-deps */
import React , { useEffect } from 'react'
import { useAppSelector } from '../../state/hooks'
import HabitsTable from './HabitsTable'
import NewHabit from './NewHabit'
import {  getHabits } from '../../state/thunks/habits'
import { useAppDispatch } from '../../state/hooks'


const Habits = () => {
  const AppDispatch = useAppDispatch()
  const habits = useAppSelector((state) => state.habits.habits)

  useEffect(() => {
    AppDispatch(getHabits('all'))
  },[])

  
  return (
    <div>

      {/* <button onClick={() => AppDispatch(delHabit({ id: 'all' }))}>delete</button> */}
      <h1>Habits</h1>


      <NewHabit />



      <HabitsTable habits={habits} dateLength={'week'} />


    </div>
  )
}

export default Habits