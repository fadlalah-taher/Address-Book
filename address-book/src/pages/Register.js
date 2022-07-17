import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { MdEnhancedEncryption } from "react-icons/md";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
const Register = () => {
    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState(false);
    const [field, setField] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordState, setPasswordState] = useState(false);

    async function onRegister(e){
        e.preventDefault();
        let add = { name, email, password};
        //Adding User
        axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/register',
        data: add,
        })
        .then(function (response) {
            // console.log(response);
            if(response['data']['message']){
              setField(true);
              setEmailInvalid(false);
              setSuccess(false);
            }
            if(response['data']['keyValue']){
              setEmailInvalid(true);
              setField(false);
              setSuccess(false);
            }
            if(response['data']['user']){
              setSuccess(true);
              setEmailInvalid(false);
              setField(false);
              setName("");
              setEmail("");
              setPassword("");
            }
        }).catch(function(response){
            // console.log(response);
        })    
    };

    const togglePassword = () => {
      setPasswordState(prevState => !prevState);
    }


  return (
    <>
    <Navbar name={"Login"} redirect={"/"}/>
    <div className='registerBody'>
      <div className='form-container'>
        <form className="add-form" onSubmit={onRegister}>
          <h1>Sign Up</h1>
          <div className="input-field">
          <span className='icon'><FaUserAlt/></span>
            <input
              type="text"
              placeholder={"Full Name"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

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
              type={passwordState? "text" : "password"}
              placeholder={"Password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className='icon-eye' onClick={togglePassword}>{passwordState ? <AiFillEye/> :<AiFillEyeInvisible/>}</span>
          </div>
          {success ? <div  className='popNotification'>Created Successfully !</div> : ""}
          {emailInvalid ? <div  className='popNotification'>This email already taken !</div> : ""}
          {field ? <div  className='popNotification'>Fill the fields !</div> : ""}
          <input type={"submit"} value="Register" className="registerBtn" />
          <div className='divider'/>
          <button className='register loginBtn'><Link className='link' to="/">Login</Link></button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register
