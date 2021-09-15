
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { readable } from  '../../lib/common'
import { ILogin } from '../../types/auth'

const Login = () => {

  const [data, setData] = useState<ILogin>({ email: 'kimberley@mail', password: 'pass' })
  const [invalid, setInvalid] = useState(false)
  const history = useHistory()

  const errorClass = invalid ? 'shake-text' : 'display-none' 

  useEffect(() => {
    if (invalid)  setTimeout(() => setInvalid(false), 1000)
  })

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post('api/login/', data)
      window.localStorage.setItem('token', res.data.token)
      history.push('/home')
    } catch (err) {
      setInvalid(true)
    }
  }

  return (
    <div className='auth'> 
      <form onSubmit= {login}>

        <h1>LOG IN</h1>

        {Object.entries(data).map(([name, value]) =>  (
          <div className='form-field' key={name}>            
            <label>{readable(name)}</label> 
            <input
              className='auth-input'
              name={name}
              autoComplete='false'
              value={[value]}
              onChange={(e) => setData({ ...data, [name]: e.target.value })}
            />
          </div>))}

        <Link to='/register'>
          <div className='auth-link'>
            Not a member?
          </div>   
        </Link>

        <button className=' auth-button'> Log in!</button>   

        <p className={errorClass}> Invalid! Please try again! </p>

      </form>
    </div>
  )
}

export default Login