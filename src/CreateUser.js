import React, {useState} from 'react'
import { createUser } from "./services/userService";

const CreateUser = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const createNewUserWithInput = async () => {
    await createUser(userName, password)
  }

  return ( <div>
    Hello!
    Give me your deets:
    <div>
    UserName: <input type = 'text'
    value = {
      userName
    }
    onChange = {
      handleUserName
    }
    /> </div> 
    <div>
    Password: <input type = 'password'
    value = {
      password
    }
    onChange = {
      handlePassword
    }
    /> </div> <button onClick = {
      createNewUserWithInput
    } >
    PRESS ME!
    </button> </div>

  )
}