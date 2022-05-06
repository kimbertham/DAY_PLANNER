import React, { useState } from 'react'
import { IRecipe } from '../../../types/meal'
import { Modal } from '../../../components/modal/Modal'
import icon from '../styles/icons/recipes.jpg'
import { useAppDispatch } from '../../../state/hooks'
import { delRecipe } from '../../../state/thunks/meal'
import { EditInput } from '../../../components/EditInput/EditImput'
// import styles from '../styles/recipe.module.scss'

interface DetailsRecipeProps{
  selected: IRecipe | null;
  setSelected : React.Dispatch<React.SetStateAction<IRecipe | null>>;
}


const DetailsRecipe = ({ setSelected, selected }:DetailsRecipeProps) => {
  const AppDispatch = useAppDispatch()
  const [edit, setEdit] = useState<boolean>(false)

  return (
    <div>

      {selected !== null &&
      <Modal closeModal={() => setSelected(null)}>

        <button onClick={() => AppDispatch(delRecipe(selected))}>Delete</button>
        <button onClick={() => setEdit(!edit)}>{edit ? 'Save' : 'Edit' } </button>
        
        <form>
          <img src={selected.image || icon} alt='img'/>
          <div className='flex cl'>
            <EditInput value={'hello'} toggle={edit}/>
            <EditInput
              value={`Title: ${selected.title}`}
              toggle={edit}/>
            <EditInput
              value={`Calories: ${selected.calories}`}
              toggle={edit}/>
            <EditInput
              value={`Ingredients: ${selected.ingredients.map(i => i)}`}
              toggle={edit}/>
            <EditInput
              value={`Recipe: ${selected.method}`}
              toggle={edit}/>
          </div>
        </form>

      </Modal>
      }

    </div>
  )
}

export default DetailsRecipe