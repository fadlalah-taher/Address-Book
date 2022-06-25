import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Contacts = () => {
    const [contacts, setContacts] = useState("");
    var userId = localStorage.getItem("access_token");
    console.log(userId);

    const fetchContacts = async () => {
        // Display Contact
        try{
            await axios.post(`http://localhost:3000/contact/getContactsByUserId?id=${userId}`)//,{id: "62b5ba77b634c29f22cd7463"}
            .then(res =>{
                const data = res.data['results'];
                console.log(res.data['results']);
                setContacts(data);
            })
        } catch(err){
            //console.log(err);
        }
    }


console.log(contacts);
    useEffect(() => {
        fetchContacts();
    }, []);
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
