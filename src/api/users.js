import axios from 'axios'

const baseURL = 'http://localhost:5000/api/v1'

export const getUser = async (userId: string, JWTToken: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/users/${userId}`, {
        headers: { Authorization: `Bearer ${JWTToken}` },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
