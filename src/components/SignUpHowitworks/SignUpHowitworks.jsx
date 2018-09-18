import React, { Component } from 'react';
import {Grid, Row,FormGroup,FormControl,Form,HelpBlock ,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './SignUpHowitworks.css'
import {colors} from '../../utils/constants/colors';
import Quicksand from 'typeface-quicksand'
import {User} from '../../utils/server/api'
import { css } from 'react-emotion';
import { BeatLoader } from 'react-spinners';



const override = css`
    display: block;
    margin: 0 auto;
    border-color: orange;
`;

const width = window.innerWidth;
const height = window.innerHeight;
class SignUp extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            name:'',
            email:'',
            password:'',
            isChecked: false,
            ownerCheckBox:false,
            driverCheckbox:false,
            termsCheckbox:false,
            errorMessage:'',
            isLoading:false,
            userAdded:false,
            drivers:'',
            owners:'',

        };
    }

    async componentWillReceiveProps(){
        const data = await User.getUserCounts();
        await this.setState({owners:data.owners, drivers: data.drivers})
    }
    async componentDidMount(){
        const data = await User.getUserCounts();
        await this.setState({owners:data.owners, drivers: data.drivers})
    }


    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value, errorMessage:''});
    }

    toggleCheck = async (type)=> {
        if(type==='owner') {
            return await this.setState({ownerCheckBox: !this.state.ownerCheckBox, errorMessage:''});
        }else if(type==='driver') {
            return await this.setState({driverCheckbox: !this.state.driverCheckbox, errorMessage:''});
        }
        return await this.setState({termsCheckbox: !this.state.termsCheckbox,errorMessage:''});
    }




    _signUp = async () => {
        const {name, email, password, termsCheckbox,ownerCheckBox, driverCheckbox} = this.state
        const regEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPassword  = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if(!name){
            return this.setState({
                errorMessage: 'Please enter your name'
            })
        }else if(!email){
            return this.setState({
                errorMessage: 'Please enter your email'
            })
        }else if (regEmail.test(email) === false) {
            console.log('running')
            return this.setState({
                errorMessage: 'Entered email is invalid'
            })
        }else if (!password){
            return this.setState({
                errorMessage: 'Please enter password'
            })
        }else if (regPassword.test(password.trim()) === false){
            return this.setState({
                errorMessage: 'Password must contain at least 6 characters and a number'
            })
        }else if (!driverCheckbox && !ownerCheckBox){
            return this.setState({
                errorMessage: 'Please specify if you need parking or you have one'
            })
        }else if (!termsCheckbox){
            return this.setState({
                errorMessage: 'Please accept the terms and conditions before signing up'
            })
        }else{

            let userType;

            if(driverCheckbox && ownerCheckBox){
                userType = 'both'
            }else if(driverCheckbox && !ownerCheckBox){
                userType = 'driver'
            }else if(!driverCheckbox && ownerCheckBox){
                userType = 'owner'
            }
            await this.setState({isLoading:true})
            const data = await User.signup(name, email, password, userType)
            if(data.error){

                return await this.setState({isLoading:false, errorMessage:data.message})
            }
            return await this.setState({isLoading:false, userAdded:true, name:'', email:'', password:''})




        }

    }
    render() {
        const {name, email, password,ownerCheckBox, driverCheckbox, errorMessage,termsCheckbox,isLoading,userAdded, drivers, owners} = this.state
        const message =  'We connect owners with idle driveways, garages \n parking facilities and unused parking spaces to\ndrivers who need parking.\n\nBe one of the first 1000 people to sign up and stand\na chance to WIN a car service voucher worth R3000'
        const successMessage =  'You are officially part of the parkupp family \n We will keep you updated with the progress of the site and app'

        return (

            <Grid className='signUpHowGrid'>

                    <div>
                        <Row>
                            <Col style={{fontSize: 24}} lg={8} sm={11} mdOffset={2}>
                                Sign me up
                            </Col>
                        </Row>
                    </div>
                <Row style={{marginTop: 20}}>
                    <Col className='field' md={8} mdOffset={2}  >
                        <Form>
                            <FormGroup
                                controlId="name"

                            >
                                <FormControl
                                    autocomplete="off"
                                    style={styles.inputStyle}
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder='Your name'
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className='field'  md={8} mdOffset={2}>
                        <Form>
                            <FormGroup
                                controlId="email"
                            >
                                <FormControl
                                    autocomplete="off"
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    style={styles.inputStyle}
                                    placeholder='example@gmail.com'
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col className='field'  md={8} mdOffset={2}>
                        <Form>
                            <FormGroup>
                                <FormControl
                                    autocomplete="off"
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    style={styles.inputStyle}
                                    type="password"
                                    placeholder='Your password'
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col className='field'  md={4} mdOffset={2}>
                        <Form>
                            <FormGroup className='checkboxAlignHow'>
                                <Col>
                                            <span onClick={()=>this.toggleCheck('owner')}>
                                             <input type="checkbox" checked={ownerCheckBox} />
                                               <span></span>
                                            </span>
                                    <label  className='checkFont1' style={styles.labelStyle}>I have parking</label>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col className='field' md={4}>
                        <Form>
                            <FormGroup  className='checkboxAlignHow'>
                                <Col>
                                            <span onClick={()=>this.toggleCheck('driver')}>
                                             <input type="checkbox" checked={driverCheckbox} />
                                               <span></span>
                                            </span>
                                    <label className='checkFont1' style={styles.labelStyle}>I need parking</label>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className='field'  lg={8} md={4} mdOffset={2}>
                        <Form>
                            <FormGroup style={{marginLeft: 15}}>
                                <Col>
                                           <span onClick={()=>this.toggleCheck('terms')}>
                                             <input type="checkbox" checked={termsCheckbox} />
                                               <span></span>
                                           </span>

                                    <label className='checkFont1' style={styles.labelStyle}>I have read the  <Link to="/TermsAndConditions" style={{fontFamily:'Quicksand', color:colors.WHITE}}>terms and conditions </Link></label>


                                </Col>
                            </FormGroup>
                        </Form>

                        {errorMessage? <label style={styles.errorMessageStyle}>{errorMessage}</label>:null}
                        {userAdded? <label style={styles.sucessMessage}>Thank you for signing up</label>:null}
                    </Col>
                </Row>


                <Row>
                    <Col  className = 'signUpBtn' style={{color:colors.WHITE}} md={4} mdOffset={2}>
                        {isLoading ? <BeatLoader
                                className={override}
                                sizeUnit={"px"}
                                size={20}
                                color={colors.GREEN_200}
                                loading={isLoading}
                            />:
                            <Button  onClick={this._signUp}>Sign me up</Button>}
                    </Col>
                </Row>
            </Grid>

        );
    }
}

