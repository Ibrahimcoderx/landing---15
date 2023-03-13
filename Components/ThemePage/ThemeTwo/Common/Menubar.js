import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { BsSearch, BsCart3, BsFillCaretDownFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

const Menubar = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const cartlength = useSelector((state) => state.cart?.cartItems.length);
  const [cart, setCart] = useState(0);
  const [logo, setLogo] = useState();
  useEffect(() => {
    setCart(cartlength);
  }, [cartlength]);

  const [categories, setCategories] = useState([]);
  const [shopName, setShopName] = useState();
  async function handleFetchCategories(headers) {
    // ${process.env.API_URL}v1/customer/categories
    const response = await fetch(
      `${process.env.API_URL}v1/customer/categories`,
      {
        headers: headers,
      }
    );
    const data = await response.json();
    console.log("data", data);
    if (data.success === true) {
      setCategories(data?.data);
    }
  }



  return (
    <>
      <header>
        <div id='mobile-nav'>
          <Container>
            <Row>
              <Col
                sm={12}
                className='iconmenu  d-flex justify-content-center align-items-center'
              >
                <div className='icondiv'>
                  <BiUser />
                </div>
                <div className='icondiv'>
                  <FiHeart />
                  <span className='bg-black text-white'>100</span>
                </div>
                <div className='icondiv'>
                  <BsCart3 />
                  <span className>3</span>
                </div>
                <p className=''>$23340.93</p>
              </Col>
            </Row>
          </Container>
          <div id='font-menu'>
            <Container>
              <Row id='menu-row'>
                <Col xm={3}>
                  <Button
                    variant='btn'
                    onClick={toggleShow}
                    className=' menu-btn'
                  >
                    <img src='/images/theme_2/menu-drawyer.png' alt='menu' />
                  </Button>
                  <Offcanvas
                    className='offcanvas-bg'
                    show={show}
                    onHide={handleClose}
                    {...props}
                  >
                    <Offcanvas.Header closeButton className=''>
                      <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <nav className='animated bounceInDown'>
                        <ul>
                          <li className='active'>
                            <a href='/theme-two'>Home</a>
                          </li>
                          <li>
                            <a href='#'>About us</a>
                          </li>
                          <li className='sub-menu'>
                            <a href='#contact-us'>Contact Us</a>
                          </li>
                          <li>
                            <a href='#message'>Logout</a>
                          </li>
                        </ul>
                      </nav>
                    </Offcanvas.Body>
                  </Offcanvas>
                </Col>
                <Col xm={5}>
                  <Navbar.Brand href='/'>
                    <img
                      src='/images/theme_2/logo.png'
                      className='d-flex justify-content-center'
                      alt='Phonks Logo'
                    />
                  </Navbar.Brand>
                </Col>
                <Col xm={3}>
                  <div className='search'>
                    <span className='searchBtn'>
                      <BsSearch />
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* =========================== Large screen nav started ============================= */}
        <Container className='lg-nav'>
          {/* DesktopMenu */}
          <div className='DesktopMenu'>
            <Row className='navrow'>
              <Col lg={3}>
                <Link className='navbar-brand' href='/theme-two'>
                  <img src='/images/theme_2/logo.png' alt='site logo' />
                </Link>
              </Col>

              <Col lg={6} className='d-flex flex-row'>
                <ul className='topnav navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item px-lg-2 mx-lg-1'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      href='/theme-two'
                    >
                      Home
                    </Link>
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                  </li>
                  {/* <li className='nav-item px-lg-2 mx-lg-1'>

                    <Link className='nav-link' href='/theme-two/all-products'>
                      Products
                    </Link>
                  </li> */}
                   <li className='nav-item px-lg-2 mx-lg-1'>
                    <a className='nav-link' href='/theme-two/all-products'>
                     Shop
                    </a>
                  </li>
                  <li className='nav-item px-lg-2 mx-lg-1'>
                    <Link className='nav-link' href='/theme-two/all-products'>
                      Categories
                      <BsFillCaretDownFill />
                    </Link>
                    <div className='dropdown'>
                      <ul className='dropdown-menu'>
                        <li>
                        Mens Fashion 
                        </li>
                        <li>
                        womens Fashion 
                        </li>
                        <li>
                        Baby Fashion
                        </li>
                      </ul>
                    </div>
                  </li>
                 
                </ul>
              </Col>

              <Col
                lg={3}
                className='iconmenu d-flex justify-content-end align-items-center '
              >
                <div className='icondiv'>
                  <BsSearch />
                </div>
                <div className='icondiv'>
                  <BiUser />
                </div>

                <div className='icondiv'>
                  <FiHeart />
                  <span className='bg-black text-white'>22</span>
                </div>

                <Link href='/theme-two/check_out'>
                  <div className='icondiv'>
                    <BsCart3 />
                    <span className>5</span>
                  </div>
                </Link>
                <p className='pt-2'>$240.93</p>
              </Col>
            </Row>
          </div>
        </Container>
      </header>
    </>
  );
};
function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default Menubar;
