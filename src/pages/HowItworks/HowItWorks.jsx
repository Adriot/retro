import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import {SignUpHowitworks,Footer} from "../../components/"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'react-bootstrap';

import './HowItWorks.css'

export default class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            mobile: false
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        if (this.state.width <= 576) {
            this.setState({mobile: true})
        }
    }

    render() {
        return(

            <div className="how-it-works" style={{"max-width": "100%"}}>

                <div className="car-pic" >
                    {/*<div className="nav-bar">*/}
                        {/*<NavBar/>*/}
                    {/*</div>*/}
                </div>

                <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>

                <div className="howItWorks-container">

                    <Row style={{}}>
                        <Col>
                            <h2 className="header" >Shared parking for a global community</h2>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 50}}>
                        <Col className="content" md={3}>
                            <div >
                                <img src={require("../../assets/images/HowItWorks/discover parking.svg")} style={{height: 100}} />
                                <h3 style={{marginTop: 30}}><strong>Discover Parking</strong></h3>
                                <p className={'fontsize'}>
                                    Stop driving around tirelessly finding parking. Search on the app and book your time
                                </p>
                            </div>
                        </Col>
                        <Col className="content" md={3} mdOffset={1}>
                            <div>
                                <img src={require("../../assets/images/HowItWorks/share culture.svg")} style={{height: 100}} />
                                <h3 style={{marginTop: 30}}><strong>Share Culture</strong></h3>
                                <p className={'fontsize'}>
                                    ParkUpp lets you list your
                                    driveway so drivers can
                                    find parking anywhere in
                                    the city
                                </p>
                            </div>
                        </Col>
                        <Col className="content" md={3} mdOffset={1}>
                            <div>
                                <img src={require("../../assets/images/HowItWorks/pay easy.svg")} style={{height: 100}} />
                                <h3 style={{marginTop: 30}}><strong>Pay Easy</strong></h3>
                                <p className={'fontsize'}>
                                    Users can find their spot
                                    and pay for it through the
                                    app and cut out any cash
                                    exchange
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop: 70}}>
                        <Col>
                            <h2 className="header2">ParkUpp works on trust</h2>
                        </Col>
                    </Row>


                    <Row style={{marginTop: 50}}>
                        <Col className="content" md={3}>
                            <div >
                                <img src={require("../../assets/images/HowItWorks/support.svg")} style={{height: 100}} />
                                <h3 style={{marginTop: 30}}><strong>Vetting</strong></h3>
                                <p className={'fontsize'}>
                                    Owners of driveways and parking lots including drivers
                                    are vetted through detailed profiles,
                                    peer-to-peer rating and confirmed verification
                                </p>
                            </div>
                        </Col>
                        <Col className="content" md={3} mdOffset={1}>
                            <div>
                                <img src={require("../../assets/images/HowItWorks/sharing with trust.svg")} style={{height: 100}} />
                                <h3 style={{marginTop: 30}}><strong>Sharing with Trust</strong></h3>
                                <p className={'fontsize'}>
                                    ParkUpp verifies each user and owner profile while
                                    payments are made through a secure payment gateway
                                </p>
                            </div>
                        </Col>
                        <Col className="content" md={3} mdOffset={1}>
                            <div>
                                <img src={require("../../assets/images/HowItWorks/support.svg")} style={{height: 100}} />
                                <h3 style={{marginTop: 30}}><strong>Support</strong></h3>
                                <p className={'fontsize'}>
                                    We have a support team
                                    ready to help you around the clock.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="sign-up">
                        <Col lg={11} xs={12} style={{height: 200}}>
                            <SignUpHowitworks />
                        </Col>
                    </Row>

                </div>

                <Row className='footerBorder'>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>


            </div>
        )}
}