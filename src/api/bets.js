import axios from 'axios'

const baseURL = 'http://localhost:5000/api/v1'

export const getBets = async (groupId: string, JWTToken: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/bets/group/${groupId}`, {
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
