/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { IMeal } from '../../../types/meal'
import styles from '../styles/diet.module.scss'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { MealUnit } from './MealUnit'

interface MealCardsProps {
  meals : IMeal[],
  dates: string[],
  setStart: React.Dispatch<React.SetStateAction<string>>,
  start: string,
  setDates:React.Dispatch<React.SetStateAction<string[]>>
}

const MealCards = ({ meals, dates, start, setStart }:MealCardsProps) => {
  const [datesIndex, setDatesIndex] = useState<number>(Number(moment().format('DD')) - 1)
  const [render, setRender] = useState(false)

  useEffect(() => setRender(true), [])

  useEffect(() => {
    if (render) {
      if ( datesIndex > dates.length - 1 && datesIndex !== 0 ) {
        setStart(moment(start).startOf('month').add(1, 'month').format('YYYY-MM-DD'))
        setDatesIndex(0)
      } else if (datesIndex < 0 ) {
        setStart(moment(start).startOf('month').subtract(1, 'month').format('YYYY-MM-DD'))
        setDatesIndex(dates.length - 1)
      }
    }
  }, [datesIndex, setDatesIndex])

  return (
    <div className='flex fw'>

      <button className={styles.menuButton} onClick={() => setDatesIndex(datesIndex - 4)}>
        <p>&lt;</p>
      </button>

      <div className={styles.mealCardsCont}>
        {dates.slice(datesIndex, datesIndex + 4).map((date,i) => {
          const dateMeals = meals.filter(meal =>  meal.time.date === date)
          return (
            <Link to ={`/diet/${date}`} key={i} className={styles.dateCard}>
              <h1>{moment(date).format('dddd DD MMMM YYYY')}</h1>
              {dateMeals.length > 0 ? dateMeals.map(m => MealUnit(m) ) : 'No meals yet'}
            </Link>
          )
        })}
      </div>

      <button className={styles.menuButton} onClick={() => setDatesIndex(datesIndex + 4)}>
        <p>&gt;</p> 
      </button>

    </div>
  )
}

export default MealCards


