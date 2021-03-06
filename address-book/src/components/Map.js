import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import '../App.css';
import { useState } from "react";


const Map = ({latLngg}) => {

    let latCoordinate = localStorage.getItem("lat-coordinates");
    let lngCoordinate = localStorage.getItem("lng-coordinates");

    let latMarker = parseFloat(latCoordinate);
    let lngMarker = parseFloat(lngCoordinate);
    const [lat, setLat] = useState(33.884211);
    const [lag, setLag] = useState(35.492409);
   
    const [position, setPosition] = useState(null);

    // Events
    const HandleClickMap = () =>{
        const map = useMapEvents({
            click(e){
                setPosition(e.latlng);
                map.flyTo(e.latlng);
                try{
                    console.log(position.lat);
                    console.log(position.lng);
                    localStorage.setItem("coordinateLat", position.lat);
                    localStorage.setItem("coordinateLng", position.lng);
                }catch(res){
                    console.log("Click");
                }  
            }
        })
        return position == null
        ? null 
        : <Marker position={position}></Marker>;
    };
    
    
  return (
    <div>
        <MapContainer center={[lat, lag]} zoom={4}  scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {latLngg?<HandleClickMap/>:""}
            {latLngg?"":<Marker position={[latMarker,lngMarker]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>}
        </MapContainer> 
    </div>
  )
}

export default Map
