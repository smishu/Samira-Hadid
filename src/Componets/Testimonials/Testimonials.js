import React from 'react';
import './Testimonials.css'
import Card from 'react-bootstrap/Card'

const Testimonials = () => {
    return (
        <div className='Testimonials'>
            <h2>Client Testimonials</h2>

            <Card className="justify-content-center text-center border border-primary ms-5 mt-5 rounded mb-5 me-5 bg-primary">

                <Card.Body>
                    <Card.Title>"My website improved so much after
                        Samira did her magic."</Card.Title>
                    <Card.Text>
                        —  Neil Tran
                    </Card.Text>

                </Card.Body>


            </Card>
            <div className='d-flex justify-content-evenly mt5'>
                <div>
                    <Card border="light" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Estelle Darcy</Card.Title>
                            <Card.Text>
                                "Samira is very professional and easy to work with. Her work is exceptional."
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div>
                    <Card border="light" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Chad Gibbons</Card.Title>
                            <Card.Text>
                                "Samira knows what she's doing. She has helped our business so much."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;