import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import { NavLink, Link } from "react-router";
import "../styles/footer.css";
import logo from '../images/Dalilak.png';


function Footer(){
    return(


        <div className="footer-container roboto-font ">
            <div className="footer-itself ">
                <Container fluid className='footer-table container'> 
                    <Row> 

                        <Col className='columns first-column'> 
                            <Link to='/Dalilak'><img src={logo} alt="Company Logo" className="footer-logo "/></Link>
                            <p className="footer-pargraph">
                                Master computer science with expertly crafted roadmaps.
                            </p>
                        </Col>


                        <Col className='columns'>
                            <h4 className='footer-marketplace footer-heading roboto-font'>Product</h4>
                            <ul className='footer-list '>
                                <li>
                                    <NavLink to="/roadmaps" className="roboto-font">Roadmaps</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Dashboard" className="roboto-font">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pricing" className="roboto-font">Pricing</NavLink>
                                </li>
                            </ul>
                        </Col>


                        <Col className='columns'>
                            <h4 className='footer-heading roboto-font'>Resources</h4>
                            <ul className='footer-list'>
                                <li>
                                    <NavLink to="/blog" className="roboto-font">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/documentation" className="roboto-font">Documentation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/community" className="roboto-font">Community</NavLink>
                                </li>
                                
                            </ul>
                        </Col>


                        <Col className='columns'>
                            <h4 className='footer-heading roboto-font'>Legal</h4>
                            <ul className='footer-list'>
                                <li>
                                    <NavLink to="/privacypolicy" className="roboto-font">Privacy Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Termsofservice" className="roboto-font">Terms of service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="roboto-font">contact</NavLink>
                                </li>
                            </ul>
                        </Col>

                    </Row>
                </Container>


                <div className='footer-bottom container'>
                    <div className='copyrights'>© 2025 Dalilak. All rights reserved.</div>
                
                    <div className='social-media'>
                        <a href='#github'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" stroke-width="2" 
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>

                        <a href='#twitter'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                            stroke-linejoin="round" class="lucide lucide-twitter w-5 h-5">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>

                        <a href='#message'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                            stroke-linejoin="round" class="lucide lucide-mail w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    


    )
}

export default Footer