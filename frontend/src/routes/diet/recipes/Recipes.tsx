import React, { useState } from 'react'
import { IRecipe } from '../../../types/meal'
import { useAppSelector } from '../../../state/hooks'
import icon from '../styles/icons/recipes.jpg'
import styles from '../styles/recipe.module.scss'
import NewRecipe from './NewRecipe'
import DetailsRecipe from './DetailsRecipe'

const Recipes = () => { 
  const recipes  = useAppSelector((state) => state.meal.recipes)
  const [selected, setSelected] = useState<IRecipe | null>(null)

  console.log(recipes)
  return (
    <div>
      <h1>Recipes</h1>

      <NewRecipe/>

      <div className='flex wrap'>
        {recipes.map((r,i) => 
          <div key={i} className={styles.recipeCont} onClick={() => setSelected(r)}>
            <img src={r.image ? r.image : icon} alt='icon'/>
            <p>{r.title}</p>
          </div>)
        }
      </div>

      <DetailsRecipe 
        selected={selected}
        setSelected={setSelected} />
    
    </div>
  )
}

export default Recipes