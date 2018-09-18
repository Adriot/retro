import React, { Component } from 'react';
import './Terms.css'
import { Row, Col, Image,} from 'react-bootstrap';
import { Card, CardText, CardBody, CardTitle, Button, Fade, CardImg } from 'reactstrap';
import {Footer} from "../../components/Footer/index"
import {NavBar} from "../../components/NavBar/index"
import InfiniteScroll from 'react-infinite-scroller';


import InstagramEmbed from 'react-instagram-embed';

import thumbsup_icon from '../../assets/images/thums-up-27.svg';

const terms1 = 'Welcome to www.parkupp.co.za (“website”) and/or the ParkUpp mobile application (“App”). By using this website/App and the services offered by ParkUpp (Pty) Limited (registration number 2015/280619/07) (together with its parents, subsidiaries, affiliates, agents, representatives, consultants, employees, officers, and directors — collectively, “ParkUpp,”“we,” or “us”), you are agreeing to these legally binding Terms and Conditions (including the Privacy Policy) (collectively the “Terms”). Please read these Terms carefully and should you have enquiries, please contact us at info@parkupp.co.za.'
const terms2 = 'There may be legal notices on other areas of this website/App which relate to your use of the website/App and/or the services offered by ParkUpp, all of which will, together with these Terms, as may be amended from time to time by ParkUpp, govern your use of this website/App as well as the Services.'
const terms3 = 'ParkUpp is a mobile application that helps users find parking at certain shopping centres, retail parks, corporate office parks and other parking facilities (“Centres”) and pay for their parking tickets on their mobile app. The ParkUpp services include ticketless entry and exit to and from Centres, special offers (including vouchers and coupons) from retailers, brands or partners (or partner programs) in each Centre and free, discounted or extended parking (subject to conditions) (collectively the “Services”)'
const terms4 = 'These Terms apply to your use of the website/App. You must read these Terms carefully, and we recommend that you print and keep a copy for your future reference. By accessing, browsing, using or registering for our Services on the website/App, you confirm that you have read, understood and agree to these Terms in their entirety. If you do not agree to all of these Terms, you must not use this website/App or any Services related thereto.'
const terms5 = 'As an unregistered user you will be able to browse the Services offered on the website/App. However, when you choose to make use of the services offered on this website/App, you will be required to login with your username and password. If you do not have a username and password you will be required to register on the website or your mobile device. Registration requires filling in a short form which will create login details. Once the registration is complete and you are logged in you will then be able to make use of the Services. The information you provide must be accurate and complete. You may not impersonate anyone else, choose names that are offensive or that violate anyone’s rights. If you don’t follow these rules, we may cancel your account. Every person must register their own account and you are not entitled to permit anyone other than you to use your account. Charges that are incurred in relation to the Services must be paid by way of credit card or any other payment means as offered during the registration process. Your credit card details will be required. Purchases made via credit card will be verified, authenticated and stored by PayGate. PayGate is a certified Payment System Operator (PASA) & PCI DSS Level 1 Service Provider, ensuring payment data security utilising PCI compliant processes and technology. By registering an account or downloading the App, you expressly consent to ParkUpp collecting the personal information you provide, and to ParkUpp processing your personal information as required to provide the Services. This will be done in compliance with ParkUpp’s Privacy Policy. By registering on the website/App, you also expressly consent to receive direct marketing from ParkUpp about goods or services offered by ParkUpp and any other affiliate, or entity within the ParkUpp group of companies.'
const terms6 = 'You are responsible for maintaining the confidentiality of your password and account and any activities that occur under your account. We will assume that anyone using the website/App or transacting through your account is you. ParkUpp shall not be liable to any person for any loss or damage which may arise as a result of any failure by you to protect your password or account. You hereby indemnify ParkUpp from any loss, liability, cost or expense resulting directly or indirectly from any unauthorised person accessing your account, and waive any right to take action against ParkUpp, its directors, employees or affiliates in respect of any loss, liability, cost or expense resulting directly or indirectly from any unauthorised person accessing and/or using your account. If you find out that someone has used your account without your permission, you must report it immediately to: info@parkupp.co.za At any time should you wish to ascertain whether your vehicle has been registered to an account you may do so by providing suitable proof of ownership of the vehicle by email to info@parkupp.co.za.'
const terms7 = 'ParkUpp has taken all reasonable steps to ensure that all data described or depicted on this website/App and any other information displayed on the website/App is current, complete and accurate. However, content errors may occur. The information displayed on our website/App is provided without any guarantees, conditions or warrant as to its accuracy or completeness To the extent permitted by applicable law, ParkUpp disclaims all representations and warranties, express or implied, that content or information displayed in or on the website/App is accurate, complete, up-to- date and/or does not infringe the rights of any third party. Data provided by or through ParkUpp and/or the website/App is provided by users or third party services providers, and is not verified or audited by ParkUpp. The use of any content is forbidden in those places where the law does not allow this disclaimer to take full effect.'
const terms8 = '* modify or withdraw, temporarily or permanently, the website/App (or any part of) with or without notice to you and you confirm that we shall not be liable to you or any third party for any modification to or withdrawal of the website/App; and/or'
const terms9 = '* change these Terms from time to time, and your continued use of the website/App (or any part of) following such change shall be deemed to be your acceptance of such change. It is your responsibility to check regularly to determine whether the Terms have been changed. If you do not agree to any change to the Terms then you must immediately stop using the website/App; and/or'
const terms10 = '* change the Services from time to time. We will use our reasonable endeavours to maintain the website/App. You will not be eligible for any compensation because you cannot use any part of the website/App or because of a failure, suspension or withdrawal of all or part of the website/App due to circumstances beyond our control'
const terms11 = 'These Terms supplement (and are in addition to) the terms of our Privacy Policy. Our Privacy Policy explains what personal information we collect about you when you use the website/App, and you can view our Privacy Policy online by going to www.ParkUpp.com. Please note that when you agree to these Terms you shall be deemed also to have read, understood and agreed to our Privacy Policy in its entirety. '
const terms12 = 'Copyright and all intellectual property rights in relation to the website/App, including in all materials, texts, drawings, graphics, logos, icons and any data made available on the website/App (“materials”) are owned by ParkUpp or its content suppliers and therefore protected by both South African and international intellectual property laws. Accordingly, any unauthorised copying, reproduction, retransmission, distribution, dissemination, sale, publication, broadcast or other circulation or exploitation of such material or any component thereof will constitute an infringement of such copyright and other intellectual property rights. You may only use the materials or any component thereof for your information purposes when access thereto is permitted by the content supplier. The trademarks, names, logos and service marks (collectively “trademarks”) displayed on this website/App are trademarks of ParkUpp. Nothing contained on this website/App should be taken as granting any licence or right to use any trademark without the prior written permission of ParkUpp. We grant you a limited license to access the website/App, which is non-exclusive and non-transferrable. This license does not permit any of the following:'
const terms13 = 'External links are provided as part of our Service and for your convenience, but they are beyond the control of ParkUpp and no representation is made by ParkUpp as to their content, source or any risks that you may incur through linking to the other website. Use or reliance on any external links provided is at your own risk and we accept no liability in respect of such use. When visiting external links you must refer to the external terms and conditions of use. You may not link to this website/App, in any manner, or frame any content of this website/App in any other manner or otherwise use the content without the express prior written permission of ParkUpp.'
const terms14 = 'You are not entitled to permit anyone other than you to use your account. Only you and ParkUpp shall be entitled to enforce these Terms. No third party shall be entitled to enforce any of these Terms. ParkUpp shall not be liable to you or any third party for any loss or damage of whatsoever nature in the event that you make use of the Services offered through the website/App. You hereby indemnify ParkUpp from any loss, liability, cost or expense resulting directly or indirectly from your use of the website/App and/or Services available thereto, and waive any right to take action against ParkUpp in respect of any loss, liability, cost or expense resulting directly or indirectly from any unauthorised person accessing your account, or from any authorised access to your account. By accessing and using the website/App, you warrant and represent to ParkUpp that you are legally entitled to do so and to provide the data required. You further warrant that all the details you have given are true and complete and that you are legally capable of concluding this transaction.cYou warrant that you are at least 18 years of age. "Deep-linking", "embedding" or using analogous technology is strictly prohibited. Unauthorized use of the website/App and/or the materials contained on the website/App may violate applicable copyright, trademark or other intellectual property laws or other laws. We may in our sole discretion at any time suspend or terminate your access to the website/App and/or the Services without prior notice to you and without the need to give you reasons for such termination. We will not be liable to you or any third party for doing so.'
const terms15 = 'You agree to comply with all applicable laws, statutes, ordinances and regulations pertaining to your access to and/or use of the website/App the Services, and/or use of your customer profile, or any part of these, and/or your posting of content and material (including text, files, images and photographs).'
const terms16 = 'A cookie is a small file of letters and numbers that we place on your computer or mobile device. These cookies allow us to distinguish you from other users of our website/App, which helps us to provide you with a good experience when you browse our website/App and also allows us to improve our website/App. The website/App may use cookie and tracking technology (collectively “Cookies”) depending on the features offered. Cookies are useful for gathering information such as browser type and operating system, tracking the number of visitors to the website/App, and understanding how visitors use the website/App. Cookies can also help customize the website for visitors. Personal information cannot be collected via Cookies; however, if you previously provided personally identifiable information, Cookies may be tied to such information. Aggregate Cookie and tracking information may be shared with third parties. We have the right, but not the obligation, to monitor any activity and content associated with the website/App. We may investigate any reported violation of these Terms or omplaints and take any action that we deem appropriate (which may include, but is not limited to, issuing warnings, suspending, terminating or attaching conditions to your access and/or removing any materials from the website).'
const terms17 = 'All transactions in relation to the Services must be made by way of credit card and will be processed in South African Rands. Applicable taxes will be charged. Pricing for parking is based on the rates charged by each Centre and may vary from place to place and from time to time. You hereby agree to pay such charges. ParkUpp reserves the right to change pricing at any time without prior notice. We accept MasterCard and Visa credit cards and certain debit cards as updated from time to time. For more information, please contact our Support Team at support@parkupp.co.za.'
const terms18 = 'Credit card transactions will be processed for ParkUpp by PayGate who are the approved payment gateway for Big 4 Banks in South Africa. PayGate is a certified Payment System Operator (PASA) & PCI DSS Level 1 Service Provider, ensuring payment data security utilising PCI compliant processes and technology. The merchant has access to credit card details and securely stores it.'
const terms19 = 'Parkupp makes no representations or warranties of any kind, express or implied, as to the operation of the website/app or the information, content, materials, and/ or products and services available via the website/app. You expressly agree that your use of this website/app is at your sole risk. To the full extent permissible by applicable law we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the website/app, its servers, or e-mail sent from us or third parties are free of viruses or other harmful components. we will not be liable in any way for any damages of any kind arising from the use of the website/app or the provision of the services, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. Neither parkupp, nor our directors, employees, officers, suppliers, service providers, subsidiaries or parent companies, make any representations or warranties of any kind (including but not limited to express or implied representations or warranties, as to the operation of the website/app or the information, content or materials, and/or in relaiton the services ). You expressly agree that your use of the website/app and the services is at your sole risk. In no event shall our directors, employees, officers, service providers, parent companies or subsidiaries be liable for lost profits or any special, incidental or consequential damages arising out of or in connection with the use of the website/app, our services or the terms (howsoever arising, including but not limited to negligence).'
const terms20 =  'In addition to any other indemnities provided in these terms, you hereby unconditionally and irrevocably indemnify Parkupp, our affiliated companies, officers, agents, directors and employees and agree to hold us free from all loss, damages, claims and/or costs, of whatsoever nature suffered or incurred by us or instituted against us for infringement of any right, whether the claim or action arises from delict or contract, or any infringement of whatsoever nature, arising out of or pursuant to the exercise by you of your rights or the fulfilment or breach by you of any of your obligations under these terms or any other requirements that we may impose from time to time, including, without limitation, all loss, damages, claims and/or costs suffered or incurred by us or instituted against us as a direct or indirect result of your use of the site, and such indemnity shall extend to the reasonable costs that may be incurred by us in defending any action instituted against us. Your use of the website/app, the services and/or your customer profile is entirely at your own risk and you assume full responsibility and risk of loss resulting from the use thereof. We do not accept liability that may arise in connection therewith. Parkupp, our affiliates, shareholders, directors, agents, consultants or employees shall not be liable for any damages whatsoever, including without limitation any direct, indirect, special, incidental, consequential or punitive damages, howsoever arising (whether in an action arising out of contract, statute, delict or otherwise) related to the access to and/or use of, or the inability to access or use, the website/app, any personalised item and/or any linked website/app, the content thereof, any functionality thereof or information contained therein, even if we know or should reasonably have known or are expressly advised thereof. It is specifically recorded that in no event shall our directors, employees, officers, service providers, parent companies or subsidiaries be liable to you for any damage to your motor vehicle or theft thereof.'
const terms21 = 'The address for service for all purposes relating to these Terms including the giving of any notice, the payment of any sum, the serving of any process, is the physical address set out above. ParkUpp shall be entitled from time to time, by giving notice to you, to vary its physical address for service to any other physical address. ParkUpp shall be entitled to vary its address for service by notice on this website, and accordingly you undertake to ensure you have the correct service address.'
const terms22 = 'These Terms and our Privacy Policy, set out the entire agreement between you and us related to the subject matter hereof, and supersedes any and all prior terms, conditions, warranties and/or representations to the fullest extent permitted by law.'
const terms23 = 'ParkUpp shall be entitled to make use of all the data you provide for purposes of providing the services offered through the website. ParkUpp shall be entitled to cede, assign and delegate all or any of its rights and obligations in terms of these Terms. All provisions of these Terms are, irrespective of the manner in which they have been grouped together or linked grammatically, severable from each other. Any provision of these Terms which is or becomes unenforceable in any jurisdiction, whether due to voidness, invalidity, illegality, unlawfulness or for any reason whatsoever,shall, in such jurisdiction only and only to the extent that it is so unenforceable, be excluded from the agreement between us and the remaining provisions of these  Terms shall remain in full force and effect Should ParkUpp be prevented from fulfilling any of its obligations to you as a result of any event outside the control of ParkUpp, then those obligations shall be deemed to have been suspended to the extent that, and for as long as, ParkUpp is so prevented from fulfilling them and your corresponding obligations shall be suspended to the corresponding event. In the event that such event continues for more than 14 days after it has first occurred, then ParkUpp shall be entitled (but not obliged) to terminate all of its rights and obligations in terms of or arising out of these Terms by giving notice to you. An event outside of the control of ParkUpp shall mean any event or circumstance whatsoever which is not within the reasonable control of ParkUpp including, but not limited to, vis major, casus fortuitus, any act of God, strike, theft, riots, explosion, insurrection or other similar disorder, war (whether declared or not) or military operations, the downtime of any external telecommunications line, power failure, international restrictions, any requirement or any international authority, any requirement of any government or other competent local authority, any court order, export control or shortage or transport facilities These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa without giving effect to any principles of conflict of law. You hereby consent to exclusive jurisdiction of the High Court of South Africa in respect of any disputes arising in connection with the services referred to herein, or the Terms or any matter related to or in connection therewith. For purposes of calculating any time periods GMT +2 shall apply.'
const terms24 = 'ParkUpp (Proprietary) Limited will not process any refunds on your credit card account unless it can be proved that neither you nor the cardholder (where applicable) authorised this transaction or you have been incorrectly charged.'






