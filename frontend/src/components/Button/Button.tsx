import React from 'react'
import styles from './styles/button.module.scss'

interface ButtonProps {
  size: 'small' | 'large';
  primary: boolean;
  text: string;
  onClick?: () => void;
  classNames?: string;
}
export const Button = ({ size,primary,text,onClick,classNames } :ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault() 
        onClick && onClick()
      } }
      className={`
        ${styles.button}
        ${styles[size]} 
        ${primary ? [styles.primaryButton] : [styles.secondaryButton]}
        ${classNames}
        `}> 
      {text}
    </button>
  )
}