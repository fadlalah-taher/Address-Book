import React from 'react';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
        console.log(response);
      }).catch(function(response){
        setField(true);
        console.log(response);
    })
    }

  return (
    <div className='body'>
      <div className='form-container'>
        <form className="add-form" onSubmit={onLogin}>
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
