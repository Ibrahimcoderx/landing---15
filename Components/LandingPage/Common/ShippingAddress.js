import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ShippingAddress = (props) => {

  return (

    <>

        <section className='ShippingAddress'>

            <Container>

                <Row className='d_flex'>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div className="ShippingAddressItem">

                            <div className="img">
                                <Image src={props.DelivaryImage1} />
                            </div>

                            <div className="text">
                                <p>{props.DelivaryTitle1}</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div className="ShippingAddressItem">

                            <div className="img">
                                <Image src={props.DelivaryImage2} />
                            </div>

                            <div className="text">
                                <p>{props.DelivaryTitle2}</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div className="ShippingAddressItem">

                            <div className="img">
                                <Image src={props.DelivaryImage3} />
                            </div>

                            <div className="text">
                                <p>{props.DelivaryTitle3}</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div className="ShippingAddressItem">

                            <div className="img">
                                <Image src={props.DelivaryImage4} />
                            </div>

                            <div className="text">
                                <p>{props.DelivaryTitle4}</p>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
      
    </>

  )

}

export default ShippingAddress
