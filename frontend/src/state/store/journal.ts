import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { clearJournal, IJournal } from '../../types/journal'
import { getJournals, newJournal, delJournal, updateJournal, selectJournal } from '../thunks/journal'

interface InitialJournal {
  journals: IJournal[],
}

const initialState : InitialJournal = { 
  journals: []
} 

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(getJournals.fulfilled , (state, action) => {
      state.journals = [...action.payload]
    })
    builder.addCase(newJournal.fulfilled , (state, action) => {
      state.journals = [...state.journals, action.payload]
    })
    builder.addCase(delJournal.fulfilled , (state, action) => {
      state.journals = [...state.journals.filter(j => j !== action.meta.arg )]
    })
    builder.addCase(updateJournal.fulfilled , (state, action) => {
      const i = state.journals.findIndex(j => j._id === action.payload._id)
      state.journals[i] = action.payload
    })
    builder.addCase(selectJournal.fulfilled , (state, action) => {
    })
  }
})
