import { useState } from "react"
import "./login.css"
import { validation } from "../../utils/validation"

const Login = ()=>{

    const [personDetail , serPersonDetail] = useState({
        email : "",
        password : ""
    })

    const [error , setError] = useState({})

    const handlePersonDetail = (e)=>{
        serPersonDetail({...personDetail , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault() 
        setError(validation(personDetail))  

        if(Object.keys(error).length === 0)
        {
           const data =  await fetch("http://localhost:3000/api/login",{
            method : "POST",
            headers : {
                "context-type" : "application/json"
            },
             body : JSON.stringify(personDetail)
           })

           if(data.sucess){
            //Navigate To Home Page
           }
           else
           {
             error.message = data.message
           }
        }
     }


    return(
        <div className="login-container">
            <form className="login_wrapper">
                <div className="input_detail">
                   <label htmlFor="email">Email : </label>
                   <input type="email" placeholder="Enter Your Name" value={personDetail.email} name="email" id="email" onChange={handlePersonDetail} required/>
                   <p>{error && error.name}</p>
                </div>
                <div className="input_detail">
                   <label htmlFor="password">Password : </label>
                   <input type="password" placeholder="Enter Your Password" value={personDetail.password} name="password" id="password" onChange={handlePersonDetail} required />
                </div>
                <button type="submit" className="submit_btn" onSubmit={handleSubmit}>Submit</button>
                <p>{error && error.message}</p>
            </form>
        </div>
    )
}

export default Login