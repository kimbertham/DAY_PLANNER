import React from 'react'
import Habits from '../habits/Habits'
import Journal from '../journal/Journal'
import Diet from '../diet/Diet'
import Tasks from '../tasks/Tasks'

const Home = () => {

  
  return (
    <div>
      <Tasks/>
      <Habits/>
      <Journal/>
      <Diet/>
    </div>
  )
}

export default Home