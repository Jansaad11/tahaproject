import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const About = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <div>
                            <h1>WatchVerve.pk</h1>
                            <p>
                                The core mission of a Swiss watch company, broadly speaking, is
                                to produce and distribute high-quality, precision-engineered
                                timepieces while upholding the traditions of Swiss watchmaking
                                and providing exceptional customer service. This includes using
                                premium materials, employing skilled craftsmanship, and ensuring
                                the longevity and reliability of their products.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Our Mission</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Some companies are committed to maintaining the highest
                                    standards of the industry, offering a curated selection of
                                    designer watches and jewelry.Some aim to provide high-quality
                                    watches while making them accessible to a wider audience.
                                </Card.Text>
                                <Button varient="primary" href="#Read More">
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h5">
                                Our Branches Across The Pakistan
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}l>
                                        <Card>
                                            <Card.Img variant="top" src="/public/images/branch-images/b2.avif" height={"250px"} />
                                            <Card.Body>
                                                <Card.Title> SUPER MARKET ONE </Card.Title>
                                                <Card.Text>Address:Multan Bazar Chock </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                                        <Card>
                                            <Card.Img variant="top" src="/public/images/branch-images/b1.jpeg"  height={"250px"}/>
                                            <Card.Body>
                                                <Card.Title> SUPER MARKET TWO </Card.Title>
                                                <Card.Text>Address:karachi Sadar Market</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                                        <Card>
                                            <Card.Img variant="top" src="/public/images/branch-images/b3.avif" height={"254px"}/>
                                            <Card.Body>
                                                <Card.Title> SUPER MARKET THREE </Card.Title>
                                                <Card.Text> Address:lahore Gulberg Town </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;