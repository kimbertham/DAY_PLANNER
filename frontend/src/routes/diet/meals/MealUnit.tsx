import React from 'react'
import { IMeal, EMeals } from '../../../types/meal'
import styles from '../styles/diet.module.scss'
import lunch from '../styles/icons/lunch.jpg'
import dinner from '../styles/icons/dinner.jpg'
import breakfast from '../styles/icons/breakfast.jpg'
import snack from '../styles/icons/snack.jpg'


export const MealUnit = ( m: IMeal ) => {

  const icons = (type:EMeals) => {
    let icon
    switch (type){
      case EMeals.BREAKFAST:
        icon = breakfast
        break
      case EMeals.LUNCH:
        icon = lunch
        break
      case EMeals.DINNER:
        icon = dinner
        break
      case EMeals.SNACK:
        icon = snack
        break 
    }
    return icon
  }
  

  return (
    <>
      <div className={styles.mealCard} key={m.id}>
        <img src={icons(m.type ? m.type : EMeals.SNACK)} alt='icon' className={styles.mealIcon} />
        <p>{m.time.time}</p>
        <p>{m.title}</p>
        <p>{m.recipe?.calories}</p>
      </div>
    </>
  )
}

