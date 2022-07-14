import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const UpdateContact = () => {
    let contactId = localStorage.getItem("contact_id");
    const [fullname, setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [contact, setContact] = useState("");
    const [relationStatus , setRelationStatus] = useState("");

    const fetchContact = async () => {
        // Display Contact
        try{
            await axios.post(`http://localhost:3000/contact/getContactById?id=${contactId}`)
            .then(res =>{
                const data = res.data['results'][0];
                setContact(data);
                setEmail(data['email']);
                setNumber(data['number']);
                setName(data['fullname']);
                setRelationStatus(data['relationStatus']);
            })
        } catch(err){
            //console.log(err);
        }
    }

    // Update Contact
    const updateContact = async (e) => {
        e.preventDefault();
        var info = {fullname, email, number, relationStatus};
        try{
            axios({
                method: 'post',
                url: `http://localhost:3000/contact/updateContact?id=${contactId}`,
                data: info,
                })
                .then(function (response) {
                    console.log(response);
                    window.location.reload();
                });
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchContact();
    }, []);



  return (
    <div>
    <Navbar name={"Contacts"} redirect={"/Contacts"}/>
      <div className='body'>
      <div className='form-container'>
        <form className="add-form" onSubmit={updateContact}>
          <h1>Update Contact</h1>
          <div className="input-field">
          <span className='icon'><FaUserAlt/></span>
            <input
              type="text"
              placeholder={contact['fullname']}
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
              placeholder={contact['email']}
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
              placeholder={contact['number']}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <select id='question_type' className="select-field" value={relationStatus}   onChange={(e) => {setRelationStatus(e.target.value)}}>
                <option value="">{contact['relationStatus']}</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
          </div>
          <input type={"submit"} value="Update" className="registerBtn" />
          <div className='divider'/>
          <button className='register loginBtn'><Link className='link' to="/Contact">Contact</Link></button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateContact
