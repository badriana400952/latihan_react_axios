import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const Pormulir = () => {
    return (
        <div className='mt-3'>
            <Container >
                <Row >
                    <Col>
                        <h3>Tambah Data</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-5" controlId="nama">
                                <Form.Label>masukan nama makanan</Form.Label>
                                <Form.Control type="text" name="nama" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="deskripsi">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="harga">
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="number" name="Harga" />

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pormulir