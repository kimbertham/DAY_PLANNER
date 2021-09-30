import React from 'react'
import axios from 'axios'
// import { useAppSelector } from '../../state/hooks'
import styles from './styles/dashboard.module.scss'
import { headers } from '../../lib/auth'

const Home = () => {
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
      <div className={styles.box}>
        <h1>Schedule</h1>


        <form>
          <button onClick={testNewTast}>New Task</button>
          <button onClick={getNewTask}> Get Task</button>
          <button onClick={delTask}> Delete Task</button>
          <button onClick={updateTask}> update Task</button>

        </form>
      </div>
    </div>
  )
}

export default Home