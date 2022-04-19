import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init'
import SocialLgoin from '../SocialLgoin/SocialLgoin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigatLogin = () => {
        navigate('/login');

    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.form)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const passwor = event.target.passwor.value;
        createUserWithEmailAndPassword(email, passwor);
    }
    return (
        <div className='register-from mt-5'>
            <h2 className='text-center mt-4 mb-4'>Register now</h2>
            <form onSubmit={handleRegister}>

                <input type="text" placeholder='Inter Your Name' />
                <input type="email" name="" id="email" placeholder='Inter email' required />
                <input type="password" name="" id="passwor" placeholder='Inter Your Password' required />
                <input className='bg-primary' type="submit" value="Register" />
            </form>
            <p>Already have a accountr? <Link to='/Login' className='pe-auto text-decoration-none text-danger' onClick={navigatLogin}>Login Now</Link >
            </p>
            <SocialLgoin></SocialLgoin>

        </div>
    );
};

export default Register;