export default SignUp


const styles = {

    container: {},
    helloWorldText: {
        fontFamily: 'Quicksand',
        color: colors.WHITE

    },
    thankYouText: {
        fontFamily: 'Quicksand',
        color: colors.ORANGE_400

    },
    infoText: {
        fontFamily: 'Quicksand',
        color: colors.WHITE,
        whiteSpace: 'pre-line'
    },
    jumbotronStyle: {
        height,
        backgroundColor: '#001533',
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: colors.GREEN_200,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRight: 0,
        fontStyle: 'italic',
        color: colors.WHITE
    },
    inputStyle2: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: colors.GREEN_200,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRight: 0,
        fontStyle: 'italic',
        color: colors.WHITE
    },
    jumbotronStyleContents: {
        width: width * 0.3,
        marginLeft: 100,
        height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomInput: {
        flexDirection: 'row-reverse'
    },
    checkboxStyle: {
        marginLeft: 200,

    },
    checkboxContainer: {
        width: width * 0.3,


    },
    textColor: {

        paddingLeft: 15,
        fontFamily: 'Quicksand',
        fontSize: 12,
        color: colors.WHITE
    },
    labelStyle: {
        paddingLeft: 10,
        fontFamily: 'Quicksand',
        color: colors.WHITE,
    },
    errorMessageStyle: {
        marginLeft: 15,
        fontFamily: 'Quicksand',
        fontSize: 14,
        color: 'red',
        marginBottom: 20
    },
    sucessMessage: {
        paddingLeft: 10,

        fontSize: 16,
        color: colors.ORANGE_400,
    }
}