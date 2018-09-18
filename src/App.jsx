import React, { Component } from 'react';

import {BrowserRouter as Router, Route,} from 'react-router-dom'
import {Footer,NavBar} from '../src/components/'
import './App.css';
import Routes from "./pages/Routes";


const App = () => {
    return(
	    <div>
            <div className='overlay_nav'>
                <NavBar/>
            </div>
	        <Routes />

                {/*<Footer/>*/}






	    </div>
	)
    
}

export default App;
