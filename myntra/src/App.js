import Header from "./component/header/header"
import Main from "./component/main/main"
import Footer from "./component/footer/footer"

import FormInput from "./component/login/FormInput.js"
import "./app.css"
import { useState } from "react"

const App = ()=>{

  const [personDetail , setPersonDetail] = useState({
    userName : "",
    email : "",
    birthday : "",
    password : "",
    confirmPassword : ""
  })

  const inputs = [
    {
      id : 1,
      label : "User",
      type : "text",
      placeHolder : "UserName",
      name : "userName",
      value : personDetail.userName
    },
    {
      id : 2,
      label : "Email",
      type : "email",
      placeHolder : "Email",
      name : "email",
      value : personDetail.email
    },
    {
      id : 3,
      label : "Birth-Date",
      type : "Date",
      placeHolder : "Date",
      name : "birthday",
      value : personDetail.birthday
    },
    {
      id : 1,
      label : "Password",
      type : "password",
      placeHolder : "Password",
      name : "password",
      value : personDetail.password
    },
    {
      id : 5,
      label : "ConfirmPassword",
      type : "password",
      placeHolder : "ConfirmPassword",
      name : "ConfirmPassword",
      value : personDetail.confirmPassword
    }
  ]

  console.log(personDetail)
  return(
    <div className="app"> 
      <form >
        <FormInput name="username" value={personDetail.userName} id={1} placeHolder="UserName" setPersonDetail={setPersonDetail}/>
        <FormInput name="email" value={personDetail.email} id={2} placeHolder="Email" setPersonDetail={setPersonDetail}/>
        <FormInput name="birthday" value={personDetail.birthday} id={3} placeHolder="Birthday" setPersonDetail={setPersonDetail}/>
        <FormInput name="password" value={personDetail.password} id={4} placeHolder="Password" setPersonDetail={setPersonDetail}/>
        <FormInput name="confirmPassword" value={personDetail.confirmPassword} placeHolder="ConfirmPassword" id={5} setPersonDetail={setPersonDetail}/>
      </form>
    </div>
  )
}

export default App