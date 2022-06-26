import React from 'react';
import { useState, useEffect } from 'react';

import { IconContext } from 'react-icons';
import {AiOutlineMail,AiFillDelete} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GiRelationshipBounds} from "react-icons/gi";

import axios from 'axios';
import Navbar from './Navbar';
import Map from './Map';

const Contact = () => {
    
    const [contact, setContact] = useState("");
    let contactId = localStorage.getItem("contact_id");

    const fetchContact = async () => {
        // Display Contact
        try{
            await axios.post(`http://localhost:3000/contact/getContactById?id=${contactId}`)//,{id: "62b5ba77b634c29f22cd7463"}
            .then(res =>{
                const data = res.data['results'][0];
                console.log(res.data['results'][0]);
                setContact(data);
                localStorage.setItem("lat-coordinates", res.data['results'][0]['location']["coordinates"][0]);
                localStorage.setItem("lng-coordinates", res.data['results'][0]['location']["coordinates"][1]);
            })
        } catch(err){
            //console.log(err);
        }
    }

    // Delete Contact
    const deleteContact = async () => {
        try{
            await axios.post(`http://localhost:3000/contact/deleteContact?id=${contactId}`)//,{id: "62b5ba77b634c29f22cd7463"}
            .then(res =>{
                console.log(res);
                window.location = "/Contacts";
            })
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchContact();
    }, []);

  return (
    <>
    <IconContext.Provider value={{color:'rgb(239, 79, 95)'}}>
    <Navbar name={"Contacts"} redirect={"/Contacts"}/>
    <div className='body'>
        <div className='contact'>
            <div className='contact-container'>
                <div className='contact-left'>
                    <div>{contact.fullname}</div>
                    <div><AiOutlineMail/>  {contact.email}</div>
                    <div><BsFillTelephoneFill/>{contact.number}</div>
                    <div><GiRelationshipBounds/>{contact.relationStatus}</div>
                </div>
                <div className='contact-right'>
                    <div>Location Below</div>
                    <div ><AiFillDelete onClick={deleteContact} className="deleteIcon"/>Delete Contact</div>
                </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>
    <Map latLngg={false} />
    </>
  )
}

export default Contact
