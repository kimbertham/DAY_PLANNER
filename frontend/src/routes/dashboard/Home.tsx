import React from 'react'
import Habits from '../habits/Habits'
import Journal from '../journal/Journal'
import Meal from '../meals/meal'
import Tasks from '../tasks/Tasks'

const Home = () => {

  
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