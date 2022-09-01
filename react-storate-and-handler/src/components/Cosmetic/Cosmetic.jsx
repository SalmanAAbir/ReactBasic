import React from 'react';

const Cosmetic = (props) => {
    
    const {name, price,id} = props.cosmetic;
    return (
        <div>
            <h5>Buy This: {name}</h5>
            <p>Buy this only for :{price}</p>
            <p>id: {id}</p>
        </div>
    );
};

export default Cosmetic;