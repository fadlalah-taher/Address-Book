import React from 'react';
import { useState, useEffect } from 'react';

import { IconContext } from 'react-icons';
import {AiOutlineMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GiRelationshipBounds} from "react-icons/gi";

import axios from 'axios';

const Contact = () => {

    const [contact, setContact] = useState("");
    const fetchContact = async () => {
        // Display Contact
        try{
            await axios.post(`http://localhost:3000/contact/getContactById?id=62b5ba77b634c29f22cd7463`)//,{id: "62b5ba77b634c29f22cd7463"}
            .then(res =>{
                const data = res.data['results'][0];
                console.log(res.data['results'][0]);
                setContact(data);
                //const mydata = res.data;
                //setOptions(mydata['options']);
            })
        } catch(err){
            //console.log(err);
        }
    }


    useEffect(() => {
        fetchContact();
    }, []);
  return (
    <IconContext.Provider value={{color:'rgb(239, 79, 95)'}}>
    <div className='body'>
        <div className='contact-container'>
            <div>{contact.fullname}</div>
            <div><AiOutlineMail/>  {contact.email}</div>
            <div><BsFillTelephoneFill/>{contact.number}</div>
            <div><GiRelationshipBounds/>{contact.relationStatus}</div>
            <div>Location</div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Contact
