import React from 'react';
import './About.css';
import profile from '../../images/profile.png';

const About = () => {
    return (
        <div className='d-flex mx-auto profile-div'>


            <div className='text-center w-50 my-bio'>
                <p>Hi I'm <span className='name-style'>Mithila!!</span>
                    <br />
                    I am currently a student
                    I want to do a job as a junior developer, <br /> And I want to work at Google as a good developer in the future. <br /> Current Currently planning to find a job for myself as a junior developer.</p>
            </div>
            <div className='profile mt-5'>
                <img src={profile} alt="" />
            </div>

        </div>
    );
};

export default About;