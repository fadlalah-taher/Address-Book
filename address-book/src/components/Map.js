import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import '../App.css';
import { useState } from "react";
import AddContact from '../pages/AddContact';


const Map = ({latlng}) => {

    const [lat, setLat] = useState(33.884211);
    const [lag, setLag] = useState(35.492409);
   
    const [position, setPosition] = useState(null);
    console.log("Helllo");
    // Events
    const HandleClickMap = () =>{
        const map = useMapEvents({
            click(e){
                setPosition(e.latlng);
                map.flyTo(e.latlng)
                console.log(position.lat);
                console.log(position.lng);
                localStorage.setItem("coordinateLat", position.lat);
                localStorage.setItem("coordinateLng", position.lng);
            }
        })
        return position== null
        ? null 
        : <Marker position={position}></Marker>;
    };
    

    
  return (
    <div>
        {/* {position == null ? null : <> <p>"lat:" {position.lat} </p> <p>"lag:" {position.lng} </p>/ */}
        <MapContainer center={[lat, lag]} zoom={9}  scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <HandleClickMap />
            {/* <Marker position={[33.884211, 35.492409]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
        </MapContainer> 
        {/* <AddContact/> */}
    </div>
  )
}

export default Map
