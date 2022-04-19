import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDeatels = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='mt-5'>Welcome to Service: {serviceId}</h2>
            <div className='text-center'>
                <Link to={"/Checkout"}>
                    <button className='btn btn-primary' >Peoceed Checkout</button>

                </Link ></div>

        </div>
    );
};

export default ServiceDeatels;