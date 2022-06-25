import React from 'react';
import { useState, useEffect } from 'react';

import { IconContext } from 'react-icons';
import {AiOutlineMail,AiFillDelete} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GiRelationshipBounds} from "react-icons/gi";

import axios from 'axios';

const Contact = () => {

    const [contact, setContact] = useState("");
    const fetchContact = async () => {
        // Display Contact
        try{
            await axios.post(`http://localhost:3000/contact/getContactById?id=62b59d8261567545e34ea3f9`)//,{id: "62b5ba77b634c29f22cd7463"}
            .then(res =>{
                const data = res.data['results'][0];
                console.log(res.data['results'][0]);
                setContact(data);
            })
        } catch(err){
            //console.log(err);
        }
    }

    // Delete Contact
    const deleteContact = async () => {
        try{
            await axios.post(`http://localhost:3000/contact/deleteContact?id=62b59d8261567545e34ea3f9`)//,{id: "62b5ba77b634c29f22cd7463"}
            .then(res =>{
                console.log(res);
                window.location = "/";
            })
        } catch(err){
            console.log(err);
        }
    }
  


    useEffect(() => {
        fetchContact();
    }, []);
  return (
    <IconContext.Provider value={{color:'rgb(239, 79, 95)'}}>
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
                    <div>Location</div>
                    <div ><AiFillDelete onClick={deleteContact} className="deleteIcon"/>Delete Contact</div>
                </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Contact
