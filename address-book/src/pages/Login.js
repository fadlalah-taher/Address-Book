import React from 'react';
import { useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPwd] = useState("");

    const [field, setField] = useState(false);

  return (
    <div className='body'>
      <div className='form-container'>
        <form className="add-form">
          <h1>Login</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder={"Full Name"}
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
          {field ? <div  className='forget'>Invalid email or password!</div> : ""}
          <input type={"submit"} value="Login" className="loginBtn" />
          <div className='divider'/>
          <button className='registerBtn'><Link className='link' to="/Register">Register</Link></button>
          {/* <Link className='link' to="/Register">Register</Link> */}
        </form>
      </div>
    </div>
  )
}

export default Login
