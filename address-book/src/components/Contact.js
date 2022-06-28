import React from 'react';
import { useState, useEffect } from 'react';

import { IconContext } from 'react-icons';
import {AiOutlineMail,AiFillDelete} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GiRelationshipBounds} from "react-icons/gi";
import { FcGlobe, FcInternal,FcLeft } from "react-icons/fc";

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
            await axios.post(`http://localhost:3000/contact/deleteContact?id=${contactId}`)
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

    // Calling Update 
    const updateContact = async () =>{
        let updateTrue = true;
        alert("Select what to change");
        let what_to_change = prompt("Enter N to change the contact name || E to change the contact Email || P to change the contact Phone number || R to change the contact RelationShip status");
        if(what_to_change === "N" || what_to_change === "n"){
            let new_name = prompt("Chosse new name");
            var info = {"fullname" : new_name};
            alert(`Name has been updated to ${new_name}`);
        }
        else if(what_to_change === "E" || what_to_change === "e"){
            let new_email = prompt("Chosse new email");
            var info = {"email" : new_email};
            alert(`Email has been updated to ${new_email}`);
        }
        else if(what_to_change === "P" || what_to_change === "p"){
            let new_phone_number = prompt("Chosse new phone number");
            var info = {"number" : new_phone_number};
            alert(`Phone number has been updated to ${new_phone_number}`);
        }
        else if(what_to_change === "R" || what_to_change === "r"){
            let new_status = prompt("Chosse new status");
            var info = {"relationStatus" : new_status};
            alert(`RelationShip Status  has been updated to ${new_status}`);
        }
        else{
            updateTrue = false;
            alert("Nothing Change!");
        }

        // Update 
        if(updateTrue){
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
            }catch(err){
                console.log(err);
            }
        }
    }
    
    
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
                    <button className='updateBtn' onClick={updateContact}>Update</button>
                </div>
                <div className='contact-right'>
                    <div ><AiFillDelete size={"100px"}  onClick={deleteContact} className="deleteIcon"/></div>
                    <div><FcInternal className='direction' size={"100px"}/><FcGlobe className='globalIcon' size={"100px"}/> <FcInternal className='direction' size={"100px"}/> </div> 
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
