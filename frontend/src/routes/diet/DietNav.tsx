import React from 'react'
import cals from './styles/icons/cals.jpg'
import recipes from './styles/icons/recipes.jpg'
import mealtime from './styles/icons/mealtime.jpg'
import { Link } from 'react-router-dom'

import styles from './styles/diet.module.scss'

const DietNav = () => {
  return (
    <div className={styles.dietNav}>

      <Link to='/diet' className={styles.dietNavItem}>
        <img src={mealtime} className={styles.dietNavIcon} alt='calories'/>
        <p>Meals</p>
      </Link>

      <Link to='/recipes' className={styles.dietNavItem}>
        <img src={recipes} className={styles.dietNavIcon} alt='calories'/>
        <p>Recipes</p>
      </Link>

      <Link to='/calories' className={styles.dietNavItem}>
        <img src={cals} className={styles.dietNavIcon} alt='calories'/>
        <p>Calories</p>
      </Link>
      
    </div>
  )
}

export default DietNav