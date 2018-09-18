import React, { Component } from 'react';
import { Carousel,Image,Col,Row,Grid} from 'react-bootstrap';
import './LandingComponent.css'
import {Footer,SignUp,NavBar, HowItWorks} from "../../components"
import MainCarousel from "../MainCarousel/MainCarousel"
import {colors} from "../../utils/constants/colors";
import ReactPlayer from 'react-player'



const width = window.innerWidth;
const height = window.innerHeight;
class LandingComponent extends Component {


    render() {
        return (
            <div>

                <MainCarousel/>
                <div className='overlay_signUp'>
                    <SignUp/>
                </div>
            </div>

        );
    }
}

export default LandingComponent


const styles = {

    carouselImage: {
        width,
        height
    }

}
