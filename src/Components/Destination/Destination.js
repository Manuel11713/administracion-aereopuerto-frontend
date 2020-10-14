import React from 'react';

import './Destination.css';

const Destination = ({destination, setActModal, setShowModal}) => { 
    return(
        <div className="container">
            <h2>Destination</h2>
            <input 
                className="input-destination" 
                type="text" 
                style={{width:'100%'}}
                value={destination}

                onClick={()=>{setActModal(1);setShowModal(true);}}
            />
        </div>
    );
}

export default Destination;