import React,{ useState } from 'react'
import moment from 'moment'
import { ITask } from '../../types/tasks'
import { useAppDispatch } from '../../state/hooks'
import { getTasksByDate, newTask } from '../../state/thunks/tasks'
import { Modal } from '../../components/modal/Modal'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

interface NewTaskProps {
  date: string;
}

const intialTask = {
  title: '',
  time: {
    date: moment().format('YYYY-MM-DD')
  },
  completed: {
    checked: false
  }
}

const NewTask = ({ date }:NewTaskProps) =>{

  const AppDispatch = useAppDispatch()
  const [data,setData] = useState<ITask>(intialTask)
  const [newModal, setNewModal] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setNewModal(true)}>New Task</button> 

      {newModal && <Modal closeModal={setNewModal}>

        <form>

          <h1>New Task</h1>

          <Input  
            type='text'
            label='title'
            placeholder={'title'}
            onChange={(e:any) => setData({ ...data, 'title': e.target.value })}/>

          <textarea 
            title='Content'
            placeholder={'content'}
            onChange={(e:any) => setData({ ...data, 'content': e.target.value })}>
            
          </textarea>

          <Input  
            type='date'
            label='date'
            placeholder={'date'}
            onChange={(e:any) =>  setData({ ...data , time: { ...data.time, date: moment(new Date(e.target.value)).format('YYYY-MM-DD') } })}/>

          <Input  
            type='time'
            label='time'
            placeholder={'time'}
            onChange={(e:any) => setData({ ...data , time: { ...data.time, time: e.target.value } })}/>

          <div className='centerRow'>
            <Button text='Cancel' size='small' primary={false} onClick={() => setNewModal(false)}/>
            <Button text='Submit' size='small' primary={true} onClick={() => {
              AppDispatch(newTask(data))
              date === data.time.date && AppDispatch(getTasksByDate(date))
            }}/>
          </div>

        </form>
      </Modal>}
    </>
  )
}

export default NewTask