import React from 'react';
import {connect} from 'react-redux';

import {Select} from 'antd';
const {Option} = Select;

const Airplanes = ({airplanes, setAirplaneSelected}) => {

    const handleChange = (event) => {
        setAirplaneSelected(event);
    }
    return(
        <div className="container">
            <h2>Airplanes</h2>
            <Select style={{width:'100%'}} onChange={handleChange}>
                {airplanes.map(airplane=>{
                    return <Option key={airplane.id} value={airplane.id} >{airplane.type}</Option>
                })}
            </Select>
        </div>
    );
}

const stateToProps = state => {
    return({
        airplanes:state.airplanes
    });
}

export default connect(stateToProps)(Airplanes);