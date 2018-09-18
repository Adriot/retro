import React, { Component } from 'react';
import { Navbar, Nav,NavItem, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './NavBar.css'
import {colors} from '../../utils/constants/colors';
import { animateScroll as Scroll, scrollSpy, scroller } from 'react-scroll'

import Quicksand from 'typeface-quicksand'



const width = window.innerWidth;
const height = window.innerHeight;
class NavBar extends Component {





    state = {
        isTop: true,
        selectedNavItem : 1,

    }
    _scrollToBottom = () => {
        Scroll.scrollToBottom();
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    handleSelect = (key) => {
       this.setState({selectedNavItem:key})
    }


    render() {
        return (
           <Navbar className={this.state.isTop ? 'navbar-default':'navbar-default-onscroll'} default collapseOnSelect fixedTop={true}>

                       <Navbar.Header>
                            <Navbar.Brand >
                                <Link to="/Homepage">
                                    <Image className='logo-image' src={require("../../assets/images/parkUppLogo.png")} />
                                </Link>
                            </Navbar.Brand>
                           <div className='spacer'/>
                           <Navbar.Toggle/>
                       </Navbar.Header>

                       <Navbar.Collapse>
                           <Nav pullRight onSelect={key => this.handleSelect(key)}>
                               <NavItem className='navbarItem' eventKey={1} componentClass={Link} href={"/"} to={"/HowItWorks"}>
                                   <div style={styles.navItem}>
                                   How it works
                                   </div>
                               </NavItem>
                               <NavItem className='navbarItem' eventKey={2} componentClass={Link} href={"/"} to={"/AboutUs"}>
                                   <div style={styles.navItem}>
                                   About Us
                                   </div>
                               </NavItem>
                               <NavItem className='navbarItem' eventKey={3} componentClass={Link} href={"/"} to={""}>
                                   <div style={styles.navItem}>
                                       <a  style={styles.navItem} onClick={() => this._scrollToBottom()}>Contact Us</a>

                                   </div>
                               </NavItem>
                           </Nav>

                       </Navbar.Collapse>

                       <hr className='dividerLine'/>


           </Navbar>


        );
    }
}

export default NavBar


const styles = {

    navItem: {

         color: colors.WHITE,
         fontSize:14,
    }

}