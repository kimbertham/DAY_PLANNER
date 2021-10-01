import React from 'react'
import axios from 'axios'
// import { useAppSelector } from '../../state/hooks'
import { headers } from '../../lib/auth'

const Habits = () => {
  // const testing = useAppSelector((state) =>state.auth.user)

  const newHabit = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/newHabit',
      { title: 'Swimming',
        description: 'get better at swimming ',
        frequency: 1
      }, headers)
    console.log(res.data)

  }


  const newHabitUnit = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/newHabitUnit',
      { habit: '61573d55ef0e6284b24c6321',
        date: '10/08/1990'
      }, headers)
    console.log(res.data)
  }

  const delHabitUnit = async (e: any) => {
    e.preventDefault()
    const res = await axios.post('api/delHabitUnit', { id: '615742d9870efb0a2db6c521' }, headers)
    console.log(res.data)

  }

  const delHabit = async (e: any) => {
    e.preventDefault()
    const res = await axios.post('api/delHabit', { id: '61573d55ef0e6284b24c6321' }, headers)
    console.log(res.data)

  }

  const getHabits = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/getHabit', { id: 'all' }, headers)
    console.log(res.data)
  }

  const getHabitUnits = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/getHabitUnit', { habit: '61573d55ef0e6284b24c6321' }, headers)
    console.log(res.data)
  }

  const updateHabit =  async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/updateHabit', {
      data: { 
        frequency: 2

      }, id: '61573d55ef0e6284b24c6321' }
    , headers)
    console.log(res.data)
  }

  const updateHabitUnit =  async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/updateHabitUnit', {
      data: {
        checked: true
      }, 
      id: '615742d9870efb0a2db6c521' }
    , headers)
    console.log(res)
  }

  return (
    <div>
      <div className={'box'}>
        <h1>Habits</h1>
        <form>
          <button onClick={newHabit}>New Habit</button>
          <button onClick={getHabits}> Get Habit</button>
          <button onClick={delHabit}> Delete Habit</button>
          <button onClick={updateHabit}> update Habit</button>
        </form>
      </div>

      <div className={'box'}>
        <h1>Habit Units</h1>
        <form>
          <button onClick={newHabitUnit}>New Habit Unit</button>
          <button onClick={getHabitUnits}> Get Habit Unit</button>
          <button onClick={delHabitUnit}> Delete Habit Unit</button>
          <button onClick={updateHabitUnit}> update Habit Unit</button>
        </form>
      </div>
    </div>
  )
}

export default Habits