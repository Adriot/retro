import React, { Component } from 'react';
import { Carousel,CarouselItem,Image, Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './MainCarousel.css'
import {colors} from '../../utils/constants/colors';
import Quicksand from 'typeface-quicksand'
import NavBar from "../NavBar/NavBar";
import SignUp from "../SignUp/SignUp";



const width = window.innerWidth;
const height = window.innerHeight;
class MainCarousel extends Component {


    render() {
        return (
            <div>
                <div className='image-carousel'>
                <Carousel interval={10000} controls={false}>
                    <Carousel.Item>
                        <img  className='image1' />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className='image2' />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className='image3' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className='image4' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  className='image5' />
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className='image-overlay'>

                </div>
                <div className='form-overlay'>

                </div>
            </div>

        );
    }
}

export default MainCarousel


const styles = {

    carouselImage: {
        width,
        height
    }

}