import React, { Component}  from 'react';
import { Switch, Route,HashRouter } from 'react-router-dom'
import {HomePage, HowItWorks, Terms, Careers, AboutUs, Privacy} from '../pages';
//
// import LandingComponent from './LandingComponent/LandingComponent';
// import HowItWorks from './HowItWorks/HowItWorks';





const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/Homepage" component={HomePage}/>
            <Route exact path="/HowItWorks" component={HowItWorks}/>
            <Route exact path="/AboutUs" component={AboutUs}/>
            <Route exact path="/Careers" component={Careers}/>
            <Route exact path="/ContactUs" component={HomePage}/>
            <Route exact path="/TermsAndConditions" component={Terms}/>
            <Route exact path="/PrivacyPolicy" component={Privacy}/>


        </Switch>
    </main>

)

export default Routes