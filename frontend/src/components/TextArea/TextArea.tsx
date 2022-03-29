import { readable } from '../../lib/common'
import React from 'react'
import styles from '../Input/styles/input.module.scss'

interface TextAreaProps {
  label: string;
  className?: string;
  placeholder?:string;
  onChange?: (e:any) => void;
  onKeyDown?:  (e:any) => void;
}

export const TextArea = ({ className, label,onChange, placeholder, onKeyDown }:TextAreaProps) => {
  return (

    <div className={styles.formField}>     
      <label>{readable(label)}</label>
      <textarea      
        placeholder={placeholder ?  placeholder : readable(`Enter ${label}`)}
        className={className}
        onChange ={onChange}
        onKeyDown={onKeyDown}>
      </textarea>

    </div>
  )
}



