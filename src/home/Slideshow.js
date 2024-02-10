import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './carousel1.jpg';
import carousel2 from './carousel2.jpg';
import carousel3 from './carousel3.jpg';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Slideshow = () => {
    return ( 
        <Container>
            <Carousel className="slide mb-5" >
                <Carousel.Item className='carousel-item'>
                    <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Welcome to 21st Century F1</h1>
                    <p>Home of the Internet Formula 1 Historians</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="text-end">
                    <h1>The Championship Positions</h1>
                    <p>Take a trip back in time to see champions past to present</p>
                    <NavLink to="/standings" className={"btn btn-lg btn-danger"} role={"button"}>Standings</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="text-start">
                    <h1>Experience Grand Prix Results</h1>
                    <p>See the ones who conquered each circuit year-by-year</p>
                    <NavLink to="/results" className={"btn btn-lg btn-danger"} role={"button"}>Results</NavLink>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}
 
export default Slideshow;

