import React from 'react'
import styles from '../styles/tasks.module.scss'
import { ITag } from '../../../types/tasks'
import NewTag from './NewTag'

interface TaskMenuProps {
  tags: ITag[]
}

const TaskMenu = ({ tags } : TaskMenuProps) => {

  return (
    <div className={styles.tagMenu}>
      <h1>Task Tags</h1>

      <NewTag />

      {tags.map(t => <div key={t._id}>{t.title}</div>)}
    </div>
  )
}

export default TaskMenu