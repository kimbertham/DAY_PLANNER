import React from 'react'
import date from './styles/icons/date.jpg'
import tasks from './styles/icons/tasks.jpg'
import work from './styles/icons/work.jpg'
import diet from './styles/icons/diet.jpg'
import habits from './styles/icons/habits.jpg'
import journal from './styles/icons/journal.jpg'
import wallet from './styles/icons/wallet.jpg'
import styles from './styles/nav.module.scss'

import { useAppSelector } from '../../state/hooks'

const Sidenav = () => {

  const user = useAppSelector((state) =>state.auth.user)
  
  if (!user) return null

  return (
    <div className={styles.Sidenav}>

      <div className={styles.item}>
        <img src={date} alt='date'/>
        <p>Calender</p>
      </div>

      <div className={styles.item}>
        <img src={tasks} alt='tasks'/>
        <p>Tasks</p>
      </div>

      <div className={styles.item}>
        <img src={habits} alt='habits'/>
        <p>Habits</p>
      </div>

      <div className={styles.item}>
        <img src={wallet} alt='wallet'/>
        <p>Finance</p>
      </div>

      <div className={styles.item}>
        <img src={journal} alt='journal'/>
        <p>Journal</p>
      </div>

      <div className={styles.item}>
        <img src={work} alt='work'/>
        <p>Work</p>
      </div>

      <div className={styles.item}>
        <img src={diet} alt='meal'/>
        <p>Meal</p>
      </div>

    </div>
  )
}

export default Sidenav