import React, { Dispatch, SetStateAction } from 'react'
import styles from './styles/journal.module.scss'
import { IJournal } from '../../types/journal'
import moment from 'moment'
import { useAppDispatch } from '../../state/hooks'
import { getJournals } from '../../state/thunks/journal'

interface LatestJournalsProps {
  journals: IJournal[],
  setSelected:  Dispatch<SetStateAction<IJournal>>
}

const LatestJournals = ({ journals, setSelected }:LatestJournalsProps) => {
  const AppDispatch = useAppDispatch()

  return (
    <div className={styles.latest}>

      <select onChange={(e) => AppDispatch(getJournals(e.target.value)) }>
        <option value='all'>All entries</option>
        <option value='favorite'>Favorite Entries</option>
      </select>
      
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