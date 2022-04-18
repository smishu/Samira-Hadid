import React from 'react';
import Notfoundpic from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>404</h2>
            <img className='w-100' src={Notfoundpic} alt="" />

        </div>
    );
};

export default NotFound;