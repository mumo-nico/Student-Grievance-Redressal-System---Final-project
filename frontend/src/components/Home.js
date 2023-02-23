import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/mmu2.jpg";
import img2 from "../images/mmu1.jpeg";
// import img3 from "../images/charusat2.jpg";

const Home = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    style={{height: "95vh"}}
                    />
                    <Carousel.Caption>
                        <h1 className="bg-light text-dark">MMU Student Grievance Redressal Portal</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    style={{height: "95vh"}}
                    />
                    <Carousel.Caption>
                        <h1 className="bg-light text-dark">MMU Internal Complaints Committee(ICC)</h1>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>

    )
}

export default Home
