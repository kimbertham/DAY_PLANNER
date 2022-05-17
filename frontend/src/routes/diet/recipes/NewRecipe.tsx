import React, { useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { Input } from '../../../components/Input/Input'
import { TextArea } from '../../../components/TextArea/TextArea'
import { IRecipe } from '../../../types/meal'
import { newRecipe, updateRecipe } from '../../../state/thunks/meal'
import { CreateForm } from '../../../components/CreateForm/CreateForm'
import ImageUpload from '../../../components/ImageUpload/ImageUpload'
import styles from '../styles/diet.module.scss'

interface NewRecipeProps {
  buttonType? : 'Small' | 'Large';
  insertData?: IRecipe;
  title?:string;
}

const initRecipe: IRecipe = { id: '', title: '', method: '', ingredients: [], calories: 0 }

const NewRecipe = ({ buttonType, insertData , title }: NewRecipeProps) => { 

  const [data, setData] = useState<IRecipe>(insertData ? insertData : initRecipe)
  const AppDispatch = useAppDispatch()

  return (
    <>
      <CreateForm title={title || 'New Recipe'} buttonType={buttonType} 
        submit={() => insertData ? AppDispatch(updateRecipe(data)) : AppDispatch(newRecipe(data))}>

        <Input  
          type='text'
          label='Title'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />


        <Input  
          type='number'
          label='Calories'
          value={data.calories}
          onChange={(e) => setData({ ...data, calories: e.target.value })}
        />

        <Input  
          type='text'
          label='Ingredients'
          placeholder='Press enter to add new ingredient'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              setData({ ...data ,  ingredients: [...data.ingredients, e.target.value] })
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

        <ImageUpload/>

        <TextArea 
          label='Recipe'
          placeholder='...Enter Recipe'
          value={data.method}
          onChange={(e:any) => setData({ ...data, method: e.target.value })}/>

      </CreateForm>
    </>
  )
}
export default NewRecipe

