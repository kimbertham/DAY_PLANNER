import React, { useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { Input } from '../../../components/Input/Input'
import { EMeals, IMeal, IRecipe  } from '../../../types/meal'
import { newMeal } from '../../../state/thunks/meal'
import { CreateForm } from '../../../components/CreateForm/CreateForm'
import NewRecipe from '../recipes/NewRecipe'
import moment from 'moment'
import styles from '../styles/recipe.module.scss'

interface NewDietProps {
  recipes: IRecipe[]
}

const currentDay =  moment().format('YYYY-MM-DD')
const initMeal: IMeal = { title: '', time: { date: currentDay, time: '' } }

const NewMeal = ({ recipes } : NewDietProps) => { 
  const [data, setData] = useState<IMeal>(initMeal)
  const AppDispatch = useAppDispatch()

  return (
    <>
      <CreateForm title='New Meal' submit={() => AppDispatch(newMeal(data))}>

        <Input  
          type='text'
          label='title'
          placeholder={'title'}
          onChange={(e:any) => setData({ ...data, 'title': e.target.value })}/>

        <Input  
          type='date'
          label='date'
          placeholder={'date'}
          onChange={(e:any) =>  setData({ ...data , time: { ...data.time, date: moment(new Date(e.target.value)).format('YYYY-MM-DD') } })}/>
            

        <Input  
          type='time'
          label='Time'
          placeholder={'time'}
          onChange={(e:any) => setData({ ...data , time: { ...data.time, time: e.target.value } })}/>

        <div className={styles.selectField}>  
          <label>Recipe</label>
          <select onChange={(e:any) => setData({ ...data , recipe: e.target.value })}>
            <option disabled >{recipes.length > 0 ? '-' : 'No recipes yet' }</option>
            {recipes.map(r => 
              <option value={r.id} key={r.id}>
                {r.title}
              </option>
            )}
          </select> 

          <div className={styles.addRecipe}>
            <NewRecipe buttonType='Small'/>
          </div>
        </div>
          
        <div className={styles.typeCont}>
          {Object.values(EMeals).map(meal => 
            <Input
              key={meal}
              type='radio'
              label={meal}
              name='meals'
              value={meal}
              onChange={(e:any) => setData({ ...data, type: meal })}
            />
          )}
        </div>

      </CreateForm>
    </>
  )
}
export default NewMeal

