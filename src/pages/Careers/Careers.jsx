import React, { Component } from 'react';
import './Careers.css'
import { Row, Col, Image,} from 'react-bootstrap';
import { Card, CardText, CardBody, CardTitle, Button, Fade, CardImg } from 'reactstrap';
import {Footer,SignUp,NavBar, HowItWorks,LandingComponent} from "../../components"
import InfiniteScroll from 'react-infinite-scroller';


import InstagramEmbed from 'react-instagram-embed';

import thumbsup_icon from '../../assets/images/thums-up-27.svg';


const careers = 'Are you a quirky individual, do you find fault in the default?'
const careers1 = 'Ring us up, share some ideas and a drink'



// const width = window.innerWidth;
// const height = window.innerHeight;

class Careers extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="careerCont" >

                    <div style={{height: 300, width: 200}}>
                        {/*<div className="nav-bar">*/}
                        {/*<NavBar/>*/}
                        {/*</div>*/}
                    </div>

                    <Col className='termsContainer'>
                        <Row className="termsRow1">
                            <Col md={9}>
                                <div className='privacyCard' style={styles.termsCard}>
                                    <div  className='privacyText'>
                                        <h1 className='careerHead' style={styles.aboutUsCardTitle}>Careers</h1>
                                        <br/>
                                        <CardText className='cardText' style={{marginTop: -50}}>

                                            <p>{careers}</p>
                                            <p>{careers1}</p>
                                        </CardText>
                                    </div>
                                </div>
                            </Col>

                            <Col md={2} className="termsLogo">
                                <Image src={require("../../assets/images/other/grad hat-37.svg")} />
                                <h1 className="careerLogoText"></h1>
                            </Col>

                        </Row>

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

export default Careers;

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
