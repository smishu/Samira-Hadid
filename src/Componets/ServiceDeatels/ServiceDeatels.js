import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDeatels = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to Service: {serviceId}</h2>

        </div>
    );
};

export default ServiceDeatels;