import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const navigetToServiceDeatel = id => {
        navigate(`/service/${id}`);

    };
    return (
        <div className='card'>

            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>{price}</h3>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigetToServiceDeatel(id)} variant="primary">Book:{name}</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;