import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL?.trim()

export const isAuthConnected = Boolean(baseURL)

export async function registerAccount(data) {
  const endpoint = import.meta.env.VITE_REGISTER_ENDPOINT || '/auth/register'
  const url = `${baseURL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`
  const response = await axios.post(url, data, { timeout: 15000 })
  return response.data
}
