import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const ContactUs = () => {

    return (
        
        <div className='ThemeOne'>

            <section className='ContactUs'>

                <Container>

                    <Row className='d_flex'>

                        <Col lg={12}><h2>Get In Touch</h2></Col>

                        <Col lg={6}>

                            <div className="ContactUsFrom">

                                <form>

                                    <div className="CustomInput">
                                        <label>Name</label>
                                        <input type="text" name="" placeholder='Name'/>
                                    </div>

                                    <div className="CustomInput">
                                        <label>Email</label>
                                        <input type="text" name="" placeholder='Email'/>
                                    </div>

                                    <div className="CustomInput">
                                        <label>Message</label>
                                        <textarea name="" rows="5" placeholder='Message'></textarea>
                                    </div>

                                </form>

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className="ContactUsMap">

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0402311835132!2d90.41908581534555!3d23.817168392138445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3755c78779f77e53%3A0x665e49380b62fcda!2sSoft%20IT%20Care!5e0!3m2!1sen!2ssg!4v1678534320610!5m2!1sen!2ssg" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
        
        </div>

    )
}

export default ContactUs
