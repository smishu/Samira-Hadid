import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="baner-top ">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4654.jpg?t=st=1650207923~exp=1650208523~hmac=2f4c7ba5fc97d32e383cc211017950e6c9f3ad9dce004366b731450fa4b8b007&w=1060"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/stylish-woman-leather-coat-black-hat-demonstrate-winter-fashion-trends-white_273443-4934.jpg?w=1060"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/full-length-photo-modern-woman-with-wavy-black-hair-fashionable-bright-yellow-outfit-dark-shoes-looking-into-camera_197531-28794.jpg?t=st=1650209771~exp=1650210371~hmac=6727547db1418ea2163449bd62e9aa93ad00d282789ea4619067d24700e196c4&w=1060"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <Services></Services>

        </div>
    );
};

export default Home;