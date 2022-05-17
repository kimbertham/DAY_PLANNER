/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { getMealByDate } from '../../state/thunks/meal'
import { getRecipes } from '../../state/thunks/meal'
import MealDateCard from './meals/MealCards'
import DietNav from './DietNav'
import NewMeal  from './meals/NewMeal'
import moment from 'moment'
import CalorieCounter from './calories/CalorieCounter'

const Meal = () => {
  const AppDispatch = useAppDispatch()
  const meals = useAppSelector((state) => state.meal.meals)
  const recipes = useAppSelector((state) => state.meal.recipes)

  const [start, setStart] = useState(moment().format('YYYY-MM-DD'))
  const [dates,setDates] = useState<string[]>([start])
  const end =  moment(start).clone().startOf('month').add(1, 'month').format('YYYY-MM-DD')


  useEffect(() => {
    AppDispatch(getRecipes())
  },[])

  useEffect(() => {
    AppDispatch(getMealByDate({ startDate: start,endDate: end }))
  }, [start])

  useEffect(() => {
    const arr: string[] = []
    let date = moment(start).startOf('month')
    arr.push(date.format('YYYY-MM-DD'))
    while (date.diff(moment(end))){
      date = date.add(1, 'days')
      arr.push(date.format('YYYY-MM-DD'))
    }
    setDates(arr)
  },[start])

  
  return (
    <div className='fw'>
  
      <DietNav/>

      <CalorieCounter/>
      <NewMeal 
        recipes={recipes}/>

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