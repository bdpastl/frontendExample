import superagent from "superagent";
import Cookies from "universal-cookie";
const baseUserURL = "http://localhost:3535"


export const addNewBill = async (user, price, bill) => {

  const postBody = {
    associatedUser: user, 
    price, 
    bill
  }

  const cookies = new Cookies()

  const token = cookies.get("userToken")

  const headers = {
    Authorization: `Bearer ${token}`
  }


  const addBillURL = baseUserURL + '/bill/add'

  const response = await superagent.post(addBillURL, postBody).set(headers)

  console.log("WHAT?! ", response)

}