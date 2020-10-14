import React from 'react';
import {connect} from 'react-redux';

import {Select} from 'antd';
const {Option} = Select;

const Hangars = ({hangars, setHangarSelected}) => {

    const handleChange = (event) => {
        setHangarSelected(event);
    }

    return(
        <div className="container">
            <h2>Hangars</h2>
            <Select style={{width:'100%'}} onChange={handleChange}>
                {hangars.map(hangar=>{
                    return <Option key={hangar.id} value={hangar.id} >{hangar.name_hangar}</Option>
                })}
            </Select>
        </div>
    );
}

const stateToProps = state => {
    return({
        hangars:state.hangars
    });
}

export default connect(stateToProps)(Hangars);