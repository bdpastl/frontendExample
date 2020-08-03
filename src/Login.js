import React, {
  useState
} from 'react'
import {
  logUserIn
} from "./services/userService";
import  { addNewBill } from './services/billService'

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const createNewUserWithInput = async () => {
    await logUserIn(userName, password)
  }

  const addBill = async () => {
    await addNewBill(userName, 5000, "whatever")
  }

  return ( <div>
    Hello!
    Give me your deets:
    <div>
    UserName: < input type = 'text'
    value = {
      userName
    }
    onChange = {
      handleUserName
    }
    /> 
    </div >
    <div>
    Password: < input type = 'password'
    value = {
      password
    }
    onChange = {
      handlePassword
    }
    /> 
    </div> 
    <button onClick = {
      createNewUserWithInput
    } >
    PRESS ME!
    </button> 

    <div>
      Add that bill!
      <button onClick={addBill}> PRESS ME TO ADD A BILL</button>
    </div>


    </div>
  )
}

export default Login
