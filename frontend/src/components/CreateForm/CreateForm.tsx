import React, { useState } from 'react'
import { Modal } from '../modal/Modal'
import { Button } from '../Button/Button'
import Styles from './styles/createForm.module.scss'

interface CreateFormProps {
  title:string;
  submit: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
  buttonType?: 'Small' | 'Large'
}

export const CreateForm = ({ title, submit, children, onCancel, buttonType }:CreateFormProps) => { 
  const [newModal, setNewModal] = useState<boolean>(false)

  return (
    <>
      <button className={buttonType === 'Small' ? Styles.smallCreateButton : Styles.largeCreateButton} 
        onClick={() => setNewModal(true)}>
        {title}
      </button>

      {newModal && <Modal closeModal={() => {
        setNewModal(false)
      }}>

        <form onSubmit={e => e.preventDefault()} className={Styles.form}>
          <h1 className='centerText'>{title}</h1>
  
          {children}

          <div className='cr'>
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

