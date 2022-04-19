
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLgoin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);


    const nagigat = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
        </div>

    }
    if (user || user1) {
        nagigat('/home');

    };
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '5px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '5px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto mb-2'>

                Google Sing In</button>

            <button
                onClick={() => signInWithGithub()}
                className='btn btn-info w-50 d-block mx-auto mb-2'>

                GitHub Sing In</button>


        </div >
    );
};

export default SocialLgoin;