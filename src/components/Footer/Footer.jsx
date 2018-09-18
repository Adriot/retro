import React, { Component } from 'react';
import { Carousel,Image,Col,Row,Grid, Button} from 'react-bootstrap';
import {Newsletter} from '../../utils/server/api'

import {Link} from 'react-router-dom'
import './Footer.css'
import {colors} from '../../utils/constants/colors';
import Quicksand from 'typeface-quicksand'



const width = window.innerWidth;
const height = window.innerHeight;
class Footer extends Component {


    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);

        this.state = {

            email:'',
            errorMessage:'',
            userSubscribed: '',
            isLoading:false,


        };
    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value, errorMessage:''});
    }


    _subscribe = async () => {


        await this.setState({errorMessage:''})

        const {email} = this.state;

        if(!email) {
            return this.setState({
                errorMessage: 'Please enter your email'
            })

        }
        console.log('lhgdsjfshkhjkfhkjdghjfmngjhdgj')

        const data = await Newsletter.subscribe(email)
        if(data.error){

            return await this.setState({isLoading:false, errorMessage:data.message})
        }
        return await this.setState({isLoading:false, userSubscribed:true})
    }
    render() {

        const address = '9 Portswood Rd, V& A Waterfront\nCapetown\nWestern Cape\n8001\nSouth Africa';
        const email =  'Email:hello@parkupp.co.za'

        return (
            <div className='mainContainer'>
                <Grid>
                   <Row className='contactUsContainer'>

                           <Col xs={12} md={8} >
                               <code className='addressContainer'>
                                   <div>
                                       <h4 className='addressHeader'>Address:</h4>
                                       <div  className='address-linebreak' >{address}
                                       </div>
                                   </div>
                               </code>
                           </Col>

                           <Col xs={12} md={8} >
                               <code className='followusContainer'>
                                   <div style={styles.textFont}>
                                       <h4 className='followusHeader' >Follow us</h4>

                                       <div className='sociallinksContainer'>
                                           <div>
                                               <a href="https://www.facebook.com"><img src={require("../../assets/images/socialMedia/facebook.png")}  className='social-images' /> </a>
                                           </div>
                                           <div style={{paddingLeft:10}}>
                                               <a href="https://www.instagram.com/_parkupp/?hl=en"><img src={require("../../assets/images/socialMedia/instagram.png")} className='social-images' /></a>
                                           </div>
                                           <div style={{paddingLeft:10}}>
                                               <a href="https://www.twitter.com/_parkupp?lang=en"><img src={require("../../assets/images/socialMedia/twitter.png")}  className='social-images'  /></a>
                                           </div>
                                       </div>
                                       <div className='email-linebreak'>
                                           {email}
                                       </div>


                                       <div  className='newsletter'>
                                           <h4 className='newsletterHeader'>Our newsletter</h4>
                                               <div className='newsletterInputContainer' >
                                                   <div className="form-group">
                                                       <div className="form-group">
                                                           <input type="email"
                                                                  name='email'
                                                                  className="newsletterInput"
                                                                  placeholder="your email address"
                                                                  onChange={this.handleChange}
                                                           />

                                                       </div>
                                                   </div>
                                                   <Button onClick={()=>this._subscribe()} className="newsletterButton">
                                                       <span className="glyphicon glyphicon-menu-right"></span>
                                                   </Button>
                                                   <div>
                                                   {this.state.errorMessage?<p style={{color:'red', fontSize:10}}>{this.state.errorMessage}</p>:null}
                                                   {this.state.userSubscribed?<p  style={{color:'green',fontSize:10}}>You have successfully subscribed</p>:null}
                                                   </div>
                                               </div>
                                       </div>
                                   </div>
                               </code>
                           </Col>
                   </Row>
                   <Row >

                                   <Col lg={12} xs={12} className='linksContainer'>

                                   <Link to="/" className="emp1">
                                       <Col xs="3" md="1"  >

                                       </Col>
                                   </Link>
                                   <Link to="/" className="emp1" >
                                       <Col xs="3" md="1" >

                                       </Col>
                                   </Link>
                                   <Link to="/" className="emp1" s>
                                       <Col xs="3" md="1" >

                                       </Col>
                                   </Link>


                                       <Col xs="7" md="5" lg={2} className="b-3">
                                           <Link to="/TermsAndConditions">
                                                <h6 ><a href="#!">Terms & Conditions</a></h6>
                                           </Link>
                                       </Col>


                                       <Col xs="7" md="5" lg={2} className="b-3">
                                           <Link to="/PrivacyPolicy">
                                                <h6 ><a href="#!">Privacy Policy</a></h6>
                                           </Link>
                                       </Col>


                                       <Col xs="3" md="1" className="b-3">
                                           <Link to="/Careers">
                                                <h6 ><a href="#!">Careers</a></h6>
                                           </Link>
                                       </Col>

                                   <Link to="/" className="emp1" s>
                                       <Col xs="3" md="1">

                                       </Col>
                                   </Link>
                                   <Link to="/" className="emp1" s>
                                       <Col xs="3" md="1">

                                       </Col>
                                   </Link>
                                   </Col>



                   </Row>
                    <Row>
                        <Col md="4"lg={12}  className="copy">
                            <h6 className='copyRight'>@Copyright 2018 Parkupp. All rights reserved</h6>
                        </Col>
                    </Row>
                </Grid>

            </div>

        );
    }
}

export default Footer

const styles = {


}