// const width = window.innerWidth;
// const height = window.innerHeight;

class Terms extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="termsConditions" >

	                <div style={{height: 300, width: 200}}>
		                <div className="nav-bar">

		                </div>
		            </div>

                    <Col className='termsContainer'>
                        <Row className="termsRow1">
                            <Col md={9}>
                                <div className='termsCard' style={styles.termsCard}>
                                    <div  className='termsText'>
                                        <h1 className='termsHeaderText' style={styles.aboutUsCardTitle}>Terms and Conditions</h1>
                                        <br/>
                                        <CardText className='cardText' style={{marginTop: -50}}>

                                            <p>{terms1}</p>
                                            <p>{terms2}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>About ParkUpp</h4>
                                            <p 	style={{marginTop: -40}}>{terms3}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Acceptance</h4>
                                            <p 	style={{marginTop: -40}}>{terms4}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Website/App Registration</h4>
                                            <p 	style={{marginTop: -40}}>{terms5}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Password / Account Security</h4>
                                            <p style={{marginTop: -40}}>{terms6}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Accuracy of Content</h4>
                                            <p style={{marginTop: -40}}>{terms7}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Our Rights</h4>
                                            <p style={{marginTop: -40}}>We reserve the right to:</p>
                                            <p >{terms8}</p>
                                            <p >{terms9}</p>
                                            <p >{terms10}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Your Personal Information</h4>
                                            <p style={{marginTop: -40}}>{terms11}</p>
                                            <h6 className='addressline'> Disclosures required Full name: ParkUpp Pty Ltd'</h6>
                                            <h6 className='addressline' >Physical address: 9 Portswood Rd, V& A Waterfront, Cape Town, 8001, Western Cape, South Africa</h6>
                                            <h6 className='addressline'>Website address: www.parkupp.co.za</h6>
                                            <h6 className='addressline'>Registration number: 2016/322146/07</h6>
                                            <h6 className='addressline'>Country of incorporation: South Africa</h6><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Copyright and Intellectual Property Rights</h4>
                                            <p style={{marginTop: -40}}>{terms12}</p>
                                            <h6 className='addressline'>* resale or commercial use of the website/App or its contents;</h6>
                                            <h6 className='addressline' >* collection and use of any service listings, descriptions, or prices;</h6>
                                            <h6 className='addressline'>* collection and use of the content for any use other than your own personal use;</h6>
                                            <h6 className='addressline'>* derivative use of the website/App or its contents; any downloading or copying of account information for the benefit of another merchant; or</h6>
                                            <h6 className='addressline'>* any use of data mining, robots, or similar data gathering and extraction tools.</h6><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Links to other websites</h4>
                                            <p style={{marginTop: -40}}>{terms13}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Use of Website/App</h4>
                                            <p style={{marginTop: -40}}>{terms14}</p>
                                            <h5 className='addressline'>You agree not to:</h5>
                                            <h6 className='addressline'>* access or attempt to access any part of the website/App by any means other than through the interface provided by us.</h6>
                                            <h6 className='addressline' >* the website/App and the content provided therein may not be copied, reproduced, republished, uploaded, posted, transmitted or distributed. Please note
                                                further that deep-linking, embedding or using analogous technology is strictly prohibited.</h6>
                                            <h6 className='addressline'>* frame or utilising framing techniques to enclose any trade mark, logo, or other proprietary information (including images, text, page layout, or form)
                                                belonging to us and our affiliates without our prior written consent.     </h6>
                                            <h6 className='addressline'>* attempt to circumvent, disable or interfere with the security related features of the website/App or features that prevent or restrict use of copying any
                                                content or enforce limitations on the use of the website/App or content therein.   </h6>
                                            <p >{terms15}</p>
                                            <h5 className='addressline'> You may not yourself or through a third party –</h5>
                                            <h5 className='addressline'> Use the website/App for harmful, unlawful or illegal purposes, including, without limitation to:</h5>
                                            <h6 className='addressline'> * impersonate any other person or use a false or unauthorised name so as to create a false identity and/or e-mail address or to misrepresent the
                                                origin or identity of any communications;</h6>
                                            <h6 className='addressline'> * collect, harvest or otherwise obtain Personal Information, (including personal information as defined in POPI), relating to other users; </h6>
                                            <h6 className='addressline' >* create, store and/or send unsolicited commercial communications; or conduct any fraudulent activity including any “pyramid scheme”, “ponzi scheme” or “chain letter”.</h6>
                                            <h5 className='addressline'>Use any customer profile in a manner so as to advertise or promote your or any third party’s products or services and/or impersonate another person;</h5>
                                            <h5 className='addressline'>Copy (other than for backup, archival or disaster recovery purposes), reproduce, translate, adapt, vary, modify, distribute, lease, license, sub-license,
                                                encumber or in any other way deal with any portion of the website for any reason and in any manner, unless it is consistent with the intent and purpose of these Terms;</h5>



                                            <h5 className='addressline' >Decompile, disassemble or reverse engineer any portion of the website/App;</h5>
                                            <h5 className='addressline'>Collect service listings, descriptions or other information displayed on the website/App;</h5>
                                            <h5 className='addressline'>Write and/or develop any derivative of the website/App or any other software program based on the website/App;</h5>


                                            <h5 className='addressline' >Adapt, modify or enhance the website/App. In the event of a user effecting any adaptation(s), modification(s) or enhancement(s) to the website/App in breach of this clause,
                                                such adaptation(s), modification(s) and enhancement(s) hereby vest exclusively in us and you hereby assign all rights in and to, and waive any and all moral rights in
                                                and to, such adaptation(s), modification(s) and enhancement(s), which assignment we accept;</h5>
                                            <h5 className='addressline'>Without our prior written consent, provide, disclose, divulge or make available to or permit the use of or give access to the website/App by persons other than you;</h5>
                                            <h5 className='addressline'>Remove any identification, trade mark, copyright or other notices from the website and/or any personalised item, it being specifically recorded, acknowledged and agreed
                                                that trademarks proprietary to or licensed to us will automatically be incorporated in all customer profiles;</h5>
                                            <h5 className='addressline' >Establish a hyperlink, frame, metatag or similar reference, whether electronically or otherwise any customer profile in a manner so as to advertise (collectively “linking”), to the website/App or any subsidiary pages;</h5>
                                            <h5 className='addressline'>Use the website/App and/or any personalised item to transfer files that contain viruses, Trojans, bombs, time-locks, phishing programmes or other harmful programmes;
                                                and/or penetrate or attempt to penetrate the website’s security measures.</h5><br/>

                                            <h4 style={styles.aboutUsCardTitle}>Cookie / Tracking Technology</h4>
                                            <p style={{marginTop: -40}}>{terms16}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Payment and Pricing</h4>
                                            <p style={{marginTop: -40}}>{terms17}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Security Policy</h4>
                                            <p style={{marginTop: -40}}>{terms18}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Warranties</h4>
                                            <p style={{marginTop: -40}}>{terms19}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Indemnity</h4>
                                            <p style={{marginTop: -40}}>{terms20}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Address for Service</h4>
                                            <p style={{marginTop: -40}}>{terms21}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Entire Agreement</h4>
                                            <p style={{marginTop: -40}}>{terms22}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Other legal notices</h4>
                                            <p style={{marginTop: -40}}>{terms23}</p><br/>
                                            <h4 style={styles.aboutUsCardTitle}>Online Refund Policy</h4>
                                            <p style={{marginTop: -40}}>{terms24}</p>




                                        </CardText>
                                    </div>
                                </div>
                            </Col>

                            <Col md={2} className="termsLogo">
                                <Image src={require("../../assets/images/other/terms-icon-33.svg")} />
                                <h1 className="logoText"> Long and boring but important stuff</h1>
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

export default Terms;

const styles = {
    termsContainer: {
    	marginTop: 150,   		
    },
    aboutUsCol: {

    },
    termsCard: {	    	
        backgroundColor: "#2bbbad",
        color: "#fff"
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
    }
}