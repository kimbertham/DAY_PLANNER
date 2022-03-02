import React from 'react'
import { ITask } from '../../types/tasks'


interface AgendaProps {
  tasks : ITask[]
}

const Agenda = ({ tasks }:AgendaProps) => {
  return (
    <div>

      <h1>Agenda</h1>
          
      {tasks.map(t => 
        <div key={t._id}>
          <p>{t.title}</p>
        </div>
      )}
  
    </div>
  )
}
export default Agenda