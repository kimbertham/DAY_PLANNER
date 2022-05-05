/* eslint-disable react-hooks/exhaustive-deps */
import React , { useEffect } from 'react'
import { getMealByDate } from '../../../state/thunks/meal'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { useParams } from 'react-router-dom'
import { MealUnit } from './MealUnit'
import styles from '../styles/diet.module.scss'

const MealPage = () => {
  const AppDispatch = useAppDispatch()
  const { date } = useParams<{date: string}>()
  const meals = useAppSelector((state) => state.meal.meals).filter(m => m.time.date === date)
  const meal = useAppSelector((state) => state.meal)
  console.log(meal)


  useEffect(() => {
    AppDispatch(getMealByDate({ startDate: date, endDate: date }))
  }, [])


  if (!meals) return null
  return (
    <div className='flex'>

      <div className={styles.mealAgender}>
        <h1>Meal Plan</h1>
        {meals.map(m => MealUnit(m))}
      </div>
    
      <div>
        <div> 
          <h1>Calories</h1>
          <p>{meals.reduce((n,y) => y.recipe?.calories ? n + y.recipe?.calories : 0 , 0)}</p>Total Calories
        </div>

        <div> 
          <h1>Recipes</h1>
          {meals.map(m => m.recipe && 
          <div key={m.id}>
            {m.title}
            {m.recipe}
          </div>)}
        </div>
      </div>

    </div>
  )
}
export default MealPage