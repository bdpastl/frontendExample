import superagent from "superagent";
import Cookies from "universal-cookie";
const baseUserURL = "http://localhost:3535"

export const createUser = async (userName, password) => {
    const postBody = {
      userName,
      password
    }

    const addUrl = baseUserURL + '/user/add'
    const response = await superagent.post(addUrl, postBody)

    console.log("Response", response)

    return 
}

export const logUserIn = async(userName, password) => {
    const postBody = { userName }
    const base64String = Buffer.from(`${userName}:${password}`, 'ascii').toString("base64")
    const headers = {
      Authorization: `Basic ${base64String}`
    }

    const tokenUrl = baseUserURL + '/token'

    const response = await superagent.post(tokenUrl, postBody).set(headers)

    if (response.status === 401) return false 
    
    console.log("RESPONSE FROM LTOKEN? ", response)

    const token = response.body.token

    const cookies = new Cookies(); 

    cookies.set('userToken', token)

    return true
}