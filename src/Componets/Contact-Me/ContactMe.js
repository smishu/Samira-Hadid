import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className='d-flex mx-auto'>
            <div className='text-center w-50 contact'>
                <h2>Get in touch.</h2>
                <p>Drop me a line or two if you want to work together!</p>
                <h3>smishu851@gmail.com</h3>
            </div>

            <div><img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1650277783~exp=1650278383~hmac=977e6439d1fde7d13d29110a8dee6214c8cfb85e02fc13f60f8b027cae02018e&w=740" className='w-70 ms-5' alt="" />
            </div>
        </div>
    );
};

export default ContactMe;