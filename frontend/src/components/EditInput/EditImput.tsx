import React from 'react'

import styles from './editInput.module.scss'

interface EditInputProps {
  value: any;
  toggle: boolean;
}

export const EditInput = ({ value, toggle }: EditInputProps) => {
  return (
    <input 
      value={value}
      disabled={!toggle}
      className={toggle ? styles.detailsInputEdit : styles.detailsInput}/>
  )
}

