import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Pilots from '../Pilots/Pilots';
import Members from '../Members/Members';
import DateTime from '../Date_Time/Date_TIme';
import Lobbies from '../Lobbies/Lobbies';
import Hangars from '../Hangars/Hangars';
import Airplanes from '../Airplanes/Airplanes';
import ModalMap from '../ModalMap/ModalMap';
import From from '../From/From';
import Destination from '../Destination/Destination';
import Flights from '../Flights/Flights';

import {Button} from 'antd';
import './Home.css';
import 'leaflet/dist/leaflet.css';

const Home = ({flights, hangars, lobbies, setPilots, setMembers, setLobbies, setHangars, setAirplanes, setFlights}) =>{
    const [showModal, setShowModal] = useState(false); //Show map 

    /* actModal just can take 2 values, 0 means that modal was activated from "From" component and 1 means 
    that modal was activated from "Destination" Component */
    const [actModal, setActModal] = useState(0);

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    //states for post flight
    const [pilotsSelected, setPilotsSelected] = useState([]);
    const [membersSelected, setMembersSelected] = useState([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [lobbySelected, setLobbySelected] = useState(null);
    const [hangarSelected, setHangarSelected] = useState(null);
    const [airplaneSelected, setAirplaneSelected] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await Promise.all([axios.get('/pilots'), axios.get('/members'), axios.get('/lobbies'), 
                                            axios.get('/hangars'), axios.get('/airplanes'), axios.get('/flights')]);

            setPilots(res[0].data.pilots);
            setMembers(res[1].data.members);
            setLobbies(res[2].data.lobbies);
            setHangars(res[3].data.hangars);
            setAirplanes(res[4].data.airplanes);
            setFlights(res[5].data.flights);
        }
        fetchData();
    },[setPilots, setMembers, setLobbies, setHangars, setAirplanes, setFlights]);

    const makeFlight = async() => {
        if(pilotsSelected.length<2 || 
            membersSelected.length===0 ||
            date.length === 0 ||
            time.length === 0 || 
            !lobbySelected ||
            !hangarSelected ||
            !airplaneSelected ||
            !origin || 
            !destination
        ){
           return console.log("todos los datos campos deben ser llenados");
        }
        
        const data2Backend = {
            origin, 
            destination, 
            date, 
            airplane_id:airplaneSelected, 
            hour:time, 
            lobby_id:lobbySelected, 
            hangar_id:hangarSelected, 
            pilots:pilotsSelected, 
            members:membersSelected
        }
       
        
        const response = await axios.post('/flight',data2Backend);
        const {insertId} = response.data;
        let name_hangar = hangars.filter(hangar => hangar.id === hangarSelected)[0].name_hangar;
        let name_lobby = lobbies.filter(lobby => lobby.id === lobbySelected)[0].name_lobby;
        const newFlight = {
            date,
            destination,
            origin,
            hour: time,
            id: insertId,
            name_hangar,
            name_lobby
        }

        const updatedFlights = [...flights,newFlight];
        setFlights(updatedFlights);
    }
    return(
        <>
         <ModalMap showModal={showModal} actModal={actModal} setDestination={setDestination} setOrigin={setOrigin} setShowModal={setShowModal} />
         <div id="main-container">
            <div className="inputs">
               
                <Pilots pilotsSelected={pilotsSelected} setPilotsSelected={setPilotsSelected}/>
                <Members setMembersSelected={setMembersSelected} />
                <DateTime setDate={setDate} setTime={setTime}/>
                <Lobbies setLobbySelected={setLobbySelected}/>
                <Hangars setHangarSelected={setHangarSelected}/>
                <Airplanes setAirplaneSelected={setAirplaneSelected}/>
                <From origin={origin} setActModal={setActModal} setShowModal={setShowModal}/>
                <Destination destination={destination} setActModal={setActModal} setShowModal={setShowModal}/>
                <Button className="btn-schedule" type="primary" onClick={makeFlight}>Schedule Flight</Button>
            </div>
            <Flights/>
        </div> 
        </>
    );
}
const stateToProps = (state) => {
    return({
        flights:state.flights,
        hangars: state.hangars,
        lobbies: state.lobbies
    });
}
const dispatchToProps = (dispatch) => {
    return({
        setPilots(pilots){
            dispatch({
                type:"SET_PILOTS",
                pilots
            });
        },
        setMembers(members){
            dispatch({
                type:"SET_MEMBERS",
                members
            });
        },
        setLobbies(lobbies){
            dispatch({
                type:"SET_LOBBIES",
                lobbies
            });
        },
        setHangars(hangars){
            dispatch({
                type:"SET_HANGARS",
                hangars
            });
        },
        setFlights(flights){
            dispatch({
                type:"SET_FLIGHTS",
                flights
            });
        },
        setAirplanes(airplanes){
            dispatch({
                type:"SET_AIRPLANES",
                airplanes
            });
        }
    });
}

export default connect(stateToProps,dispatchToProps)(Home);