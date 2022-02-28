/* eslint-disable react-hooks/exhaustive-deps */
import React , { useEffect } from 'react'
import { useAppSelector } from '../../state/hooks'
import HabitsTable from './HabitsTable'
import NewHabit from './NewHabit'
import { delHabit,  getHabits } from '../../state/thunks/habits'
import { useAppDispatch } from '../../state/hooks'
import moment from 'moment'

const Habits = () => {
  const AppDispatch = useAppDispatch()
  const habits = useAppSelector((state) => state.habits.habits)

  useEffect(() => {
    AppDispatch(getHabits('all'))
  },[])

  const getDates = () => {
    var weekStart = moment().clone().startOf('week')
    var days = []
    for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days').format('YYYY-MM-DD'))
    }
    return days
  }

  
  return (
    <div>

      <button onClick={() => AppDispatch(delHabit({ id: 'all' }))}>delete</button>
      <h1>Habits</h1>
      <NewHabit />
      <HabitsTable
        habits={habits} 
        getDate={getDates}/>
    </div>
  )
}

export default Habits