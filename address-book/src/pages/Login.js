import React from 'react';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';


const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPwd] = useState("");

    const [field, setField] = useState(false);

    async function onLogin(e){
        e.preventDefault();
        let item = {email,password};
  
        axios({
          method: 'post',
          url: 'http://localhost:3000/api/user/login',
          data: item,
      }).then(function (response) {
        var token = response.data["userid"];
        localStorage.setItem("access_token", token);
        setField(false);
        console.log(response);
        window.location = '/Contacts';
        // window.location = '/Contacts';
      }).catch(function(response){
        setField(true);
        console.log(response);
    })
    }

  return (
    <>
    <Navbar name={"Sign Up"} redirect={"/Register"}/>
    <div className='body'>
      <div className='form-container'>
        <form className="add-form" onSubmit={onLogin}>
          <h1>Login</h1>
          <div className="input-field">
            <input 
              type="email"
              placeholder={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder={"Password"}
              value={password}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          {field ? <div  className='popNotification'>Invalid email or password!</div> : ""}
          <input type={"submit"} value="Login" className="loginBtn" />
          <div className='divider'/>
          <button className='registerBtn'><Link className='link' to="/Register">Register</Link></button>
          {/* <Link className='link' to="/Register">Register</Link> */}
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
