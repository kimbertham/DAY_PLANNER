import { readable } from '../../lib/common'
import React from 'react'
import styles from './styles/input.module.scss'


interface InputProps {
  label: string;
  type?: string;
  name?: string;
  value?:any;
  className?: string;
  placeholder?:string;
  onChange?: (e:any) => void;
  onKeyDown?:  (e:any) => void;
}

export const Input = ({ type, name, className, label,onChange, placeholder, onKeyDown,value }:InputProps) => {
  return (

    <div className={styles.formField}>     
      <label>{readable(label)}</label>
      <input
        name={name ? name : readable(label)}
        value={value}
        type={type}
        placeholder={placeholder ?  placeholder : readable(`Enter ${label}`)}
        className={className}
        onChange ={onChange}
        onKeyDown={onKeyDown}
        autoComplete='off'
      />
    </div>
  )
}



