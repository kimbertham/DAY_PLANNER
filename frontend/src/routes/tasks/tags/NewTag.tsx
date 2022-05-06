import React,{ useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { Modal } from '../../../components/modal/Modal'
import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { ITag } from '../../../types/tasks'
import { newTag } from '../../../state/thunks/tasks'

const intialTag : ITag = {
  title: '',
  color: ''
}

const NewTask = () =>{
  const AppDispatch = useAppDispatch()
  const [data,setData] = useState<ITag>(intialTag)
  const [newModal, setNewModal] = useState<boolean>(false)
  
  return (
    <>
      <button onClick={() => setNewModal(true)}>New Tag</button> 
      {newModal && <Modal closeModal={setNewModal}>

        <form>
          <h1>New Tag</h1>

          <Input  
            type='text'
            label='title'
            placeholder={'title'}
            onChange={(e:any) => setData({ ...data, 'title': e.target.value })}/>

          <Input  
            type='color'
            label='color'
            placeholder={'title'}
            onChange={(e:any) => setData({ ...data, 'color': e.target.value })}/>

          <div className='cr'>
            <Button text='Cancel' size='small' primary={false} onClick={() => setNewModal(false)}/>
            <Button text='Submit' size='small' primary={true} onClick={() => AppDispatch(newTag(data))}/>
          </div>

        </form>
      </Modal>}
    </>
  )
}

export default NewTask