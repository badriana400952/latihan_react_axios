import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const View = (props) => {
    return (

        <div className='mt-4'>

            <Col md={4}>
                <Card  className="shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://placeimg.com/340/380/nature" />

                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            <p>{props.body}</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default View;