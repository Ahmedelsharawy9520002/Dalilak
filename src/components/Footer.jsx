import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

function Footer(){
    return(
        <div className="footer-container roboto-font">
            <Container fluid className="footer-itself "> 
                <Row className='gx-5'> 
                    <Col xl={4} className='first-column'> 
                        <img src="./images/LOGO.png" alt="Company Logo" className="footer-logo"/>
                        <p className="footer-pargraph">
                            Egyption E-learning platform that designed to guide beginners in computer science's different fields 
                            (such as programming, design, and AI) by providing structured learning roadmaps, including recommended 
                            documents, tutorials, and courses.
                        </p>
                        <div className='social-media'>
                            <a href='#facebook'><img src='./images/facebook.png'/></a>
                            <a href='#github'><img src='./images/github.png'/></a>
                            <a href='#linedin'><img src='./images/linkedin.png'/></a>
                            <a href='#twitter'><img src='./images/twitter.png'/></a>
                            <a href='#whatsapp'><img src='./images/whatsapp.png'/></a>
                            <a href='#pinterest'><img src='./images/pinterest.png'/></a>
                            <a href='#youtube'><img src='./images/youtube.png'/></a>
                            <a href='#discord'><img src='./images/discord.png'/></a>
                        </div>
                    </Col>
                    <Col className='columns'>
                        <h4 className='footer-marketplace footer-heading roboto-font'>Market places</h4>
                        <ul className='footer-marketplace-list footer-list '>
                            {/* نزلوها عشان الأيكون تشتغل */}
                            {/*  npm i --save @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons */}
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/" className="text-white roboto-font">Home</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/aboutus" className="text-white roboto-font">About Us</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/roadmaps" className="text-white roboto-font">Roadmaps</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/ourteam" className="text-white roboto-font">Our Team</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/faq" className="text-white roboto-font">FAQ</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/articles" className="text-white roboto-font">Articles</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col className='columns'>
                        <h4 className='footer-heading roboto-font'>Useful Links</h4>
                        <ul className='footer-list'>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/helpandsupport" className="text-white roboto-font">Help & Support</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/tipsandtricks" className="text-white roboto-font">Tips & Tricks</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/beforeyoustart" className="text-white roboto-font">Before you start</NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                                <NavLink to="/privacypolicy" className="text-white roboto-font">Privacy Policy</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col className='columns' xl={4}>
                        <h4 className='footer-heading roboto-font'>Recently Added</h4>
                        <ul className='footer-courses-list footer-list'>
                            <li>
                                <NavLink to="/frontend" className="course-img"><img src='./images/frontend.jpg'/></NavLink>
                                <div>
                                    <h6 className='course-name roboto-font'>Frontend roadmap</h6>
                                    <p className='course-des'>contains 20 resources</p>
                                    <p className='course-hours'>30 hours</p>
                                </div>
                                
                            </li>
                            <li>
                                <NavLink to="/backend" className="course-img"><img src='./images/backend.jpg'/></NavLink>
                                <div>
                                    <h6 className='course-name roboto-font'>Backend roadmap</h6>
                                    <p className='course-des'>contains 40 resources</p>
                                    <p className='course-hours'>30 hours</p>

                                </div>
                            </li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='copyrights'>Copyright @ 2025 <span>Dalilak</span> All rights reserved</div>
        </div>

    )
}

export default Footer