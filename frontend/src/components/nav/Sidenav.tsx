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
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  const [collapse, setCollapse] = useState(false)
  const user = useAppSelector((state) =>state.auth.user)
  
  if (!user) return null

  return (
    <div className={collapse ? styles.collapse : styles.Sidenav}>

      <div className={styles.item}>
        <img src={date} alt='date'/>
        {!collapse && <p>Today</p>}
      </div>
      
      <div className={styles.item}>
        <img src={date} alt='date'/>
        {!collapse && <p>Calender</p>}
      </div>

      <div className={styles.item}>
        <img src={tasks} alt='tasks'/>
        {!collapse && <p>Tasks</p>}
      </div>

      <Link to='/habits'>
        <div className={styles.item}>
          <img src={habits} alt='habits'/>
          {!collapse && <p>Habits</p>}
        </div>
      </Link>

      <div className={styles.item}>
        <img src={wallet} alt='wallet'/>
        {!collapse && <p>Finance</p>}
      </div>

      <div className={styles.item}>
        <img src={journal} alt='journal'/>
        {!collapse && <p>Journal</p>}
      </div>

      <div className={styles.item}>
        <img src={work} alt='work'/>
        {!collapse && <p>Work</p>}
      </div>

      <div className={styles.item}>
        <img src={diet} alt='meal'/>
        {!collapse && <p>Meal</p>}
      </div>

      <div className={styles.arrows} onClick={() =>setCollapse(!collapse)}>
        {collapse ?  <p>	&#60; &gt; </p> : <p> &gt;	&#60; </p>} 
      </div>

    </div>
  )
}

export default Sidenav