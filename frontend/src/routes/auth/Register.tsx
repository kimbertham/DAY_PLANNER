import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { readable } from  '../../lib/common'
import { Link, useHistory } from 'react-router-dom'
import { IRegister } from '../../types/auth'
import { useAppDispatch } from '../../state/hooks'
import { register } from '../../state/thunks/auth'

const initial = { firstName: 'kimberley', lastName: 'tham', email: 'kimberley@mail', password: 'pass', passwordConfirmation: 'pass' }

const Register = () => {
  const AppDispatch = useAppDispatch()
  const [data, setData] = useState<IRegister>(initial)
  const [invalid, setInvalid] = useState(false)
  const history = useHistory()

  const errorClass = invalid ? 'shake-text' : 'display-none' 

  useEffect(() => {
    if (invalid)  setTimeout(() => setInvalid(false), 1000)
  })


  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post('/api/register/', data)
      history.push('/login')
    } catch (err) {
      setInvalid(true)
    }
  }

  return (
    <div className='auth'> 
      <form onSubmit= {register}>

        <h1>REGISTER</h1>

        {Object.entries(data).map(([name, value]) =>  (
          <div className='form-field' key={name}>            
            <label>{readable(name)}</label>
            <input
              className='auth-input'
              name={name}
              value={[value]}
              autoComplete='false'
              onChange={(e) => setData({ ...data, [name]: e.target.value })}
            />
          </div>))}


        <Link to='/login'>
          <div  className='auth-link'> Already a member? </div>   
        </Link>

        <button className='auth-button'> Register!</button>   
        <p className={errorClass}> Invalid! Please try again! </p>

      </form>
    </div>
  )
}

export default Register