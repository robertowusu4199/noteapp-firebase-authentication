import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from "../Actions/authActions";



function Signup(props) {
    const [credentials, setcredentials] = useState({username:"", email:"", password:""})
    function handleOnchange(event){
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    function handleOnsubmit(){
        props.signup(credentials.username,credentials.email,credentials.password)
    }
    return (
        <div>
           <form>
                <div>
                   <label>Username</label>
                   <input className="user" type="username" name="username" value={credentials.username}  onChange={handleOnchange}/>
               </div>

               <div>
                   <label>Email</label>
                   <input className="user1" type="email" name="email" value={credentials.email}  onChange={handleOnchange}/>
               </div>

               <div>
                   <label>Password</label>
                   <input className="user4" type="password" name="password" value={credentials.password}  onChange={handleOnchange}/>
               </div>
               <button className="butt" type="button" name="Submit" onClick={handleOnsubmit}>Signup</button>
         </form> 
        </div>
    )
}

export default connect(null, {signup})(Signup)
