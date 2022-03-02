import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './styles/journal.module.scss'
import moment from 'moment'
import { IJournal, clearJournal } from '../../types/journal'
import { newJournal, updateJournal, delJournal } from '../../state/thunks/journal'
import { useAppDispatch } from '../../state/hooks'


interface JournalEntryProps {
  journal : IJournal,
  setSelected:  Dispatch<SetStateAction<IJournal>>
}

const JournalEntry = ({ journal, setSelected }: JournalEntryProps) => {
  const AppDispatch = useAppDispatch()
  const [data, setData] = useState(journal)

  useEffect(() => {
    (journal._id && data._id !== journal._id) && setData(journal)
  },[journal, setData, data])

  return (
    <div className={styles.new}>

      <div>
        <button onClick={() => 
          journal._id ?
            AppDispatch(updateJournal(data)) : AppDispatch(newJournal(data))}
        > save 
        </button>

        <button onClick={() => {
          setData(clearJournal)
          setSelected(clearJournal)
        }}
        > New
        </button>

        <button onClick={() => {
          AppDispatch(delJournal(journal))
          setSelected(clearJournal)
          setData(clearJournal)
        }}
        > Delete
        </button>

        <button onClick={() =>
          AppDispatch(updateJournal({ ...data , favorite: !data.favorite }))}>
        Favorite
        </button>
      </div>

      <div>
        <input
          type='text'
          value={data.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, title: e.target.value })}/>
    
        <p>{moment(journal.time.date).format('dddd DD MMMM YYYY')}</p>

        <textarea
          value={data.content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData({ ...data, content: e.target.value })}>
        </textarea>
      </div>
      
    </div>
  )
}

export default JournalEntry