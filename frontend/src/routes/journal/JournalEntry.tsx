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
    if (journal._id && data._id !== journal._id) {
      setData(journal)
    }
  },[journal,setData,data])

  const submit = () => {
    if (journal._id) {
      console.log(data._id)
      AppDispatch(updateJournal(data))
    } else {
      AppDispatch(newJournal(data))
    }
  }


  if (!journal) return null
  return (
    <div className={styles.new}>
      
      <button onClick={submit}
      > save 
      </button>

      <button onClick={() => {
        setData(clearJournal)
        setSelected(clearJournal)
      }}
      > New
      </button>

      <button onClick={() => AppDispatch(delJournal(journal))}
      > Delete
      </button>

      <button>
        Favorite
      </button>


      <h1>{journal.title}</h1>
      <p>{moment(journal.time.date).format('dddd DD MMMM YYYY')}</p>
      <textarea
        value={data.content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData({ ...journal, content: e.target.value })}>
      </textarea>

    </div>
  )
}

export default JournalEntry