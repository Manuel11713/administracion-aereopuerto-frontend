import React from 'react';

import './From.css';

const From = ({origin, setActModal, setShowModal}) => {
    
    return(
        <div className="container">
            <h2>From</h2>
            <input 
                className="input-from" 
                type="text" 
                style={{width:'100%'}}
                value={origin}

                onClick={()=>{setActModal(0);setShowModal(true);}}
            />
        </div>
    );
}

export default From;