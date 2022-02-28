import React from 'react'
import { Modal } from '../../components/modal/Modal'
// import styles from './styles/dashboard.module.scss'
// import { useAppSelector } from '../../state/hooks'

import Habits from '../habits/Habits'
import Journal from '../journal/Journal'
import Meal from '../meals/meal'
import Tasks from '../tasks/Tasks'

const Home = () => {
  // const testing = useAppSelector((state) =>state.auth.user)

  
  return (
    <div>
      <Tasks/>
      <Habits/>
      <Journal/>
      <Meal/>
    </div>
  )
}

export default Home