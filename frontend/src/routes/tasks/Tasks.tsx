/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { getTasksByDate } from '../../state/thunks/tasks'
import Agenda from './Agenda'
import NewTask from './NewTask'
import moment from 'moment'

const currentDate = moment().format('YYYY-MM-DD')

const Tasks = () => {
  const AppDispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.tasks.tasks )
  const [date, setDate] = useState(currentDate)


  useEffect(() => {
    AppDispatch(getTasksByDate(date))
  }, [])


  return (
    <div>
      <NewTask date={date}/>
      <Agenda tasks={tasks}/>

    </div>
  )
}

export default Tasks
