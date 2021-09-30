import axios from 'axios'
import { ILogin } from '../../types/auth'

export const auth = {
  login: async (data: ILogin) => {
    const res = await axios.post('api/login/', data)
    window.localStorage.setItem('token', res.data.token)
    return res.data

  }
}