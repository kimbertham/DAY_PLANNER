import React, { useState } from 'react'
import { useAppDispatch } from '../../state/hooks'
import { Input } from '../../components/Input/Input'
import { Modal } from '../../components/modal/Modal'
import { TextArea } from '../../components/TextArea/TextArea'
import { EMeals, IMeal } from '../../types/meal'
import { Button } from '../../components/Button/Button'
import { newMeal } from '../../state/thunks/meal'
import moment from 'moment'
import styles from './styles/meals.module.scss'

const currentDay =  moment().format('YYYY-MM-DD')


const NewMeal = () => { 
  const [newModal, setNewModal] = useState<boolean>(false)
  const [data, setData] = useState<IMeal>({ title: '',time: { date: currentDay }, ingredients: [] })
  const [basicMenu, setBasicMenu] = useState<boolean>(true)
  const AppDispatch = useAppDispatch()


  return (
    <>
      <button onClick={() => setNewModal(true)}> New Meal</button>

      {newModal && <Modal closeModal={() => {
        setNewModal(false)
        setBasicMenu(true)
      }}>

        <form onSubmit={e => e.preventDefault()}>
          <h1 className='centerText'>New Meal</h1>

          <div className={styles.menuSettings}>
            <div onClick={() => setBasicMenu(true)} 
              className={basicMenu ? styles.menuSelected : styles.menuButtons}>Basic</div>
            <div  onClick={() => setBasicMenu(false)}
              className={!basicMenu ? styles.menuSelected : styles.menuButtons}>Recipe</div>
          </div>

          {basicMenu ?
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

            :

            <div className={styles.menuCont}>

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
                    setData({ ...data ,ingredients: [...data.ingredients, e.target.value] })
                    e.target.value = ''
                  } 
                }}
              />

              <div className={styles.ingCont}>
                {data.ingredients?.map((ing,i) => 
                  <div key={i} className={styles.ing}>
                    <small>{ing}</small>
                    <small onClick={() => setData({ ...data , ingredients: [...data.ingredients.filter(i => i !== ing)] })}
                      className={styles.delIng}>x</small>
                  </div>)}
              </div>

              
              <TextArea 
                label='Recipe'
                placeholder='...Enter Recipe'
                onChange={(e:any) => setData({ ...data, recipe: e.target.value })}/>
            </div>
          }

          <div className='centerRow'>
            <Button text='Cancel' size='small' primary={false} onClick={() => setNewModal(false)}/>
            <Button text='Submit' size='small' primary={true} onClick={()=>{
              setNewModal(false)
              AppDispatch(newMeal(data))
            }} />
          </div>

        </form>
      </Modal>
      }
    </>
  )
}
export default NewMeal

