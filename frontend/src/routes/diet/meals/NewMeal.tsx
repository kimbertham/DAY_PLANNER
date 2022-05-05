import React, { useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { Input } from '../../../components/Input/Input'
import { EMeals, IMeal, IRecipe  } from '../../../types/meal'
import { newMeal } from '../../../state/thunks/meal'
import { CreateForm } from '../../../components/CreateForm/CreateForm'
import NewRecipe from '../recipes/NewRecipe'
import moment from 'moment'
import styles from '../styles/diet.module.scss'

interface NewDietProps {
  recipes: IRecipe[]
}

const currentDay =  moment().format('YYYY-MM-DD')
const initMeal: IMeal = { title: '', time: { date: currentDay, time: '' } }

const NewMeal = ({ recipes } : NewDietProps) => { 
  const [data, setData] = useState<IMeal>(initMeal)
  const [recipe, setRecipe] = useState(false)
  const AppDispatch = useAppDispatch()

  return (
    <>
      <CreateForm title='Meal' submit={() => AppDispatch(newMeal(data))}>

        <div className={styles.menuCont}>
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

          <div className={styles.formField}>  
            <label>Recipe</label>
            <select multiple  onChange={(e:any) => setData({ ...data , recipe: e.target.value })}>
              {recipes.map(r => 
                <option value={r.id} key={r.id}>
                  {r.title}
                </option>
              )}
            </select> 
            <NewRecipe/>
          </div>
          
          <div className='flex'>
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
        </div>
        
      </CreateForm>
    </>
  )
}
export default NewMeal

