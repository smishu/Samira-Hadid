import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigatLogin = () => {
        navigate('/login');

    }
    const handleRegister = event => {
        event.preventDefule();
        console.log(event.target.value);
    }
    return (
        <div className='register-from'>
            <h2 className='text-center mt-4 mb-4'>Register now</h2>
            <form onSubmit={handleRegister}>

                <input type="text" placeholder='Inter Your Name' />
                <input type="email" name="" id="email" placeholder='Inter email' required />
                <input type="password" name="" id="passwor" placeholder='Inter Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have a accountr? <Link to='/Login' className='pe-auto text-decoration-none text-danger' onClick={navigatLogin}>Login Now</Link >
            </p>

        </div>
    );
};

export default Register;