import React, { Component } from 'react';
import './Privacy.css'
import { Row, Col, Image,} from 'react-bootstrap';
import { Card, CardText, CardBody, CardTitle, Button, Fade, CardImg } from 'reactstrap';
import {Footer} from "../../components/Footer/index"
import {NavBar} from "../../components/NavBar/index"
import InfiniteScroll from 'react-infinite-scroller';


import InstagramEmbed from 'react-instagram-embed';

import thumbsup_icon from '../../assets/images/thums-up-27.svg';

const privacy1 = 'Welcome to www.parkupp.co.za (“website”) and/or the ParkUpp mobile application (“App”). By using this website/App and the services offered by ParkUpp (Pty) Limited (registration number 2015/280619/07) (together with its parents, subsidiaries, affiliates, agents, representatives, consultants, employees, officers, and directors — collectively, “ParkUpp,”“we,” or “us”), you are agreeing to these legally binding privacy and Conditions (including the Privacy Policy) (collectively the “privacy”). Please read these privacy carefully and should you have enquiries, please contact us at info@parkupp.co.za.'
const privacy2 = 'There may be legal notices on other areas of this website/App which relate to your use of the website/App and/or the services offered by ParkUpp, all of which will, together with these privacy, as may be amended from time to time by ParkUpp, govern your use of this website/App as well as the Services.'
const privacy3 = 'ParkUpp is a mobile application that helps users find parking at certain shopping centres, retail parks, corporate office parks and other parking facilities (“Centres”) and pay for their parking tickets on their mobile app. The ParkUpp services include ticketless entry and exit to and from Centres, special offers (including vouchers and coupons) from retailers, brands or partners (or partner programs) in each Centre and free, discounted or extended parking (subject to conditions) (collectively the “Services”)'
const privacy4 = 'These privacy apply to your use of the website/App. You must read these privacy carefully, and we recommend that you print and keep a copy for your future reference. By accessing, browsing, using or registering for our Services on the website/App, you confirm that you have read, understood and agree to these privacy in their entirety. If you do not agree to all of these privacy, you must not use this website/App or any Services related thereto.'
const privacy5 = 'As an unregistered user you will be able to browse the Services offered on the website/App. However, when you choose to make use of the services offered on this website/App, you will be required to login with your username and password. If you do not have a username and password you will be required to register on the website or your mobile device. Registration requires filling in a short form which will create login details. Once the registration is complete and you are logged in you will then be able to make use of the Services. The information you provide must be accurate and complete. You may not impersonate anyone else, choose names that are offensive or that violate anyone’s rights. If you don’t follow these rules, we may cancel your account. Every person must register their own account and you are not entitled to permit anyone other than you to use your account. Charges that are incurred in relation to the Services must be paid by way of credit card or any other payment means as offered during the registration process. Your credit card details will be required. Purchases made via credit card will be verified, authenticated and stored by PayGate. PayGate is a certified Payment System Operator (PASA) & PCI DSS Level 1 Service Provider, ensuring payment data security utilising PCI compliant processes and technology. By registering an account or downloading the App, you expressly consent to ParkUpp collecting the personal information you provide, and to ParkUpp processing your personal information as required to provide the Services. This will be done in compliance with ParkUpp’s Privacy Policy. By registering on the website/App, you also expressly consent to receive direct marketing from ParkUpp about goods or services offered by ParkUpp and any other affiliate, or entity within the ParkUpp group of companies.'
const privacy6 = 'You are responsible for maintaining the confidentiality of your password and account and any activities that occur under your account. We will assume that anyone using the website/App or transacting through your account is you. ParkUpp shall not be liable to any person for any loss or damage which may arise as a result of any failure by you to protect your password or account. You hereby indemnify ParkUpp from any loss, liability, cost or expense resulting directly or indirectly from any unauthorised person accessing your account, and waive any right to take action against ParkUpp, its directors, employees or affiliates in respect of any loss, liability, cost or expense resulting directly or indirectly from any unauthorised person accessing and/or using your account. If you find out that someone has used your account without your permission, you must report it immediately to: info@parkupp.co.za At any time should you wish to ascertain whether your vehicle has been registered to an account you may do so by providing suitable proof of ownership of the vehicle by email to info@parkupp.co.za.'
const privacy7 = 'ParkUpp has taken all reasonable steps to ensure that all data described or depicted on this website/App and any other information displayed on the website/App is current, complete and accurate. However, content errors may occur. The information displayed on our website/App is provided without any guarantees, conditions or warrant as to its accuracy or completeness To the extent permitted by applicable law, ParkUpp disclaims all representations and warranties, express or implied, that content or information displayed in or on the website/App is accurate, complete, up-to- date and/or does not infringe the rights of any third party. Data provided by or through ParkUpp and/or the website/App is provided by users or third party services providers, and is not verified or audited by ParkUpp. The use of any content is forbidden in those places where the law does not allow this disclaimer to take full effect.'
const privacy8 = '* modify or withdraw, temporarily or permanently, the website/App (or any part of) with or without notice to you and you confirm that we shall not be liable to you or any third party for any modification to or withdrawal of the website/App; and/or'
const privacy9 = '* change these privacy from time to time, and your continued use of the website/App (or any part of) following such change shall be deemed to be your acceptance of such change. It is your responsibility to check regularly to determine whether the privacy have been changed. If you do not agree to any change to the privacy then you must immediately stop using the website/App; and/or'
const privacy10 = '* change the Services from time to time. We will use our reasonable endeavours to maintain the website/App. You will not be eligible for any compensation because you cannot use any part of the website/App or because of a failure, suspension or withdrawal of all or part of the website/App due to circumstances beyond our control'
const privacy11 = 'These privacy supplement (and are in addition to) the privacy of our Privacy Policy. Our Privacy Policy explains what personal information we collect about you when you use the website/App, and you can view our Privacy Policy online by going to www.ParkUpp.com. Please note that when you agree to these privacy you shall be deemed also to have read, understood and agreed to our Privacy Policy in its entirety. '
const privacy12 = 'Copyright and all intellectual property rights in relation to the website/App, including in all materials, texts, drawings, graphics, logos, icons and any data made available on the website/App (“materials”) are owned by ParkUpp or its content suppliers and therefore protected by both South African and international intellectual property laws. Accordingly, any unauthorised copying, reproduction, retransmission, distribution, dissemination, sale, publication, broadcast or other circulation or exploitation of such material or any component thereof will constitute an infringement of such copyright and other intellectual property rights. You may only use the materials or any component thereof for your information purposes when access thereto is permitted by the content supplier. The trademarks, names, logos and service marks (collectively “trademarks”) displayed on this website/App are trademarks of ParkUpp. Nothing contained on this website/App should be taken as granting any licence or right to use any trademark without the prior written permission of ParkUpp. We grant you a limited license to access the website/App, which is non-exclusive and non-transferrable. This license does not permit any of the following:'
const privacy13 = 'External links are provided as part of our Service and for your convenience, but they are beyond the control of ParkUpp and no representation is made by ParkUpp as to their content, source or any risks that you may incur through linking to the other website. Use or reliance on any external links provided is at your own risk and we accept no liability in respect of such use. When visiting external links you must refer to the external privacy and conditions of use. You may not link to this website/App, in any manner, or frame any content of this website/App in any other manner or otherwise use the content without the express prior written permission of ParkUpp.'
const privacy14 = 'You are not entitled to permit anyone other than you to use your account. Only you and ParkUpp shall be entitled to enforce these privacy. No third party shall be entitled to enforce any of these privacy. ParkUpp shall not be liable to you or any third party for any loss or damage of whatsoever nature in the event that you make use of the Services offered through the website/App. You hereby indemnify ParkUpp from any loss, liability, cost or expense resulting directly or indirectly from your use of the website/App and/or Services available thereto, and waive any right to take action against ParkUpp in respect of any loss, liability, cost or expense resulting directly or indirectly from any unauthorised person accessing your account, or from any authorised access to your account. By accessing and using the website/App, you warrant and represent to ParkUpp that you are legally entitled to do so and to provide the data required. You further warrant that all the details you have given are true and complete and that you are legally capable of concluding this transaction.cYou warrant that you are at least 18 years of age. "Deep-linking", "embedding" or using analogous technology is strictly prohibited. Unauthorized use of the website/App and/or the materials contained on the website/App may violate applicable copyright, trademark or other intellectual property laws or other laws. We may in our sole discretion at any time suspend or terminate your access to the website/App and/or the Services without prior notice to you and without the need to give you reasons for such termination. We will not be liable to you or any third party for doing so.'
const privacy15 = 'You agree to comply with all applicable laws, statutes, ordinances and regulations pertaining to your access to and/or use of the website/App the Services, and/or use of your customer profile, or any part of these, and/or your posting of content and material (including text, files, images and photographs).'
const privacy16 = 'A cookie is a small file of letters and numbers that we place on your computer or mobile device. These cookies allow us to distinguish you from other users of our website/App, which helps us to provide you with a good experience when you browse our website/App and also allows us to improve our website/App. The website/App may use cookie and tracking technology (collectively “Cookies”) depending on the features offered. Cookies are useful for gathering information such as browser type and operating system, tracking the number of visitors to the website/App, and understanding how visitors use the website/App. Cookies can also help customize the website for visitors. Personal information cannot be collected via Cookies; however, if you previously provided personally identifiable information, Cookies may be tied to such information. Aggregate Cookie and tracking information may be shared with third parties. We have the right, but not the obligation, to monitor any activity and content associated with the website/App. We may investigate any reported violation of these privacy or omplaints and take any action that we deem appropriate (which may include, but is not limited to, issuing warnings, suspending, terminating or attaching conditions to your access and/or removing any materials from the website).'
const privacy17 = 'All transactions in relation to the Services must be made by way of credit card and will be processed in South African Rands. Applicable taxes will be charged. Pricing for parking is based on the rates charged by each Centre and may vary from place to place and from time to time. You hereby agree to pay such charges. ParkUpp reserves the right to change pricing at any time without prior notice. We accept MasterCard and Visa credit cards and certain debit cards as updated from time to time. For more information, please contact our Support Team at support@parkupp.co.za.'
const privacy18 = 'Credit card transactions will be processed for ParkUpp by PayGate who are the approved payment gateway for Big 4 Banks in South Africa. PayGate is a certified Payment System Operator (PASA) & PCI DSS Level 1 Service Provider, ensuring payment data security utilising PCI compliant processes and technology. The merchant has access to credit card details and securely stores it.'
const privacy19 = 'Parkupp makes no representations or warranties of any kind, express or implied, as to the operation of the website/app or the information, content, materials, and/ or products and services available via the website/app. You expressly agree that your use of this website/app is at your sole risk. To the full extent permissible by applicable law we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the website/app, its servers, or e-mail sent from us or third parties are free of viruses or other harmful components. we will not be liable in any way for any damages of any kind arising from the use of the website/app or the provision of the services, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. Neither parkupp, nor our directors, employees, officers, suppliers, service providers, subsidiaries or parent companies, make any representations or warranties of any kind (including but not limited to express or implied representations or warranties, as to the operation of the website/app or the information, content or materials, and/or in relaiton the services ). You expressly agree that your use of the website/app and the services is at your sole risk. In no event shall our directors, employees, officers, service providers, parent companies or subsidiaries be liable for lost profits or any special, incidental or consequential damages arising out of or in connection with the use of the website/app, our services or the privacy (howsoever arising, including but not limited to negligence).'
const privacy20 =  'In addition to any other indemnities provided in these privacy, you hereby unconditionally and irrevocably indemnify Parkupp, our affiliated companies, officers, agents, directors and employees and agree to hold us free from all loss, damages, claims and/or costs, of whatsoever nature suffered or incurred by us or instituted against us for infringement of any right, whether the claim or action arises from delict or contract, or any infringement of whatsoever nature, arising out of or pursuant to the exercise by you of your rights or the fulfilment or breach by you of any of your obligations under these privacy or any other requirements that we may impose from time to time, including, without limitation, all loss, damages, claims and/or costs suffered or incurred by us or instituted against us as a direct or indirect result of your use of the site, and such indemnity shall extend to the reasonable costs that may be incurred by us in defending any action instituted against us. Your use of the website/app, the services and/or your customer profile is entirely at your own risk and you assume full responsibility and risk of loss resulting from the use thereof. We do not accept liability that may arise in connection therewith. Parkupp, our affiliates, shareholders, directors, agents, consultants or employees shall not be liable for any damages whatsoever, including without limitation any direct, indirect, special, incidental, consequential or punitive damages, howsoever arising (whether in an action arising out of contract, statute, delict or otherwise) related to the access to and/or use of, or the inability to access or use, the website/app, any personalised item and/or any linked website/app, the content thereof, any functionality thereof or information contained therein, even if we know or should reasonably have known or are expressly advised thereof. It is specifically recorded that in no event shall our directors, employees, officers, service providers, parent companies or subsidiaries be liable to you for any damage to your motor vehicle or theft thereof.'
const privacy21 = 'The address for service for all purposes relating to these privacy including the giving of any notice, the payment of any sum, the serving of any process, is the physical address set out above. ParkUpp shall be entitled from time to time, by giving notice to you, to vary its physical address for service to any other physical address. ParkUpp shall be entitled to vary its address for service by notice on this website, and accordingly you undertake to ensure you have the correct service address.'
const privacy22 = 'These privacy and our Privacy Policy, set out the entire agreement between you and us related to the subject matter hereof, and supersedes any and all prior privacy, conditions, warranties and/or representations to the fullest extent permitted by law.'
const privacy23 = 'ParkUpp shall be entitled to make use of all the data you provide for purposes of providing the services offered through the website. ParkUpp shall be entitled to cede, assign and delegate all or any of its rights and obligations in privacy of these privacy. All provisions of these privacy are, irrespective of the manner in which they have been grouped together or linked grammatically, severable from each other. Any provision of these privacy which is or becomes unenforceable in any jurisdiction, whether due to voidness, invalidity, illegality, unlawfulness or for any reason whatsoever,shall, in such jurisdiction only and only to the extent that it is so unenforceable, be excluded from the agreement between us and the remaining provisions of these  privacy shall remain in full force and effect Should ParkUpp be prevented from fulfilling any of its obligations to you as a result of any event outside the control of ParkUpp, then those obligations shall be deemed to have been suspended to the extent that, and for as long as, ParkUpp is so prevented from fulfilling them and your corresponding obligations shall be suspended to the corresponding event. In the event that such event continues for more than 14 days after it has first occurred, then ParkUpp shall be entitled (but not obliged) to terminate all of its rights and obligations in privacy of or arising out of these privacy by giving notice to you. An event outside of the control of ParkUpp shall mean any event or circumstance whatsoever which is not within the reasonable control of ParkUpp including, but not limited to, vis major, casus fortuitus, any act of God, strike, theft, riots, explosion, insurrection or other similar disorder, war (whether declared or not) or military operations, the downtime of any external telecommunications line, power failure, international restrictions, any requirement or any international authority, any requirement of any government or other competent local authority, any court order, export control or shortage or transport facilities These privacy shall be governed by and construed in accordance with the laws of the Republic of South Africa without giving effect to any principles of conflict of law. You hereby consent to exclusive jurisdiction of the High Court of South Africa in respect of any disputes arising in connection with the services referred to herein, or the privacy or any matter related to or in connection therewith. For purposes of calculating any time periods GMT +2 shall apply.'
const privacy24 = 'ParkUpp (Proprietary) Limited will not process any refunds on your credit card account unless it can be proved that neither you nor the cardholder (where applicable) authorised this transaction or you have been incorrectly charged.'






