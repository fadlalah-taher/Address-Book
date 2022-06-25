import React from 'react'
import { IconContext } from 'react-icons';
import {AiOutlineMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GiRelationshipBounds} from "react-icons/gi"
const Contact = () => {
  return (
    <IconContext.Provider value={{color:'rgb(239, 79, 95)'}}>
    <div className='body'>
        <div className='contact-container'>
            <div>Fadlalah</div>
            <div><AiOutlineMail/>  fadel@gmail.com</div>
            <div><BsFillTelephoneFill/>76 333450</div>
            <div><GiRelationshipBounds/>Married</div>
            <div>Location</div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Contact
