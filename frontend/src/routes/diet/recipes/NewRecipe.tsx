import React, { useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { Input } from '../../../components/Input/Input'
import { TextArea } from '../../../components/TextArea/TextArea'
import { IRecipe } from '../../../types/meal'
import { newRecipe } from '../../../state/thunks/meal'
import { CreateForm } from '../../../components/CreateForm/CreateForm'
import styles from '../styles/diet.module.scss'

const initRecipe: IRecipe = { id: '', title: '', method: '', ingredients: [], calories: 0, image: '' }

const NewRecipe = () => { 

  const [data, setData] = useState<IRecipe>(initRecipe)
  const AppDispatch = useAppDispatch()

  return (
    <>
      <CreateForm title='Recipe' submit={() => AppDispatch(newRecipe(data))}>
        <Input  
          type='number'
          label='Calories'
          onChange={(e) => setData({ ...data, calories: e.target.value })}
        />

        <Input  
          type='text'
          label='Ingredients'
          placeholder='Press enter to add new ingredient'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              setData({ ...data ,  ingredients: [data.ingredients, e.target.value] })
              e.target.value = ''
            } 
          }}
        />

        <div className={styles.ingCont}>
          { data.ingredients?.map((ing,i) => 
            <div key={i} className={styles.ing}>
              <small>{ing}</small>
              <small onClick={() => setData({ ...data , ingredients: [...data.ingredients?.filter(i => i !== ing)] } )}
                className={styles.delIng}>x</small>
            </div>)}
        </div>

        <TextArea 
          label='Recipe'
          placeholder='...Enter Recipe'
          onChange={(e:any) => setData({ ...data, method: e.target.value })}/>

      </CreateForm>
    </>
  )
}
export default NewRecipe