// const width = window.innerWidth;
// const height = window.innerHeight;

class Privacy extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="privacy" >

	                <div style={{height: 300, width: 200}}>

		            </div>
                    
                    <Col className='privacyContainer'>
                        <Row className="privacyRow1">
                            <Col className={'prvCont'} md={9}>
                                <div className='privacyCard' style={styles.privacyCard}>
                                    <div  className='privacyText'>
                                    
                                        <h1 className='privacyHeaderText' style={styles.aboutUsCardTitle}>Privacy Policy</h1>
                                        <br/>
                                        <CardText className='cardText' style={{marginTop: -50}}>

                                            ParkUpp respects privacy and is committed to protecting the privacy of users of the website/App. 
							                ParkUpp seeks to employ best practice when it comes to the collection and processing of personal information. 
							                A summary of the type of information that is collected when you visit the ParkUpp website and how this information will be used is set out in this policy.
							                <br/><br/>
							                This policy applies to ParkUpp and the Services we provide from time to time.
							                <br/><br/>
							                If you follow a link to any other website, please check their policies before you submit any personal information to those websites.

							                <br/><br/>

							                <h4><strong>Information collected</strong></h4>
							                ParkUpp may collect your personal information through your access and use of the website/App, during conversations or correspondence with ParkUpp’s representatives, 
							                or when you use the Services, purchase goods and/or complete an application form.
							                <br/><br/>
							                ParkUpp may collect and store personal information from you in connection with:

							                <ul>
							                    <li>the provision of any product or service that ParkUpp and/or our affiliates may offer now or in the future;</li>                                                    
							                    <li>orders, activations, and registrations for any products or services;</li>                                                    
							                    <li>creation of a user profile on our website/App and verification of such profile;</li>                                                
							                    <li>details of your motor vehicle, including make, model and registration number;</li>
							                    <li>information requests or complaints;</li>
							                    <li>marketing, newsletter or support subscriptions from us and/or third parties;</li>
							                    <li>contest entries or survey participation;</li>
							                    <li>employment applications;</li>
							                    <li>registration for events;</li>
							                    <li>visits or browsing on ParkUpp website/App; or</li>
							                    <li>visits or browsing any partner websites/apps.</li>
							                </ul>
							                ParkUpp may collect the following types of personal information, including:
							                <ul>

							                    <li>personal and business contact information, such as name, address, telephone number, and email address;</li>
							                    <li>financial information, such as your credit/debit card number or other billing information;</li>
							                    <li>other unique information such as user IDs and passwords, product functionality, product and service preferences and contact preferences;</li>
							                    <li>any information necessary in order for us to provide the Services you have requested;</li>
							                    <li>geo-location information such as your IP address or physical location;</li>
							                    <li>
							                        details of the products and services you have purchased from us or which you have enquired about, together with any additional information 
							                        necessary to deliver those products and services and to respond to your enquiries;
							                    </li>
							                    <li>
							                        any additional information relating to you that you provide to us directly through our website/App or indirectly through use of our website/App 
							                        or online presence, through our representatives or otherwise;
							                    </li>
							                    <li>information you provide to us through our service centre, customer surveys or visits by our representatives from time to time.</li>
							                </ul>
							                ParkUpp may store your personal information manually or electronically. By supplying this information you consent to ParkUpp holding and using it for the 
							                purposes for which it was provided including in relation to the provision of the Services,. Information provided will be kept for as long as is necessary to fulfil that purpose.
							                We may also collect information about your computer or mobile device, including where available your IP address, operating system and browser type, 
							                for system administration and to report aggregate information to our webmasters. This information reveals nothing personal about you. 
							                It is statistical data about our users browsing actions and patterns which does not identify any individual and allows us to ensure that content from our website/App 
							                is presented in the most effective manner for you and for your device.

							                <br/><br/>

							                <h4><strong>How the information collected is used</strong></h4>
							                Personal information provided to ParkUpp by you will only be used for the purposes it was provided as well as for the purposes listed in these Terms. 
							                In light of the nature of the Services we offer, we may share your information to our third party service providers in order to provide our services to you. 
							                In the provision of the Services, we may also provide third parties with your personal information, provided you have agreed thereto, in order to provide you with 
							                marketing and promotional material. Personal information will not be provided to direct marketing companies or other such organisations without your permission. 
							                We may disclose your personal information to third parties if we are under a duty to disclose or share such information in order to comply with any legal obligation 
							                or to protect the rights, property or safety of ParkUpp, its clients or others. 
							                ParkUpp may use your information to:

							                <ul>
							                    <li>provide the Services and/or products to you, which may necessitate sharing your personal information with third party service providers located in South Africa as well as outside of South Africa;</li>
							                    <li>manage our relationship with you and third party service providers;</li>
							                    <li>provide you with access to protected areas of our website/App;</li>
							                    <li>communicate with you about ParkUpp’s products, services or support as well as that of our affiliates and service providers and send marketing communications in connection therewith;</li>
							                    <li>provide support to you in respect of the Services;</li>
							                    <li>improve our Services and develop new products and services;</li>
							                    <li>provide personalised promotional offers;</li>
							                    <li>measure performance of marketing initiatives;</li>
							                    <li>allow you to participate in contests and surveys;</li>
							                    <li>answer enquiries, provide information, support or advice about existing and new products or services;</li>
							                    <li>assess and improve the performance and operation of the website/App;</li>
							                    <li>to keep your contact details up to date and provide updated details to ParkUpp’s service providers and suppliers where necessary;</li>
							                    <li>prevent and detect security threats, fraud or other malicious activity;</li>
							                    <li>to process and respond to any complaint made by you.</li>
							                </ul>

							                Credit card information is used only for payment processing and fraud prevention. This information is not used for any other purpose by us or our financial 
							                services providers and will not be kept longer than necessary for providing the Services.
							                <br/><br/>
							                Demographical and statistical information about user behaviour may be collected and used to analyse the popularity and effectiveness of the ParkUpp website. 
							                Any disclosure of this information will be in aggregate form and will not identify individual users.
							                <br/><br/>
							                If you subscribe for data, news, announcements, alerts or any such information to be emailed to you from ParkUpp, we will hold your details on our database until 
							                such time as you chose to unsubscribe from this service. You may do this at any stage by selecting the appropriate option in the alerts section of the mobile application.

							                <br/><br/>

							                <h4><strong>How we store information collected</strong></h4>
							                Information, including your personal information is stored via the Amazon EC2 cloud network, which is based in various locations around the world, 
							                including the USA, Australia and Europe (currently Ireland and Frankfurt) as well as in Singapore and Tokyo. . Information is held only as long as you are a 
							                registered user of the website/App or as may be legally required. Information which you provide to us will be stored electronically and/or in hard copy, with 
							                reasonable security measures protecting such. However, we do work with third party contractors, some of whom host and operate certain features of the website/App. 
							                Accordingly, information that we collect from you may be collected in or transferred to a destination outside South Africa, including in Ireland, Australia or any 
							                other such region as deemed appropriate from time to time and / or may be processed by staff operating outside South Africa who work for us or for one of our 
							                contractors. By submitting personal information, you agree to this transfer, storing and processing. We will take all steps reasonably necessary to ensure that 
							                your data and personal information is treated securely and in accordance with this Privacy Policy.

							                <br/><br/>

							                <h4><strong>Quality and Protection of your Information</strong></h4>
							                We make every effort to keep the personal information we hold updated, complete and accurate. 
							                It is your duty to provide ParkUpp with the most up to date personal information. You may do so in the following ways:

							                <ul>
							                    <li>email info@parkupp.co.za or</li>
							                    <li>the App.</li>
							                </ul>

							                ParkUpp strives to ensure the security of personal information we hold by taking reasonable measures to prevent destruction, unlawful access and loss of personal information. Any compromise of data integrity or confidentiality will be reported to you by written notice.
							                Please contact us by phone, or email if you:

							                <ul>
							                    <li>require access to any personal information we hold on you;</li>
							                    <li>wish to notify us of any change, modification or correction; or</li>
							                    <li>would like to have your personal information removed from our records.</li>
							                    <li>believe that someone is impersonating or otherwise unlawfully using your account.</li>
							                </ul>

							                We will require suitable proof of identity from you before we action any of the above requests.

							                <br/><br/>

							                <h4><strong>Access to information</strong></h4>
							                The Promotion of Access to Information Act, 2000 gives you the right to access information held about you. 
							                For further information about this right and how to exercise it, please see ParkUpp’s PAIA Manual. 
							                ParkUpp’s subsidiaries may have dedicated PAIA Manuals that are accessible on their specific websites. Should you be a client of a specific 
							                subsidiary or a registered user of its site, please refer to that subsidiary’s PAIA Manual.
							               
							                <br/><br/>
							                
							                <h4><strong>Changes to our Online Privacy Policy</strong></h4>
							                Any changes we may make to our Privacy Policy in the future will be posted on the website/App.
							                
							                <br/><br/>

							                <h4><strong>Contact</strong></h4>
							                Any queries or concerns about privacy on this website should be sent by email to info@parkupp.co.za 




                                        </CardText>
                                    </div>
                                </div>
                            </Col>

                            <Col md={2} className="privacyLogo">
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

export default Privacy;

const styles = {
    privacyContainer: {
    	marginTop: 150,   		
    },
    aboutUsCol: {

    },
    privacyCard: {	    	
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