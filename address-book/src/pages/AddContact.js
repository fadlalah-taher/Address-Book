import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

const AddContact = () => {
    const [field, setField] = useState(false);
    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [relationStatus , setRelationStatus] = useState("");
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
              type="text"
              placeholder={"Phone Number"}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <select id='question_type' className="select-field" value={relationStatus}   onChange={(e) => {setRelationStatus(e.target.value)}}>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="mcq">MCQ</option>
            </select>
          </div>
          {field ? <div  className='popNotification'>Fill the fields !</div> : ""}
          <input type={"submit"} value="Add Contact" className="registerBtn" />
          <div className='divider'/>
          <button className='register loginBtn'><Link className='link' to="/">Contacts</Link></button>
        </form>
      </div>
    </div>
  )
}

export default AddContact
