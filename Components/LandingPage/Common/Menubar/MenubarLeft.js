import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MenubarLeft = (props) => {


  return (


    <>

        <section className='Menubar'>

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className="MenubarContent">

                            <div className="LogoLeft">
                                <Image src={props.logoImageLeft} />
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
      
    </>

  )
}

export default MenubarLeft
