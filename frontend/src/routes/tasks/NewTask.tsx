import React,{ useState } from 'react'
import moment from 'moment'
import { ITask, ITag } from '../../types/tasks'
import { useAppDispatch } from '../../state/hooks'
import { getTasksByDate, newTask } from '../../state/thunks/tasks'
import { Modal } from '../../components/modal/Modal'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

interface NewTaskProps {
  date: string;
  tags: ITag[]
}

const intialTask = {
  title: '',
  time: {
    date: moment().format('YYYY-MM-DD')
  },
  completed: {
    checked: false
  },
  tags: []
}

const NewTask = ({ date, tags }:NewTaskProps) =>{

  const AppDispatch = useAppDispatch()
  const [data,setData] = useState<ITask>(intialTask)
  const [newModal, setNewModal] = useState<boolean>(false)

  console.log(data)

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
            label='Time Start'
            placeholder={'time'}
            onChange={(e:any) => setData({ ...data , time: { ...data.time, timeStart: e.target.value } })}/>

          <Input  
            type='time'
            label='Time End'
            placeholder={'time'}
            onChange={(e:any) => setData({ ...data , time: { ...data.time, timeEnd: e.target.value } })}/>

          <div>
            <label>Tags</label>
            <select multiple  onChange={(e:any) => setData({ ...data , tags: [...data.tags, e.target.value] })}>
              {tags.map(t => 
                <option value={t._id} key={t._id}>
                  {t.title}
                </option>
              )}
            </select>
          </div>

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