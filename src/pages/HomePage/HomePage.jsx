import React, { Component } from 'react';
import {Image,Col,Row,Grid} from 'react-bootstrap';
import './HomePage.css'
import Carousel from 'nuka-carousel';
import {Footer,SignUp,NavBar, HowItWorks,LandingComponent,Review, PagingDots} from "../../components/"
import {colors} from "../../utils/constants/colors";
import ReactPlayer from 'react-player'
import AliceCarousel from 'react-alice-carousel';





const width = window.innerWidth;
const height = window.innerHeight;
class HomePage extends Component {


    render() {
        return (
            <div>
                <LandingComponent/>
                <Grid className='reviewGrid'>
                    <Row>
                        <Col lg={8} xs={12} className='carousel-container' >
                            <Row>
                            <Carousel autoplay={true} renderCenterRightControls={false} renderBottomCenterControls={props => <PagingDots {...props} />} renderCenterLeftControls={false}>

                                <Review name={'Thabang Sithole'}/>
                                <Review name={'Thabang Sithole'}/>
                                <Review name={'Thabang Sithole'}/>
                            </Carousel>
                            </Row>
                            <Row>
                                <HowItWorks/>

                            </Row>
                        </Col>
                        <Col className= 'app-container' lg={4} xs={12}>
                            <Row>
                                <Col className='phoneSpace' lg={4} xs={12} >
                                    <Row>
                                        <Col className='appHeader' lg={2}  xs={12} >
                                            <h2 className='appContHeader' style={{fontFamily:'Quicksand'}}>App</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='textContHeader' lg={2} xs={12} >
                                            <h4 className='textHeader' style={{fontFamily:'Quicksand'}}>Watch this space</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='app-gif-container' lg={2} xs={12} >
                                            <Image className='app-gif-image' src={require("../../assets/images/other/animated-gif 2.gif")}/>
                                        </Col>
                                    </Row>


                                </Col>

                            </Row>
                            <Row className='emptyRow'>
                                <Col className='emptySpace' lg={4} xs={12}>



                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <Grid className='videoGrid'>
                    <Row>
                        <Col className='justColumn' lg={8} xs={12}>

                            <Col className='emptyC1' lg={2}>

                            </Col>
                            <Col className='textColum1' lg={8}  xs={12}>
                                Are you one of the people who enjoys learning through visuals? Watch our “how it works” video for more information. Sit back, relax and enjoy.

                            </Col>
                            <Col className='emptyC2' lg={1} >

                            </Col>

                        </Col>
                        <Col className='eyeColumn' lg={4} xs={12}>
                            <Image className='eyeImage' />

                        </Col>

                    </Row>
                    <Row>
                        <Col  className='video-container'>

                            <ReactPlayer
                                url='https://youtube.com/watch?v=T4wz18PKp2U'
                                className='react-player'
                                loop
                                width='100%'
                                height='60%'
                                style={{alignItems:'center', justifyContent:'center'}}
                            />

                        </Col>
                    </Row>

                </Grid>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>

            </div>

        );
    }
}

export default HomePage


const styles = {

    carouselImage: {
        width,
        height
    }

}
