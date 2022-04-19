import React, { useState } from 'react';


import { Carousel } from 'react-bootstrap';
import sider1 from '../../images/baner/sider1.jpg';
import sider2 from '../../images/baner/sider2.png';
import sider3 from '../../images/baner/sider3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className='w-75 mx-auto'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Photo Shoot</h3>
                        <p>A photo shoot is the process taken by creatives and models that results in a visual objective being obtained. An example is a model posing for a photographer at a studio or an outdoor location.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Short Film</h3>
                        <p>Every creature who is born on this gorgeous earth has to face some difficult situations to survive in mother nature. These problems can be called exams. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Social Media Ads</h3>
                        <p>
                            Social media today is simply online media that facilitates social interaction. There are numerous websites, channels and resources that allow advertisements to be distributed reaching millions of people worldwide.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};


export default Banner;

