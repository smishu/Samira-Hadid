import React from 'react';


const SocialLgoin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '5px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '5px' }} className='w-50 bg-primary'></div>
            </div>
            <button className='btn btn-info w-50 d-block mx-auto mb-2'>

                Google Sing In</button>
            <button className='btn btn-info w-50 d-block mx-auto mb-2'>

                Facebook Sing In</button>
            <button className='btn btn-info w-50 d-block mx-auto mb-2'>

                GitHub Sing In</button>


        </div>
    );
};

export default SocialLgoin;