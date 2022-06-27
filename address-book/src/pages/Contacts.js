import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Contacts = () => {
    var [user_id, setUserId] = useState("");
    var [contacts, setContacts] = useState("");
    var [filter, setFilter] = useState("");

    var userId = localStorage.getItem("access_token");
    const filter_input = useRef();

    const fetchContacts = async () => {
        // Display Contacts
        try{
            await axios.post(`http://localhost:3000/contact/getContactsByUserId?id=${userId}`)
            .then(res =>{
                const data = res.data['results'];
                // console.log(res.data['results']);
                setContacts(data);
                setFilter(data);
                setUserId(user_id);
            })
        } catch(err){
            //console.log(err);
        }
    }
function contactPage(e){
    localStorage.setItem("contact_id", e);
    window.location = "/Contact";
}
function filterContacts(){
    var temp =[];
    setFilter([]);
    for(var contact of contacts){
        if(
        contact.fullname.toLowerCase().includes(filter_input.current.value.toLowerCase())
        || contact.email.toLowerCase().includes(filter_input.current.value.toLowerCase())
        || contact.number.toLowerCase().includes(filter_input.current.value.toLowerCase())
        || contact.relationStatus.toLowerCase().includes(filter_input.current.value.toLowerCase())
        ){
            if(contact in temp){}else{
                temp[temp.length] = contact;
                setFilter(temp);
            }
        }
    }
}


    useEffect(() => {
        fetchContacts();
    }, [user_id]);

try{
  return (
    <>
    <Navbar name={"Logout"} redirect={"/"}/>
    <div className='body-contacts'>
        <div className='search'>
            <input ref={filter_input} onInput={() =>{filterContacts()}} placeholder={"Search"}/>
            <button className='registerBtn'><Link className='link' to="/AddContact">Add Contact</Link></button>
        </div>
        {filter.map((value, index) => {
            return(
                <div className='clickContact' key={index}  onClick={() => contactPage(value._id)}>
                    <div key={index} className='contacts-container'>   
                        <div>{value.fullname}</div>
                        <div>✉️ {value.email}</div>
                        <div>📞 {value.number}</div>
                        <div>👥 {value.relationStatus}</div>
                        <div>🗺️</div>  
                    </div>
                </div>
        )
        })}
    </div>
    </>
  )
    }catch(err){ 
        return (<div>Loading.......</div>)
     }
}

export default Contacts
