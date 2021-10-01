import React from 'react'
import axios from 'axios'
// import { useAppSelector } from '../../state/hooks'
import { headers } from '../../lib/auth'

const Journal = () => {
  // const testing = useAppSelector((state) =>state.auth.user)

  const testNewTast = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/newTask',
      { title: 'hi',
        time: {
          date: '10/06/1008' ,
          time: '1234'
        },
        completed: {
          checked: false
        },
        content: 'helllo'
      }, headers)
    console.log(res)

  }

  const delTask = async (e: any) => {
    e.preventDefault()
    const res = await axios.post('api/delTask', { id: 'all' }, headers)
    console.log(res)

  }

  const getNewTask = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/getTask', { id: 'all' }, headers)
    console.log(res)
  }

  const updateTask =  async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/updateTask', {
      data: { title: 'hellloo',
        time: {
          date: '10/06/1008' ,
          time: '1234'
        },
        completed: {
          checked: false
        },
        content: 'UPDATED'
      }, id: '6154e32edc0dc9530d9fdde1' }
    , headers)
    console.log(res)
  }

  return (
    <div>
      <div className={'box'}>
        <h1>Journal</h1>


        <form>
          <button onClick={testNewTast}>New Journal</button>
          <button onClick={getNewTask}> Get Journal</button>
          <button onClick={delTask}> Delete Journal</button>
          <button onClick={updateTask}> update Journal</button>

        </form>
      </div>
    </div>
  )
}

export default Journal