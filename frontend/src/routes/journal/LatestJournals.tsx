import React, { Dispatch, SetStateAction } from 'react'
import styles from './styles/journal.module.scss'
import { IJournal } from '../../types/journal'
import moment from 'moment'

interface LatestJournalsProps {
  journals: IJournal[],
  setSelected:  Dispatch<SetStateAction<IJournal>>
}


const LatestJournals = ({ journals, setSelected }:LatestJournalsProps) => {

  if (!journals) return null

  return (
    <div className={styles.latest}>

      <h1> Latest Entries</h1>
      
      {journals.map((j,i) => 
        <div key={i} className={styles.lateEntry} onClick={() => setSelected(j)}>
          <p>{j.title}</p>
          <p>{moment(j.time?.date).format('DD MM YYYY')}</p>
          <p>{j.content}</p>
        </div>)}

    </div>
  )
}

export default LatestJournals