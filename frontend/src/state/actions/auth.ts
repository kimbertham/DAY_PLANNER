import axios from 'axios'
import { ILogin, IRegister } from '../../types/auth'


export const auth = {
  login: async (data: ILogin) => {
    const res = await axios.post('api/login/', data)
    console.log(res.data)
    window.localStorage.setItem('token', res.data.token)
    return res.data
  },
  register: async (data: IRegister) => {
    await axios.post('/api/register/', data)
  }
}