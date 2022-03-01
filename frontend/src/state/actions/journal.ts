import axios from 'axios'
import { headers } from '../../lib/auth'
import { IJournal } from '../../types/journal'

export const journals = {
  getJournals: async  (id: string) => {
    const res = await axios.post('api/getJournal', { id: id }, headers)
    return res.data
  },
  newJournal: async  (data: IJournal) => {
    const res = await axios.post('api/newJournal', data, headers)
    return res.data
  },
  updateJournal: async  (data: IJournal) => {
    const res = await axios.post('api/updateJournal',  data, headers)
    return res.data
  },
  delJournal: async  (data:IJournal) => {
    const res = await axios.post('api/delJournal', data, headers)
    return res.data
  },
  selectJournal: (data:IJournal) => data
}

