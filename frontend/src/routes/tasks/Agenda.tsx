import React, { SetStateAction, Dispatch } from 'react'
import styles from './styles/tasks.module.scss'
import { ITask } from '../../types/tasks'

interface AgendaProps {
  tasks : ITask[],
  setSelect:Dispatch<SetStateAction<ITask | null | undefined>>
}

const Agenda = ({ tasks, setSelect }:AgendaProps) => {

  return (
    <div className={styles.taskUnit}>

      <h1>Agenda</h1>

      <div className={styles.timeTable}>
        {tasks.map(t => 
          <div key={t._id} className='flex box' onClick={() => setSelect(t)}>

            <div className={styles.date}>
              <p>{t.time.timeStart}</p> 
              <small>{t.time.timeStart}</small>
            </div>

            <div className={styles.content}>
              <p>{t.title}</p>
              <small>{t.content}</small>
            </div>
          </div>
        )}
      </div>
  
    </div>
  )
}
export default Agenda