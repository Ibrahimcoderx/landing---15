import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Menubar = (props) => {


  return (


    <>

        <section className='Menubar'>

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className="MenubarContent">

                            <div className="Logo">
                                <Image src={props.logoImage} />
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
      
    </>

  )
}

export default Menubar
