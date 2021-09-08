import axios from 'axios'
import { SaveInfo } from '../types'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:30125',
  timeout: 10 * 1000,
})

function post(url: string, data: any, config?: any) {
  return instance.post(url, data, config)
}

export const saveConfig = async (data: SaveInfo) => {
  return post('config-save', data)
}

export { post }
