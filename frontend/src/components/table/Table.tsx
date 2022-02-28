import React from 'react'
import styles from './styles/table.module.scss'

interface TableProps {
  headers: string[],
  children?: React.ReactNode;

}

export const Table = ({ headers, children }:TableProps, ) => {

  return (

    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((h:string) => <th key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>

    </table>
  )
}

