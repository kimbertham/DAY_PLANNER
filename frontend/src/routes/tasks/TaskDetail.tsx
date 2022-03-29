import React, { Dispatch, SetStateAction } from 'react'
import { delTasks } from '../../state/thunks/tasks'
import { useAppDispatch } from '../../state/hooks'
import { ITask } from '../../types/tasks'
import moment from 'moment'

interface TaskDetailProps {
  task:ITask,
  setSelect: Dispatch<SetStateAction<ITask | null | undefined>>
}

const TaskDetail = ({ task, setSelect }:TaskDetailProps) => {
  const AppDispatch = useAppDispatch()
  console.log(task.tags)
  return (
    <div>
      <div onClick={() => setSelect(null)}>Close</div>
      <button onClick={() => AppDispatch(delTasks(task))}>delete</button>
      
      <h1>{task.title}</h1>
      <p>{task.content}</p>
      <p>{moment(task.time.date).format('dddd DD MMMM YYYY')}</p>
      <p>{task.time.timeStart} - {task.time.timeEnd}</p>
      {task.tags?.map((t,i) => <p key={i}>{t.title} </p>)}

    </div>
  )
}
export default TaskDetail