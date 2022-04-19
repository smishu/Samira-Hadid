import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLgoin from '../SocialLgoin/SocialLgoin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nagigat = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        Navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    const navigatRegister = event => {
        nagigat('/register');
    }
    return (
        <div className='container d-block w-50 mx-auto'>
            <h2 className='text-primary mt-5'>Loging Your acounts</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" id='gmail' required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" id='passwords' required />
                    <Form.Text className="text-muted">
                        Inter your Password
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>You are not Register <Link to='/Register' className='pe-auto text-decoration-none text-danger' onClick={navigatRegister}>Register Now</Link >
            </p>
            <SocialLgoin></SocialLgoin>


        </div>
    );
};

export default Login;