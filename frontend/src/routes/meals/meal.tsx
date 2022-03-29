import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { getMealByDate } from '../../state/thunks/meal'
import MealDateCard from './MealCards'
import MealNav from './MealNav'
import NewMeal  from './NewMeal'
import moment from 'moment'

const Meal = () => {
  const AppDispatch = useAppDispatch()
  const [start, setStart] = useState(moment().format('YYYY-MM-DD'))
  const [dates,setDates] = useState<string[]>([start])
  const end =  moment(start).add(4, 'days').format('YYYY-MM-DD')
  const meals = useAppSelector((state) => state.meal.groupedMeals)

  useEffect(() => {
    AppDispatch(getMealByDate({ 
      startDate: start,
      endDate: end }))
  }, [start])

  useEffect(() => {
    let date = moment(start)
    while (!date.isSame(moment(end))){
      date = date.clone().add(1, 'days')
      dates.push(date.format('YYYY-MM-DD'))
    }
  },[start])
  
  console.log(start)

  return (
    <div>
      <MealNav/>
      <NewMeal/>
      <MealDateCard 
        meals={meals} 
        dates={dates}  
        start={start}
        setStart={setStart}
        setDates={setDates}/>

    </div>
  )
}

export default Meal