import React from "react";
import {Col, Container, Row, Carousel} from 'react-bootstrap';

const Home = () => {
    return (
        <>
       <Container fluid className="px-0">
        <Row>
            <Col>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img 
                    className='d-block w-100'
                    src="./images/slider-images/W1.jpg"height="645px" />
                </Carousel.Item>

                  <Carousel.Item interval={1000}>
                    <img 
                    className='d-block w-100'
                    src="./images/slider-images/W2.jpg" height="645px"/>
                </Carousel.Item>

                  <Carousel.Item interval={1000}>
                    <img 
                    className='d-block w-100'
                    src="./images/slider-images/W3.jpg" height="645px"/>
                </Carousel.Item>

                  <Carousel.Item interval={1000}>
                    <img 
                    className='d-block w-100'
                    src="./images/slider-images/W4.jpg" height="645px"/>
                </Carousel.Item>

                  <Carousel.Item interval={1000}>
                    <img 
                    className='d-block w-100'
                    src="./images/slider-images/W5.jpg" height="645px"/>
                </Carousel.Item>

  

           
            </Carousel>
            </Col>
        </Row>
       </Container>
        </>
    );
};

export default Home;