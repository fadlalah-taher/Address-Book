import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
const AddContact = () => {
    const [field, setField] = useState(false);
    const [fullname, setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [relationStatus , setRelationStatus] = useState("");

    async function onAddContact(e){
        e.preventDefault();
        let add = { fullname, email, number, relationStatus};
        let idd = "62b4ade1a54383b555f5465e";
        //Adding User
        axios({
            method: 'post',
            url: `http://localhost:3000/contact/addContacts?id=${idd}`,
            data: add,
            })
            .then(function (response) {
                console.log(response);
                if(response['data']['message']){
                  setField(true);
                }
            }).catch(function(response){
                console.log("response");
            })
    }
// function onAddContact(e){
//     e.preventDefault();
//     console.log(name);
//     console.log(email);
//     console.log(number);
//     console.log(relationStatus);
// }

  return (
    <div className='body'>
      <div className='form-container'>
        <form className="add-form" onSubmit={onAddContact}>
          <h1>Add Contact</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder={"Full Name"}
              value={fullname}
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
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
          </div>
          {field ? <div  className='popNotification'>Fill the fields !</div> : ""}
          <input type={"submit"} value="Add Contact" className="registerBtn" />
          <div className='divider'/>
          <button className='register loginBtn'><Link className='link' to="/Contacts">Contacts</Link></button>
        </form>
      </div>
    </div>
  )
}

export default AddContact
