import React, { SetStateAction,Dispatch } from 'react'
import styles from './styles/modal.module.scss'

interface ModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>,
  children: React.ReactNode
}

export const Modal = ({ children, closeModal }:ModalProps) => {
  return (
    <div className={styles.outter} onClick={(e) => e.target === e.currentTarget && closeModal(false)}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}
