import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../Menu/Menu';

import './Hero.css';


const Hero = () => {
    
    const [open, setOpen] = useState( false );

    return (
        <>
            <header className='header-area' style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/hero-bg.jpg'})`}}>
                <section className='nav-area'>
                    <Container>
                        <Row>
                            <Col lg={12} className="d-flex align-items-center justify-content-between my-2">
                                <div className='logo-area'>
                                    <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="Zain Real Estate" className='TT' />
                                </div>
                                <div className='header-right d-flex align-items-center'>
                                    <div className='header-menu'>
                                        <a href="/">Login</a>
                                        <a href="/">Sign up</a>
                                    </div>
                                    <div className='menu_button ms-4'>
                                        <button class="hambarger" onClick={() => setOpen(!open)}>
                                            <span className='l1'></span>
                                            <span className='l2'></span>
                                            <span className='l3'></span>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </header>

            <Menu status={`${open ? 'active' : 'inactive'}`} />
        </>
       
    );
};

export default Hero;