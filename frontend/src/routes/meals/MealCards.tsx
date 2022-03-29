import React from 'react'
import { IMeal } from '../../types/meal'
import styles from './styles/meals.module.scss'
import moment from 'moment'

interface MealCardsProps {
  meals : {[key: string]: IMeal[]},
  dates: string[],
  setStart: React.Dispatch<React.SetStateAction<string>>,
  start: string,
  setDates:React.Dispatch<React.SetStateAction<string[]>>
}

const mealCard = ( meals: IMeal[] ) => {
  return (
    <>
      {meals.map(m => 
        <div key={m.id} className={styles.mealCard}>
          {m.type}
          {m.title}
          {m.time.time}
          {m.calories}
        </div>
      )}
    </>
  )
}

const MealCards = ({ meals, dates, start, setStart, setDates }:MealCardsProps) => {
  return (
    <div className='flex'>

      <button onClick={() => {
        setDates([])
        setStart(moment(start).subtract(1, 'day').format('YYYY-MM-DD'))
      }}>before</button>

      {dates.map(date => {
        const arr = Object.entries(meals).find(obj => obj[0] === date)?.[1]
        return (
          <div key={date} className={styles.dateCard}>
            <h1>{date}</h1>
            {arr ? mealCard(arr) : <p>No meals yet</p>} 
          </div>
        )
      })}

      <button onClick={() => {
        setDates([])
        setStart(moment(start).add(1, 'days').format('YYYY-MM-DD'))
      }}>after</button>

    </div>
  )
}

export default MealCards


