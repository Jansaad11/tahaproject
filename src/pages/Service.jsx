import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = () => {
    return (
        <>
            <Container fluid className='p-3'>
                <Row style={{fontSize: 13}}>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>

                        <Card >
                            
                            <Card.Img variant="top" src="images/service-images/Watch1.jpg" className="" style={{height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>Police</Card.Title>
                                <Card.Text>
                                   A line of fashion accessories known for their unique and bold designs.
                                </Card.Text>
                                <Button variant="danger">Out of order</Button>  <Button variant="warning">Category</Button>  <Button variant="info">Visit the site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                       <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                        <Card >
                            <Card.Img variant="top" src="images/service-images/Watch2.jpg" className="" style={{height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>Rolex</Card.Title>
                                <Card.Text>
                                    Waterproof cases, self-winding movements, and distinctive bracelets
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>  <Button variant="warning">Category</Button>  <Button variant="info">Visit the site</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                       <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>

                        <Card >
                            <Card.Img variant="top" src="images/service-images/Watch3.jpg" className="" style={{height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>Casio</Card.Title>
                                <Card.Text>
                                   Built to last, often featuring shock-resistant materials and water resistance.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>  <Button variant="warning">Category</Button>  <Button variant="info">Visit the site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                   <Row style={{fontSize: 13}} className="my-3">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>
                        <Card >
                            <Card.Img variant="top" src="images/service-images/Watch4.jpg" className="" style={{height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>G-Shock</Card.Title>
                                <Card.Text>
                                    Extreme durability and unique design,
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>  <Button variant="warning">Category</Button>  <Button variant="info">Visit the site</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                       <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>

                        <Card >
                            <Card.Img variant="top" src="images/service-images/Watch5.jpg" className="" style={{height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>Fossil</Card.Title>
                                <Card.Text>
                                    Trendy yet affordable timepieces
                                </Card.Text>
                                <Button variant="danger">Out of order</Button>  <Button variant="warning">Category</Button>  <Button variant="info">Visit the site</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                       <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} xxxl={4}>

                        <Card >
                            <Card.Img variant="top" src="images/service-images/Watch6.jpg" className="" style={{height: "200px"}}/>
                            <Card.Body>
                                <Card.Title>Casio</Card.Title>
                                <Card.Text>
                                     Built to last, often featuring shock-resistant materials and water resistance.
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>  <Button variant="warning" >Category</Button>  <Button variant="info">Visit the site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Service;