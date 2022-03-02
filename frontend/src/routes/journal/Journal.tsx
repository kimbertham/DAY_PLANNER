/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useAppSelector,useAppDispatch } from '../../state/hooks'
import LatestJournals from './LatestJournals'
import JournalEntry from './JournalEntry'
import { getJournals } from '../../state/thunks/journal'
import { clearJournal, IJournal } from '../../types/journal'


const Journal = () => {
  const AppDispatch = useAppDispatch()
  const journals = useAppSelector((state) =>state.journals.journals)
  const [selected, setSelected] = useState<IJournal>(clearJournal)

  useEffect(() => {
    AppDispatch(getJournals('all'))
  }, [])

  return (
    <div className='flex'> 

      <LatestJournals 
        journals={journals} 
        setSelected={setSelected}
      />

      <JournalEntry 
        journal={selected}
        setSelected={setSelected}
      />

    </div>
  )
}


export default Journal


