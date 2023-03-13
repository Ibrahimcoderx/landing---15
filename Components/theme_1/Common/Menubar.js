import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row, Form } from "react-bootstrap";
import { BiCategory } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useContext, useEffect } from "react";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import Context from "../../Context";
import { baseUrl } from "../../../constant/constant";

const Menubar = ({ menu1, menu2, menu3, menu4, fontSize, save }) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const contextValue = useContext(Context);
  let editActive = false;

  //category list
  const [categories, setCategories] = useState([]);

  // ${process.env.API_URL}v1/customer/categories


  return (
    <section className='Menubar'>
      <Container>
        <div className='DesktopMenu'>
          <Row className='d_flex'>
            {/* left  */}
            <Col xs={3}>
              <div className='MenubarLeftLogo'>
                <Dropdown>
                  <Dropdown.Toggle id='dropdown-basic'>
                    <BiCategory /> Browse Categories <BsChevronDown />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>Organic Food</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Milk</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Honey Nut</Dropdown.Item>
                    <Dropdown.Item href='#/action-1'>Organic Food</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>

            <Col xs={6}>
              <div className='MenubarMiddle'>
                <ul>
                  <li>
                    <Link href='/theme_1' className='active'>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href='/theme_1/shop' className='active'>
                     Shop
                    </Link>
                  </li>

                  <li>
                    <Link href='/theme_1/aboutus' className='active'>
                      About Us 
                    </Link>
                  </li>


                  <li>
                    <Link href='/theme_1/contact-us' className='active'>
                     Contact Us
                    </Link>
                  </li>
                </ul>
               
              </div>
            </Col>

            <Col xs={3}>
              <div className='SocailIcon'>
                <Link href=''>
                  <FaFacebookF />
                </Link>
                <Link href=''>
                  <FaYoutube />
                </Link>
                <Link href=''>
                  <FaInstagram />
                </Link>
                <Link href=''>
                  <FaTwitter />
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        {/* MobileMenu */}
        <div className='MobileMenu'>
          <Row>
            <Col xs={4}>
              <div className='MenubarLeftLogo'>
                <Dropdown>
                  <Dropdown.Toggle id='dropdown-basic'>
                    <BiCategory /> Browse Categories <BsChevronDown />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>

                    <Dropdown.Item href='#/action-2'>
                      Another action
                    </Dropdown.Item>

                    <Dropdown.Item href='#/action-3'>
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>

            <Col xs={8}>
              <div className='MobileMenuItem'>
                <Button onClick={handleShow}>
                  <AiOutlineBars />
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    <div className='MenubarMiddle'>
                      <ul>
                        <li>
                          <Link href='' className='active'>
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link href=''> Shop </Link>
                        </li>

                        <li>
                          <Link href=''> About Us </Link>
                        </li>

                        <li>
                          <Link href=''> Contact Us </Link>
                        </li>
                      </ul>

                      <div className='SocailIcon'>
                        <Link href=''>
                          <FaFacebookF />
                        </Link>
                        <Link href=''>
                          <FaYoutube />
                        </Link>
                        <Link href=''>
                          <FaInstagram />
                        </Link>
                        <Link href=''>
                          <FaTwitter />
                        </Link>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Menubar;
