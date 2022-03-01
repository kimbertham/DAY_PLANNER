import { createAsyncThunk } from '@reduxjs/toolkit'
import { IJournal } from '../../types/journal'
import { journals } from '../actions/journal'


export const getJournals = createAsyncThunk(
  'journals/getAll', (id: string) => {
    return  journals.getJournals(id)
  }
)

export const newJournal = createAsyncThunk(
  'journals/new', (data:IJournal) => {
    return  journals.newJournal(data)
  }
)

export const updateJournal = createAsyncThunk(
  'journals/update', (data:IJournal) => {
    return  journals.updateJournal(data)
  }
)

export const delJournal = createAsyncThunk(
  'journals/del', (data:IJournal) => {
    return  journals.delJournal(data)
  }
)

export const selectJournal = createAsyncThunk(
  'journals/select', (data:IJournal) =>  journals.selectJournal(data)
)