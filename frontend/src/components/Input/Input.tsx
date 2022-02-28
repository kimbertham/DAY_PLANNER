import { readable } from '../../lib/common'
import React from 'react'
import styles from './styles/input.module.scss'


interface InputProps {
  label: string;
  type?: string;
  className?: string;
  placeholder?:string;
  onChange: (e:any) => void
}

export const Input = ({ type,className, label,onChange }:InputProps) => {
  return (

    <div className={styles.formField}>     
      <label>{readable(label)}</label>
      <input
        name={readable(label)}
        type={type}
        placeholder={readable(`Enter ${label}`)}
        className={className}
        onChange ={onChange}
      />
    </div>
  )
}



