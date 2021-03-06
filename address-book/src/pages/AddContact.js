import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Map from '../components/Map';
import {FcLeftDown2} from 'react-icons/fc';
import Navbar from '../components/Navbar';

import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const AddContact = () => {
 
  const [field, setField] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [success, setSuccess] = useState(false);

  const [fullname, setName] = useState("");
  const [email , setEmail] = useState("");
  const [number , setNumber] = useState("");
  const [relationStatus , setRelationStatus] = useState("");
  async function onAddContact(e){
      e.preventDefault();
      let coordinatesLng = localStorage.getItem("coordinateLng");
      let coordinatesLat = localStorage.getItem("coordinateLat");
      
      let add = { fullname, email, number, relationStatus, location:{"coordinates":[coordinatesLat,coordinatesLng]}};
      
      let userId = localStorage.getItem("access_token");
      //Adding User
      axios({
          method: 'post',
          url: `http://localhost:3000/contact/addContacts?id=${userId}`,
          data: add,
          })
          .then(function (response) {
              if(response['data']['results']){
                  setSuccess(true);
                  setEmailInvalid(false);
                  setField(false);
                  setName("");
                  setEmail("");
                  setNumber("");
                  setRelationStatus("");
              }
              if(response['data']['keyValue']){
                  setEmailInvalid(true);
                  setField(false);
                  setSuccess(false);
              }
              if(response['data']['message']){
                  setField(true);
                  setSuccess(false);
                  setEmailInvalid(false);
              }
          }).catch(function(response){
              // console.log(response);
          })
  }


  return (
    <div>
      <Navbar name={"Logout"} redirect={"/"}/>
    <div className='body'>
      <div className='form-container'>
        <form className="add-form" onSubmit={onAddContact}>
          <h1>Add Contact</h1>
          <div className="input-field">
          <span className='icon'><FaUserAlt/></span>
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
          <span className='icon'><MdPhone/></span>
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
                <option value="">RelationShip Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className='clickLocation'>Select Location  Below <FcLeftDown2/> </div>
          {field ? <div  className='popNotification'>Fill the fields !</div> : ""}
          {emailInvalid ? <div  className='popNotification'>This email already taken !</div> : ""}
          {success ? <div  className='popNotification'>Added Successfully !</div> : ""}
          <input type={"submit"} value="Add Contact" className="registerBtn" />
          <div className='divider'/>
          <button className='register loginBtn'><Link className='link' to="/Contacts">Contacts</Link></button>
        </form>
      </div>
    </div>
    <Map latLngg={true}/>
    </div>
  )
}

export default AddContact
