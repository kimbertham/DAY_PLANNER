import React, { useState } from 'react'
import { Modal } from '../modal/Modal'
import { Button } from '../Button/Button'

interface CreateFormProps {
  title:string;
  submit: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
}

export const CreateForm = ({ title, submit, children, onCancel }:CreateFormProps) => { 
  const [newModal, setNewModal] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setNewModal(true)}> New {title}</button>

      {newModal && <Modal closeModal={() => {
        setNewModal(false)
      }}>

        <form onSubmit={e => e.preventDefault()}>
          <h1 className='centerText'>New {title}</h1>
  
          {children}

          <div className='centerRow'>
            <Button text='Cancel' size='small' primary={false} onClick={() => {
              if (onCancel) {   
                onCancel()
                setNewModal(false)
              } else {
                setNewModal(false)
              }
            }}
            />
            <Button text='Submit' size='small' primary={true} onClick={()=>{
              setNewModal(false)
              submit()
            }} />
          </div>


        </form>
      </Modal>
      }
    </>
  )
}

