import React from 'react'
import cals from './styles/icons/cals.jpg'
import recipes from './styles/icons/recipes.jpg'
import groceries from './styles/icons/groceries.jpg'
import mealtime from './styles/icons/mealtime.jpg'
import { Link } from 'react-router-dom'

import styles from './styles/diet.module.scss'

const MealNav = () => {
  return (
    <div className={styles.mealNav}>

      <div className={styles.mealNavItem}>
        <img src={mealtime} className={styles.mealNavIcon} alt='calories'/>
        <p>Meals</p>
      </div>

      <Link to='/recipes'>
        <div className={styles.mealNavItem}>
          <img src={recipes} className={styles.mealNavIcon} alt='calories'/>
          <p>Recipes</p>
        </div>
      </Link>

      <div className={styles.mealNavItem}>
        <img src={groceries} className={styles.mealNavIcon} alt='calories'/>
        <p>Groceries</p>
      </div>

      <div className={styles.mealNavItem}>
        <img src={cals} className={styles.mealNavIcon} alt='calories'/>
        <p>Calories</p>
      </div>
      
    </div>
  )
}

export default MealNav