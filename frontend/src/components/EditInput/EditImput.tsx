import React from 'react'

import styles from './editInput.module.scss'

interface EditInputProps {
  value: any;
  toggle: boolean;
  type?: string;
  onChange: (e: any) => void
}

export const EditInput = ({ value, toggle, type }: EditInputProps) => {
  return (
    <input 
      value={value}
      type={type}
      disabled={!toggle}
      className={toggle ? styles.detailsInputEdit : styles.detailsInput}/>
  )
}

