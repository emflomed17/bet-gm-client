// @flow
import axios from 'axios'

const baseURL = 'http://localhost:5000/api/v1'

export const authenticateUser = (userEmail: string, userPassword: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/auth/login`, {
        email: userEmail,
        password: userPassword,
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err.response.data.error)
      })
  })
}
