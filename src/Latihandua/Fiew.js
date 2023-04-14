import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const View = (props) => {
    return (
        <Col md={3} className="mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://placeimg.com/240/280/people" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <p>{props.email}</p>
                        <p>{props.body}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
    )
}
export default View