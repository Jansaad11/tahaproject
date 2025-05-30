import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";


const Contact = () => {

    return (
        <>

            <Container className="my-5">
                <Row className="mb-5 text-center">
                    <Col>
                        <h1>Contact Us</h1>
                        <p className="text-muted">Keep us updated! </p>
                    </Col>
                </Row>
                <Row className="mb-5 ">
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
                        <Card className="border-0 shadow-sm rounded-lg">
                            <Card.Body>
                                <Card.Title
                                    className="text-center text-primary mb-4">
                                    Get in touch
                                </Card.Title>
                                <Card.Text
                                    className="text-center text-muted mb-4">
                                    Fill out the form below and we will get back to you as soon as possible.
                                </Card.Text>

                                <Form>
                                    <Form.Group className="mb-3" controlid="formBasicemail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlid="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mt-4" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} xxxl={6}>
                        <Card className="border-0" >
                            <Card.Body>
                                <Card.Title className="text-center text-primary mb-4">
                                    Contact Information
                                </Card.Title>
                                <div className="d-flex align-item-center mb-5">
                                    <FaMapMarkerAlt
                                        className="text-primary"
                                        style={{ fontSize: "1.5rem", marginRight: "10px" }}
                                    />
                                    <Card.Text  >
                                        <strong>Address:</strong> Main University road, Karachi, Pakistan
                                    </Card.Text>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <FaPhone
                                        className="text-primary"
                                        style={{ fontSize: "1.5rem", marginRight: "10px" }}
                                    />
                                    <Card.Text>
                                        <strong>Phone:</strong> +92 785 8642
                                    </Card.Text>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <FaEnvelope
                                        className="text-primary"
                                        style={{ fontSize: "1.5rem", marginRight: "10px" }}
                                    />
                                    <Card.Text>
                                        <strong>Email:</strong> Watchvervepakistan@gmail.com
                                    </Card.Text>
                                </div>
                                <div className="d-flex align-item-center mb-5">
                                    <FaClock
                                        className="text-primary"
                                        style={{ fontSize: "1.5rem", marginRight: "10px" }}
                                    />
                                    <Card.Text>
                                        <strong>Business Hours:</strong> Mon to Fri: 9 AM to 6 PM
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>





        </>
    );
}

export default Contact;    