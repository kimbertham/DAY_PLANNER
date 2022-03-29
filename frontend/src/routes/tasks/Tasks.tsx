/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styles from './styles/tasks.module.scss'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { getTags, getTasksByDate } from '../../state/thunks/tasks'
import { ITask } from '../../types/tasks'
import Agenda from './Agenda'
import NewTask from './NewTask'
import moment from 'moment'
import TaskMenu from './tags/TagsMenu'
import TaskDetail from './TaskDetail'

const currentDate = moment().format('YYYY-MM-DD')

const Tasks = () => {
  const AppDispatch = useAppDispatch()

  const tasks = useAppSelector((state) => state.tasks.tasks )
  const tags =  useAppSelector((state) => state.tasks.tags)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState(currentDate)
  const [selected, setSelect] = useState<ITask | null>()


  useEffect(() => {
    AppDispatch(getTasksByDate(date))
    AppDispatch(getTags())
  }, [])


  return (
    <div className='flex'>

      {selected && <TaskDetail setSelect={setSelect} task={selected}/> }
          
      {!selected && 
          <div className={styles.agenda}>
            <NewTask date={date} tags={tags}/>
            <Agenda tasks={tasks} setSelect={setSelect} />
          </div>
      }

      <TaskMenu tags={tags}/>
    </div>
  )
}

export default Tasks
