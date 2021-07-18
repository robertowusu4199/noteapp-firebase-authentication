import React, { useState } from 'react'
import { connect } from "react-redux"
import { login } from "../Actions/authActions"



function Login(props) {
    const [credentials, setcredentials] = useState({email:"",password:""})
    function handleOnchange(event){
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    function handleOnsubmit(){
        props.login(credentials.email,credentials.password)
    }
    return (
        <div>
           <form>
               <div>
                   <label>Email</label>
                   <input className="user"  type="email" name="email" value={credentials.email}  onChange={handleOnchange}/>
               </div>

               <div>
                   <label>Password</label>
                   <input className="user3"  type="password" name="password" value={credentials.password}   onChange={handleOnchange}/>
               </div>
               <button className="butt1" type="button" name="Submit" onClick={handleOnsubmit}>Login</button>
         </form> 
        </div>
    )
}

export default connect(null,{login})(Login)
