import React, { Component } from 'react';
import {Grid, Row,FormGroup,FormControl,Form,HelpBlock ,Col,Button} from 'react-bootstrap';
import Avatar from 'react-avatar';
import Carousel from 'nuka-carousel';

import { Link } from 'react-router-dom'

import './Review.css'
import {colors} from '../../utils/constants/colors';
import Quicksand from 'typeface-quicksand'
import {User} from '../../utils/server/api'
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners';






export default function Review(props){
    return(


        <Row>

            <Col lg={2} className='avatarContainer'>
                <Avatar  src={require("../../assets/images/reviews/review-profile-31.svg")} round unstyled={true}/>
            </Col>
            <Col lg={7} className='reviewsText'>
                <Row>
                    <Col lg={3}  >

                        <h2 className='reviewsHeader' >Reviews</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className='actualReview' >
                       Hello, you have been handpicked to be the first to view our site. We are waiting for your reviews.
                    </Col>
                    <Row>
                        <Col lg={6} className='reviewerName'>
                            ParkUpp Team
                        </Col>
                    </Row>
                </Row>


            </Col>

        </Row>




    )
}


