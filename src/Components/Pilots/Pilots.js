import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Checkbox, Col, Row} from 'antd';

import './Pilots.css';

const Pilots = ({pilots,pilotsSelected, setPilotsSelected}) => {
    const [filledP, setFilled] = useState(false);

    const handleChange = (event) => {
        if(event.length===2)setFilled(true);
        else setFilled(false);
        setPilotsSelected(event);
    }
    return(
        <Checkbox.Group id="pilots-container" className="container" onChange={handleChange}>
            <Row>
                <Col>
                    <h2>Pilots</h2>
                </Col>
                {pilots.map(pilot=>{
                    return(
                        <Col span={24} key={pilot.id} >
                            <Checkbox value={pilot.id} disabled={(filledP && !pilotsSelected.includes(pilot.id)?true:false)}>
                                {pilot.name_pil}
                            </Checkbox>
                        </Col>
                    );
                })}
            </Row>
        </Checkbox.Group>
    );
};

const stateToProps = (state) => {
    return({
        pilots:state.pilots
    });
}

export default connect(stateToProps)(Pilots);