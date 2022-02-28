import React from 'react'
import axios from 'axios'
// import { useAppSelector } from '../../state/hooks'
import { headers } from '../../lib/auth'

const Journal = () => {
  // const testing = useAppSelector((state) =>state.auth.user)

  const newJournal = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/newJournal',
      { title: 'hi',
        time: {
          date: '10/06/1008' ,
          time: '1234'
        },
        content: 'helllo journal entry'
      }, headers)
    console.log(res)

  }

  const delJournal = async (e: any) => {
    e.preventDefault()
    const res = await axios.post('api/delJournal', { id: 'all' }, headers)
    console.log(res)

  }

  const getJournal = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/getJournal', { id: '6158c5805480c456219a9292' }, headers)
    console.log(res.data)
  }

  const updateJournal =  async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/updateJournal', {
      data: { 
        content: 'helllo journal entry UPDATED'
      }, id: '6158c5805480c456219a9292' }
    , headers)
    console.log(res)
  }

  return (
    <div>
      <div className={'box'}>
        <h1>Journal</h1>


        <form>
          <button onClick={newJournal}>New Journal</button>
          <button onClick={getJournal}> Get Journal</button>
          <button onClick={delJournal}> Delete Journal</button>
          <button onClick={updateJournal}> update Journal</button>

        </form>
      </div>
    </div>
  )
}

export default Journal