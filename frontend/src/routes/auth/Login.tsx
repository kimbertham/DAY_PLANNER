
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { readable } from  '../../lib/common'
import { ILogin } from '../../types/auth'
import { useAppDispatch } from '../../state/hooks'
import { loginUser } from '../../state/thunks/auth'

import styles from './styles/auth.module.scss'

const Login = () => {

  const AppDispatch = useAppDispatch()

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
      AppDispatch(loginUser(data))
      
      history.push('/home')
    } catch (err) {
      setInvalid(true)
    }
  }

  return (
    <div className={styles.auth}> 
      <form onSubmit= {login}>

        <h1>LOG IN</h1>

        {Object.entries(data).map(([name, value]) =>  (
          <div key={name}>            
            <label>{readable(name)}</label> 
            <input
              name={name}
              autoComplete='false'
              value={[value]}
              onChange={(e) => setData({ ...data, [name]: e.target.value })}
            />
          </div>))}

        <Link to='/register'>
          <div>
            Not a member?
          </div>   
        </Link>

        <button> Log in!</button>   

        <p className={errorClass}> Invalid! Please try again! </p>

      </form>
    </div>
  )
}

export default Login