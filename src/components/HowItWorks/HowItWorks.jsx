import React, { Component } from 'react';
import { Image,Col,Row,Grid} from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from 'react-router-dom'
import './HowItWorks.css'
import {colors} from '../../utils/constants/colors';
import Quicksand from 'typeface-quicksand'



const width = window.innerWidth;
const height = window.innerHeight;
class HowItWorks extends Component {


    constructor(props, context) {
        super(props, context);


        this.state = {



        };
    }



    render() {


        const listMessage ='List your parking space for free by \nadding details, pictures and rate. Parkers will then book your parking and pay securely. ParkUpp takes a 5 - 10% commission for every booking made.'
        const discoverMessage = 'Search for parking in your preferred location, view more details about your parking, make a booking and pay. You will receive your token which you will present to the parking owner for access.'


        return (
            <Row>


                <Col lg={2} className='emptyContainer'>
                </Col>


                <Col lg={8} className='howitworks-text'>
                    <Row>
                        <Col lg={7} >
                            <h2 className='howitworkHeader'>How it works</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7} className='howitworkContent'>
                            <CarouselProvider naturalSlideWidth={300}
                                                               naturalSlideHeight={150}
                                                               totalSlides={2}>
                                <Slider>
                                    <Slide index={0}>
                                        <p className='typeofService'>Discover parking</p>

                                        <Col lg={6} className='howitworks_C'>
                                            {discoverMessage}

                                        </Col>

                                    </Slide>
                                    <Slide index={1}> <p className='typeofService'>List parking</p>

                                        <Col lg={6} className='howitworks_C' >
                                            {listMessage}

                                        </Col>
                                    </Slide>
                                </Slider>
                                <Row>
                                    <Link to="/HowItWorks">
                                            <button type="submit" className="leanMore">

                                                    <p>Learn more</p>


                                            </button>
                                    </Link>
                                </Row>
                                <Row className='indicators'>
                                    <DotGroup/>
                                </Row>
                                <Row className='control-Buttons'>
                                    <ButtonBack className='toggleButton'><span className="glyphicon glyphicon-menu-left"/></ButtonBack>
                                    <ButtonNext className='toggleButton'><span className="glyphicon glyphicon-menu-right"/></ButtonNext>
                                </Row>

                            </CarouselProvider>

                        </Col>

                    </Row>


                </Col>



            </Row>
        );
    }
}

export default HowItWorks

const styles = {

    textFont: {
        fontFamily:'Quicksand'
    }

}


