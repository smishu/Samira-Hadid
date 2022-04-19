import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init'
import SocialLgoin from '../SocialLgoin/SocialLgoin';
import { async } from '@firebase/util';

const Register = () => {
    const [accpet, setAccpet] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigatLogin = () => {
        navigate('/login');

    }
    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target.form)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const passwor = event.target.passwor.value;
        // const accept = event.target.trems.checked;
        await createUserWithEmailAndPassword(email, passwor);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');



    }
    return (
        <div className='register-from mt-5'>
            <h2 className='text-center mt-4 mb-4'>Register now</h2>
            <form onSubmit={handleRegister}>

                <input type="text" placeholder='Inter Your Name' />
                <input type="email" name="" id="email" placeholder='Inter email' required />
                <input type="password" name="" id="passwor" placeholder='Inter Your Password' required />
                <input
                    onClick={() => setAccpet(!accpet)} type="checkbox" name="trems" id="trems" />
                <label className={accpet ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="trems"> Accepted all Conditions</label>
                <input
                    disabled={!accpet}
                    className='w-50 bg-primary mt-2 text-white' type="submit" value="Register" />

            </form>
            <p>Already have a accountr? <Link to='/Login' className='pe-auto text-decoration-none text-danger' onClick={navigatLogin}>Login Now</Link >
            </p>
            <SocialLgoin></SocialLgoin>

        </div>
    );
};

export default Register;