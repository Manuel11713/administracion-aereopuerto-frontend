import React from 'react';
import {connect} from 'react-redux';

import {Col, Row } from 'antd';

import './Flights.css';


const Flights = ({flights}) => {
    return(
        <div id="flights-container">
            <Row>
                <Col xs={24}><h2 style={{textAlign:'center'}}>Flights</h2></Col>
                {flights.map(flight =>{
                    return(
                        <Col xs={24} md={12} lg={8} >
                            <div className="container">
                                <p><span className="attribute">Origin: </span><span>{flight.origin}</span></p>
                                <p><span className="attribute">Destination: </span><span>{flight.destination}</span></p>
                                <p><span className="attribute">Date: </span><span>{flight.date}</span></p>
                                <p><span className="attribute">Hour: </span><span>{flight.hour}</span></p>
                                <p><span className="attribute">Lobby: </span><span>{flight.name_lobby}</span></p>
                                <p><span className="attribute">Hangar: </span><span>{flight.name_hangar}</span></p>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
const stateToProps= (state) => {
    return({
        flights:state.flights
    });
}
export default connect(stateToProps)(Flights);