import React, { Component } from 'react';
import './AboutUs.css'
import { Row, Col, Image,} from 'react-bootstrap';
import { Card, CardText, CardBody, CardTitle, Button, Fade, CardImg } from 'reactstrap';
import {Footer} from "../../components/Footer/index"
import {NavBar} from "../../components/NavBar/index"
import InfiniteScroll from 'react-infinite-scroller';


import InstagramEmbed from 'react-instagram-embed';

import thumbsup_icon from '../../assets/images/thums-up-27.svg';

const terms1 = 'We are a family of young, diverse, creative and somewhat quirky individuals who love solving global problems. For us it’s about serving others and providing value to both the user and the owners.'
const terms2 = 'We believe in simplicity, creativity and having an abundance mentality in all we do. Our business is built under the core principle that there is enough for all of us and if we all learn to share, people will not be in need of what others already have.'
const terms3 = 'What we do is fairly simple: a marketplace that connects owners with idle driveways, garages, parking facilities and unused parking spaces to drivers who need parking.'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        // console.log("Instagram Embed Error: ", error, info)
        this.setState({ hasError: true });
    }

    render() {
        try {
            // console.log("Trying to load the InstagramEmbed")
            if (this.state.hasError) {
                console.log("ErrorBoundary: We have an Instagram Embed Error, hence we are preventing this to return to the rendering");
                // return this.state;
                // this.componentDidCatch(this.state.hasError, "Error Loading Embed")
            }
        } catch (e) {
            console.log("Instagram Embed Error");
        }
        return this.props.children;
    }
}

class Terms extends Component {

    instagramEmbedOne (url) {
        try {
            return (
                <ErrorBoundary>
                    <InstagramEmbed
                        className='instagram-media'
                        url={url}
                        maxWidth={150}
                        hideCaption={true}
                        containerTagName='div'
                        protocol=''
                        // omitscript='true'
                    />
                </ErrorBoundary>
            );
        }
        catch (e) {
            console.log("Instagram Embed Error");
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="terms" >

                    <div style={{height: 300, width: 200}}>
                        {/*<div className="nav-bar">*/}
                            {/*<NavBar/>*/}
                        {/*</div>*/}
                    </div>

                    <Col className='termsContainer'>
                        <Row className="termsRow1">
                            <Col md={9}>
                                <div className='termsCard' style={styles.termsCard}>
                                    <div  className='termsText'>
                                        <h1 className='aboutUsHeader' style={styles.aboutUsCardTitle}>About Us</h1>
                                        <br/>
                                        <CardText className='cardText' style={{marginTop: -50}}>

                                            <p>{terms1}</p>
                                            <p>{terms2}</p>
                                            <p>{terms3}</p>

                                        </CardText>
                                    </div>
                                </div>
                            </Col>

                            <Col md={2} className="termsLogo">
                                <Image src={require("../../assets/images/AboutUs/thumbs-up-01.svg")} />
                                <h1 className="logoText"> Are you on the gram? Follow us and check out what's on the haps.</h1>
                            </Col>

                        </Row>

                        <div className="container" style={styles.instagram}>
                            <Col lg={4} md={5}></Col>
                            <Col lg={7} md={6}>
                                <Row>
                                    <Col md={6} className='instaLinks'>
                                        {this.instagramEmbedOne(
                                            'https://www.instagram.com/p/BlHqn_NFg51/?hl=en&taken-by=_parkupp'
                                        )}
                                    </Col>
                                    <Col md={6} className='instaLinks'>
                                        {this.instagramEmbedOne(
                                            'https://www.instagram.com/p/BlKOiM3BNYu/?taken-by=_parkupp'
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className='instaLinks'>
                                        {this.instagramEmbedOne(
                                            'https://www.instagram.com/p/BkjnrIuDHgt/?hl=en&taken-by=_parkupp'
                                        )}
                                    </Col>
                                    <Col md={6} className='instaLinks'>
                                        {this.instagramEmbedOne(
                                            'https://www.instagram.com/p/Bl5yOnNHmBR/?taken-by=_parkupp'
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className='instaLinks'>
                                        {this.instagramEmbedOne(
                                            'https://www.instagram.com/p/Bl2DdColxd3/?taken-by=_parkupp'
                                        )}
                                    </Col>
                                    <Col md={6} className='instaLinks'>
                                        {this.instagramEmbedOne(
                                            'https://www.instagram.com/p/Bl7u5lVljHL/?taken-by=_parkupp'
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </div>

                        <Row className='footerBorder'>
                            <Col>
                                <Footer/>
                            </Col>
                        </Row>
                    </Col>

                </div>

            </div>
        );
    }

}

export default Terms;

const styles = {
    termsContainer: {
        marginTop: 150,
    },
    aboutUsCol: {

    },
    termsCard: {
        backgroundColor: "#2bbbad",
        color: "#fff",
        // height: 850
    },
    aboutUsInCardRow: {
        marginLeft: 50,
        marginTop: 50,
        marginBottom: 50,
        marginRight: 50,
        textAlign: "justify"
    },
    aboutUsCardTitle: {
        marginBottom: 50
    },
    imageCol: {
        marginTop: 100
    },
    aboutUsInstagramColHeaderText: {
        marginTop: 30
    },
    logoText: {
        fontSize: 24,
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: -375,
        color: "#2bbbad",
        fontStyle: "strong"
    },
    thumbsup_icon: {
        height: 200,
        borderRightWidth: "1",
        borderRight: "solid",
        color: "#F8BB4B",
        position: "absolute",
        marginLeft: 100
    },
    instagram: {
        marginTop: 350,
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        paddingBottom: 0
    }
}
