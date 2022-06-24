import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [field, setField] = useState(false);


  return (
    <div className='body'>
      <div className='form-container'>
        <form className="add-form">
          <h1>Sign Up</h1>
          <div className="input-field">
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
                setPassword(e.target.value);
              }}
            />
          </div>
          {field ? <div  className='forget'>Fill the fields !</div> : ""}
          <input type={"submit"} value="Register" className="registerBtn" />
          <div className='divider'/>
          <button className='register loginBtn'><Link className='link' to="/">Login</Link></button>
        </form>
      </div>
    </div>
  )
}

export default Register
