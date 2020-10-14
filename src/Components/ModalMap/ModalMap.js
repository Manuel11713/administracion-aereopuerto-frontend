import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer, } from "react-leaflet"
import leaflet from 'leaflet';
import icon from './position.png';
import './ModalMap.css';

const icon_position = leaflet.icon({
    iconUrl: icon,
    iconSize:     [50, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const ModalMap = ({showModal, actModal, setShowModal, setOrigin, setDestination}) =>{
    const [initalPos, setPos] = useState([19.4324623,-99.1322989]);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            if(position.coords){
                const {latitude, longitude} = position.coords;
                setPos([latitude,longitude])
            }
        });
    });
    const moveMarker = event => {
        const {lat,lng} = event.latlng;
        if(actModal===0)setOrigin([lat,lng]);
        else setDestination([lat,lng]);

    }

    if(!showModal)return null;
    return(
        <div id="map-container">
            <span className="close-modal" onClick={()=>setShowModal(false)}>x</span>
            <Map center={initalPos} zoom={13} >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={initalPos} icon={icon_position} draggable={true} onmove={moveMarker}/>
            </Map>
        </div>
    )
}

export default ModalMap;