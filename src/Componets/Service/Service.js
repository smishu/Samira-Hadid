import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className='card'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>{price}</h3>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Book:{name}</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;