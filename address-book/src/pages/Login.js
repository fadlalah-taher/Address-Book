import React from 'react';
import { useState} from 'react';

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPwd] = useState("");

    const [field, setField] = useState(false);

  return (
    <div className='body'>
      <div className='right-container'>
        <form className="add-form">
          <h1>Login</h1>
          <div className="form-control">
            <input
              type="text"
              placeholder={"Full Name"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-control">
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
          <input type={"submit"} value="Login" className="btn btn-block" />
          <div className='divider'/>
          <button className='btn btn-register'></button>
          {/* <Link className='link' to="/Register">Register</Link> */}
        </form>
      </div>
    </div>
  )
}

export default Login
