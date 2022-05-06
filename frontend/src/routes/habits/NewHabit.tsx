import React, { useState } from 'react'
import { useAppDispatch } from '../../state/hooks'
import { newHabit } from '../../state/thunks/habits'
import { IHabits } from '../../types/habits'
import { Input } from '../../components/Input/Input'
import { Modal } from '../../components/modal/Modal'
import moment, { weekdays } from 'moment'
import { Button } from '../../components/Button/Button'


const currentDay =  moment().format('YYYY-MM-DD')
const NewHabit = () => { 
  const [newModal, setNewModal] = useState<boolean>(false)
  const [data, setData] = useState<IHabits>({ title: '', weekDays: [], description: '', startDate: currentDay  })
  const AppDispatch = useAppDispatch()

  return (
    <>
      <button onClick={() => setNewModal(true)}> New Habbit</button>

      {newModal && <Modal closeModal={setNewModal}>

        <form>
          <h1>New Habit</h1>

          <Input  
            type='text'
            label='title'
            placeholder={'title'}
            onChange={(e:any) => setData({ ...data, 'title': e.target.value })}/>


          <Input  
            type='text'
            label='description'
            placeholder='description'
            onChange={(e:any) => setData({ ...data, 'description': e.target.value })}/>
              
      
          <div className='flex'>
            {weekdays().map(day =>
              <Input
                key={day}
                type='checkbox'
                label={day}
                onChange={(e:any) => setData({ ...data, 'weekDays': [...data.weekDays, day] })}/>
            )}
          </div>

          <div className='cr'>
            <Button text='Cancel' size='small' primary={false} onClick={() => setNewModal(false)}/>
            <Button text='Submit' size='small' primary={true} onClick={()=>{
              AppDispatch(newHabit(data))
              setNewModal(false)
            }} />
          </div>
        </form>
      </Modal>
      }
    </>
  )
}
export default NewHabit

