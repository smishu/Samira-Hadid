import React from 'react';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p> <small>{description}</small></p>
            <button>Book:{name}</button>

        </div>
    );
};

export default Service;