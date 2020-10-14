import React from 'react';
import {connect} from 'react-redux';

import {Select} from 'antd';
const {Option} = Select;

const Lobbies = ({lobbies,setLobbySelected}) => {

    const handleChange = (event) => {
        setLobbySelected(event);
    }

    return(
        <div className="container">
            <h2>Lobbies</h2>
            <Select style={{width:'100%'}} onChange={handleChange}>
                {lobbies.map(lobby=>{
                    return <Option key={lobby.id} value={lobby.id} >{lobby.name_lobby}</Option>
                })}
            </Select>
        </div>
    );
}

const stateToProps = state => {
    return({
        lobbies:state.lobbies
    });
}

export default connect(stateToProps)(Lobbies);