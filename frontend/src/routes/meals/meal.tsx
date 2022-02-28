import React from 'react'
import axios from 'axios'
import { EMeals } from '../../types/meal'
// import { useAppSelector } from '../../state/hooks'
import { headers } from '../../lib/auth'

const Meal = () => {
  // const testing = useAppSelector((state) =>state.auth.user)

  const newMeal = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/newMeal',
      { title: 'hi',
        time: {
          date: '10/06/1008' ,
          time: '1234'
        },
        recipe: 'MEal plan gello',
        ingredients: 'helfdy fgo ndsME',
        type: EMeals.BREAKFAST
      }, headers)   
    console.log(res)
  }

  const delMeal = async (e: any) => {
    e.preventDefault()
    const res = await axios.post('api/delMeal', { id: 'all' }, headers)
    console.log(res)

  }

  const getMeal = async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/getMeal', { id: 'all' }, headers)
    console.log(res.data)
  }

  const updateMeal =  async (e:any) => {
    e.preventDefault()
    const res = await axios.post('api/updateMeal', {
      data: { 
        recipe: 'Meal UPDATED'
      }, id: '6158d0c8462c03d3283d0493' }
    , headers)
    console.log(res)
  }

  return (
    <div>
      <div className={'box'}>
        <h1>Meal</h1>


        <form>
          <button onClick={newMeal}>New Meal</button>
          <button onClick={getMeal}> Get Meal</button>
          <button onClick={delMeal}> Delete Meal</button>
          <button onClick={updateMeal}> update Meal</button>

        </form>
      </div>
    </div>
  )
}

export default Meal