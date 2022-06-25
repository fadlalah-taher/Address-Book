import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Contacts = () => {
    const [contacts, setContacts] = useState("");
    var userId = localStorage.getItem("access_token");
    console.log(userId);

    
  return (
    <div className='body'>
        <div className='search'>
            <input placeholder={"Name"}/>
            <input placeholder={"Email"}/>
            <input placeholder='relation'/>
        </div>
        <div className='contacts-container'>   
            <div>contact.fullname</div>
            <div> contact.email</div>
            <div>contact.number</div>
            <div>contact.relationStatus</div>
            <div>Location</div>  
        </div>
    </div>
  )
}

export default Contacts
