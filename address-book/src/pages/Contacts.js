import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Contacts = () => {
    const [contacts, setContacts] = useState("");
    var userId = localStorage.getItem("access_token");
    console.log(userId);

    const fetchContacts = async () => {
        // Display Contacts
        try{
            await axios.post(`http://localhost:3000/contact/getContactsByUserId?id=${userId}`)
            .then(res =>{
                const data = res.data['results'];
                console.log(res.data['results']);
                setContacts(data);
            })
        } catch(err){
            //console.log(err);
        }
    }
function contactPage(e){
    localStorage.setItem("contact_id", e);
    window.location = "/Contact";
}

console.log(contacts);
    useEffect(() => {
        fetchContacts();
    }, []);
try{
  return (
    <div className='body'>
        <div className='search'>
            <input placeholder={"Name"}/>
            <input placeholder={"Email"}/>
            <input placeholder='relation'/>
            <button className='registerBtn'><Link className='link' to="/AddContact">Add Contact</Link></button>
        </div>
        {contacts.map((value, index) => {
            return(
                <div className='clickContact'  onClick={() => contactPage(value._id)}>
                    <div key={index} className='contacts-container'>   
                        <div>{value.fullname}</div>
                        <div>{value.email}</div>
                        <div>{value.number}</div>
                        <div>{value.relationStatus}</div>
                        <div>Location</div>  
                    </div>
                </div>
        )
        })}
    </div>
  )
    }catch(err){
        return (<div>Loading.......</div>)
     }
}

export default Contacts
