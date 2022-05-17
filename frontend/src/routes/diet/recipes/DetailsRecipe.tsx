import React from 'react'
import { IRecipe } from '../../../types/meal'
import { Modal } from '../../../components/modal/Modal'
import icon from '../styles/icons/recipes.jpg'
import { useAppDispatch } from '../../../state/hooks'
import { delRecipe } from '../../../state/thunks/meal'
import NewRecipe from './NewRecipe'
// import styles from '../styles/recipe.module.scss'

interface DetailsRecipeProps{
  emptyRecipe: IRecipe;
  selected: IRecipe;
  setSelected : React.Dispatch<React.SetStateAction<IRecipe>>;
}

const DetailsRecipe = ({ setSelected, selected, emptyRecipe }:DetailsRecipeProps) => {
  const AppDispatch = useAppDispatch()



  return (
    <div>

      {selected !== emptyRecipe && 
      <Modal closeModal={() => setSelected(emptyRecipe)}>

        <button onClick={() => AppDispatch(delRecipe(selected))}>Delete</button>
        <NewRecipe insertData={selected} title='Edit Recipe'/>

        <div className='flex'>
          <img src={selected.image || icon} alt='img'/>
          <div>
            <p>Title :{selected.title}</p>
            <p>Calories :{selected.calories}</p>
            <p>Ingredients :{selected.ingredients.map(i => i )}</p>
            <p>Method :{selected.method}</p>
          </div>
        </div>

      </Modal>
      }

    </div>
  )
}

export default DetailsRecipe