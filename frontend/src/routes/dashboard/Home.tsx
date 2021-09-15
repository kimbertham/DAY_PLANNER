import React from 'react'
import { useAppSelector } from '../../state/hooks'


const Home = () => {

  const testing = useAppSelector((state) =>state.auth)
  console.log(testing)
  return (
    <h1> HELLO</h1>
  )
}

export default Home