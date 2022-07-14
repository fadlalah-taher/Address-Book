import React from 'react';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

import { AiFillEyeInvisible } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { MdEnhancedEncryption } from "react-icons/md";



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
        // console.log(response);
        window.location = '/Contacts';
      }).catch(function(response){
        setField(true);
        // console.log(response);
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
          <span className='icon'><FaEnvelope/></span>
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
          <span className='icon'><MdEnhancedEncryption/></span>
          <span className='icon'><MdOutlineLock/></span>
            <input
              type="password"
              placeholder={"Password"}
              value={password}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            <span className='icon-eye'><AiFillEyeInvisible/></span>
          </div>
          {field ? <div  className='popNotification'>Invalid email or password!</div> : ""}
          <input type={"submit"} value="Login" className="loginBtn" />
          <div className='divider'/>
          <button className='registerBtn'><Link className='link' to="/Register">Register</Link></button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
