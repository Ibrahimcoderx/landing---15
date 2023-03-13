import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Select from "react-select";
import axios from "axios";
import styles from "/styles/landing_one/landing_one.module.css";
import { RiShoppingCart2Line } from "react-icons/ri";

// import { useEditor, useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import Context from "../../Context";
import Order from "../Common/Order";


// Menu Image Url
import landingImageUrl from "../../../public/images/landing_1/logo.png";
import Menubar from "../Common/Menubar/Menubar";
import MenubarLeft from "../Common/Menubar/MenubarLeft";



const LandingOne = (props) => {
  const baseUrl = "https://funnelliner.com";
  const [product, setProduct] = useState({});

  const [shopID, setShopID] = useState();

  const today = new Date();
  const year = today.getFullYear();   

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const contextValue = useContext(Context);
  let editActive = false;

  //logo
  const [logo, setLogo] = useState();
  if (contextValue !== undefined) {
    editActive = contextValue.value;
    useEffect(() => {
      if (contextValue.value1 === true) {
        const serialize = query.serialize();
        props.save(serialize);
        if (logo !== undefined) {
          props.save(JSON.stringify(logo));
        }
      }
    }, [contextValue.value1]);
  }
  const inputFile = useRef(null);
  const handleChangeLogo = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]));
  };
  const onButtonClick = () => {
    inputFile.current.click();
  };

  //productImageGallery1
  const [gallery_1, setGallery_1] = useState();
  const gallery_1_inputFile = useRef(null);
  const handleChangegallery_1 = (e) => {
    setGallery_1(URL.createObjectURL(e.target.files[0]));
  };
  const ongallery_1ButtonClick = () => {
    gallery_1_inputFile.current.click();
  };

  //productImageGallery2
  const [gallery_2, setGallery_2] = useState();
  const gallery_2_inputFile = useRef(null);
  const handleChangegallery_2 = (e) => {
    setGallery_2(URL.createObjectURL(e.target.files[0]));
  };
  const ongallery_2ButtonClick = () => {
    gallery_2_inputFile.current.click();
  };

  return (
    <div className={styles.LandingOne}>

      {/* Menubar */}
      

      {/* Banner */}
      <section id='banner' className={styles.banner}>

        <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

        <Container>

        

          <Row className='d_flex'>
            <Col lg={6}>
              <div className={styles.banner_content}>
                {/* <!-- text --> */}
                <div className={styles.text}>
                  <h3>{props.heroContent}</h3>
                </div>
              </div>
            </Col>

            <Col lg={6}>

              <div className={styles.banner_img}>
                <img src='/images/landing_1/banner.png' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Desktop Delivary */}
      <section id={styles.delivary} className={styles.DesktopDelivary}>
        <Container>
          <Row className='d_flex'>
            <Col lg={4} sm={4}>
              <div className={styles.delivary_item}>
                <div className={styles.img}>
                  <img src='/images/landing_1/delivary-1.png' alt='' />
                </div>

                <div className={styles.text}>
                  <h3>সারাদেশে ডেলিভারী চার্জ ফ্রি</h3>
                </div>

                {/* border */}
                <div className={styles.delivary_border}>
                  <img src='/images/landing_1/delivary_border.png' alt='' />
                </div>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className={styles.delivary_item}>
                <div className={styles.img}>
                  <img src='/images/landing_1/delivary-2.png' alt='' />
                </div>

                <div className={styles.text}>
                  <h3>প্রিমিয়াম প্যাকেজিং</h3>
                </div>

                {/* border */}
                <div className={styles.delivary_border}>
                  <img src='/images/landing_1/delivary_border.png' alt='' />
                </div>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className={styles.delivary_item}>
                <div className={styles.img}>
                  <img src='/images/landing_1/delivary-3.png' alt='' />
                </div>

                <div className={styles.text}>
                  <h3>ক্যাশ অন ডেলিভারী</h3>
                </div>

                {/* border */}
                <div className={styles.delivary_border}>
                  <img src='/images/landing_1/delivary_border.png' alt='' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.fram}>
          <img src='/images/landing_1/delivary_fram.png' alt='' />
        </div>
      </section>

      {/* Price */}
      <section id={styles.price}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.price_img}>
                <img src='/images/landing_1/price_img.png' alt='' />
                <div className={styles.overlay_text}>
                  <h2> {props.orderTitle}</h2>
                  <h1>{props.productPrice} </h1>

                  <Link href='#placeAnOrder' className={styles.bg} activeClass='active'>
                    
                    অর্ডার করুন
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* section gaps */}
        <div className={styles.section_gaps} />
      </section>

      {/* Customiza */}
      <section id={styles.customized}>
        <Container>
          <Row className='justify-content-md-center'>
            <Col lg={6}>
              <div className={styles.header}>
                <h2>{props.whyBuyOurProduct}</h2>
              </div>
            </Col>
          </Row>

          <div className={styles.customized_content}>
            <Row>
              {/* item1 */}
              <Col lg={4} sm={6}>
                <div className={styles.customized_item}>
                  <div className={styles.customized_border}>
                    {/* img */}
                    <div className={styles.img}>
                      <img src='/images/landing_1/customize_sign.png' alt='' />
                    </div>

                    {/* Text */}
                    <div className={styles.text}>
                      <h3>{props.whyChooseUsTittleOne}</h3>

                      {editActive === true && (
                        <Form.Range
                          min={1}
                          style={{ width: "200px" }}
                          defaultvalue={props.productTitleFontSize}
                          max={50}
                          onChange={(e) => {
                            setProp(
                              (props) =>
                                (props.productTitleFontSize = e.target.value)
                            );
                          }}
                        />
                      )}
                      <br />
                      <p>{props.whyChooseUsDecOne}</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* item2 */}
              <Col lg={4} sm={6}>
                <div className={styles.customized_item}>
                  <div className={styles.customized_border}>
                    {/* img */}
                    <div className={styles.img}>
                      <img src='/images/landing_1/customize_sign.png' alt='' />
                    </div>

                    {/* Text */}
                    <div className={styles.text}>
                      <h3>{props.whyChooseUsTittleTwo}</h3>

                      <p>{props.whyChooseUsDecTwo}</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* item3 */}
              <Col lg={4} sm={6}>
                <div className={styles.customized_item}>
                  <div className={styles.customized_border}>
                    {/* img */}
                    <div className={styles.img}>
                      <img src='images/landing_1/customize_sign.png' alt='' />
                    </div>

                    {/* Text */}
                    <div className={styles.text}>
                      <h3>{props.whyChooseUsTittleThree}</h3>

                      <p>{props.whyChooseUsDecThree}</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* item4 */}
              <Col lg={4} sm={6}>
                <div className={styles.customized_item}>
                  <div className={styles.customized_border}>
                    {/* img */}
                    <div className={styles.img}>
                      <img src='images/landing_1/customize_sign.png' alt='' />
                    </div>

                    {/* Text */}
                    <div className={styles.text}>
                      <h3>{props.whyChooseUsTittleFour}</h3>

                      <p>{props.whyChooseUsDecFour}</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={6}>
                <div className={styles.customized_item}>
                  <div className={styles.customized_border}>
                    <div className={styles.img}>
                      <img src='images/landing_1/customize_sign.png' alt='' />
                    </div>

                    <div className={styles.text}>
                      <h3>{props.whyChooseUsTittleFive}</h3>
                      <p>{props.whyChooseUsDecFive}</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={6}>
                <div className={styles.customized_item}>
                  <div className={styles.customized_border}>
                    <div className={styles.img}>
                      <img src='images/landing_1/customize_sign.png' alt='' />
                    </div>

                    <div className={styles.text}>
                      <h3>{props.whyChooseUsTittleSix}</h3>

                      <p>{props.whyChooseUsDecSix}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Video */}
      <section id={styles.video}>
        {/* section gaps */}
        <div className={styles.section_gaps} />

        <Container>
          <Row className='justify-content-md-center'>
            <Col lg={10}>
              <div className={styles.video_item}>
                {/* <ReactPlayer controls muted={true} playing={true} url='' /> */}
              </div>
            </Col>
          </Row>
        </Container>

        {/* section gaps */}
        <div className={`${styles.section_gaps} ${styles.GapNone}`} />
      </section>

      {/* OrderPrice */}
      <section id={styles.price} className={styles.order}>
        <Container>
          <Row className='justify-content-md-center'>
            <Col lg={9} sm={12}>
              <div className={styles.price_img}>
                <img src='images/landing_1/order.png' alt='' />

                <div className={styles.overlay_text}>
                  <Link href='#placeAnOrder' activeClass='active' className={styles.bg}>
                    {props.buttonInnerText}
                  </Link>

                  <h1>{props.productPrice}</h1>
                  <h2>{props.deliveryType}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* section gaps */}
        <div className={`${styles.section_gaps} ${styles.GapNone}`} />
      </section>

      {/* Gallery */}
      <section id={styles.customized} className={styles.gallery}>
        <div className={styles.overlay_img}>
          <img src='../images/landing_1/gal_fram.png' alt='' />
        </div>

        <Container>
          <Row className='justify-content-md-center'>
            <Col lg={6}>
              <div className={styles.header}>
                {editActive === false && <h2>{props.productDescription}</h2>}
                {editActive === true && (
                  <>
                    <ContentEditable
                      html={props.productDescription}
                      onChange={(e) =>
                        setProp(
                          (props) =>
                            (props.productDescription = e.target.value.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            ))
                        )
                      }
                      tagName='a'
                      style={{
                        fontSize: `${props.sectionFontSize}px`,
                      }}
                    />
                  </>
                )}
                <br />
                {editActive === true && (
                  <Form.Range
                    style={{ width: "200px" }}
                    min={1}
                    defaultvalue={props.sectionFontSize}
                    max={50}
                    onChange={(e) => {
                      setProp(
                        (props) => (props.sectionFontSize = e.target.value)
                      );
                    }}
                  />
                )}
              </div>
            </Col>
          </Row>

          {/* customized */}
          <div className={styles.gallery_content}>
            <Row>
              <Col lg={4} sm={4}>
                <div className={styles.gallery_item}>
                  <div className='gal_img'>
                    <img
                      src={
                        gallery_1 === undefined
                          ? "images/landing_1/gal-1.png"
                          : gallery_1
                      }
                      alt=''
                    />
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={4}>
                <div className={styles.gallery_item}>
                  <div className={styles.gal_img}>
                    <img src='images/landing_1/gal-2.png' alt='' />
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={4}>
                <div className={styles.gallery_item}>
                  <div className={styles.gal_img}>
                    <img src='images/landing_1/gal-3.png' alt='' />
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={4}>
                <div className={styles.gallery_item}>
                  <div className={styles.gal_img}>
                    <img src='images/landing_1/gal-4.png' alt='' />
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={4}>
                <div className={styles.gallery_item}>
                  <div className={styles.gal_img}>
                    <img src='images/landing_1/gal-1.png' alt='' />
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={4}>
                <div className={styles.gallery_item}>
                  <div className={styles.gal_img}>
                    <img src='images/landing_1/gal-2.png' alt='' />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Customer Review */}

      {/* Mobil Delivary */}
      <section id={styles.delivary} className={styles.MobileDelivary}>
        <Container>
          <Row className='d_flex'>
            <Col lg={4} sm={4}>
              <div className={styles.delivary_item}>
                <div className={styles.img}>
                  <img src='images/landing_1/delivary-1.png' alt='' />
                </div>

                <div className={styles.text}>
                  <h3>সারাদেশে ডেলিভারী চার্জ ফ্রি</h3>
                </div>

                {/* border */}
                <div className={styles.delivary_border}>
                  <img src='images/landing_1/delivary_border.png' alt='' />
                </div>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className={styles.delivary_item}>
                <div className={styles.img}>
                  <img src='images/landing_1/delivary-2.png' alt='' />
                </div>

                <div className={styles.text}>
                  <h3>প্রিমিয়াম প্যাকেজিং</h3>
                </div>

                {/* border */}
                <div className={styles.delivary_border}>
                  <img src='images/landing_1/delivary_border.png' alt='' />
                </div>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className={styles.delivary_item}>
                <div className={styles.img}>
                  <img src='images/landing_1/delivary-3.png' alt='' />
                </div>

                <div className={styles.text}>
                  <h3>ক্যাশ অন ডেলিভারী</h3>
                </div>

                {/* border */}
                <div className={styles.delivary_border}>
                  <img src='images/landing_1/delivary_border.png' alt='' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.fram}>
          <img src='images/landing_1/delivary_fram.png' alt='' />
        </div>
      </section>

      {/* Desktop Delivary */}
      <section id={styles.customer_review}>
        {/* section gaps */}
        <div className={styles.section_gaps} />

        <Container>
          <Row className='justify-content-md-center'>
            <Col lg={6}>
              <div className='header text-center'>
                <h2>আমাদের কাস্টমার রিভিউ</h2>
              </div>
            </Col>
          </Row>

          {/* video */}
          <div className='customer_review_content ReviewSlider'>
            <Row>
              <Col lg={12}>
                <Swiper
                  breakpoints={{
                    650: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    651: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1000: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <div className={styles.video}>
                      {/* <ReactPlayer controls={true} muted={true} url='' /> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </div>

          {/* photo */}
          <div className={styles.customer_review_content}>
            <Row>
              <Col lg={6} sm={6}>
                <div className={styles.img}>
                  <img src='images/landing_1/review-1.png' alt='' />
                </div>
              </Col>

              <Col lg={6} sm={6}>
                <div className={styles.img}>
                  <img src='images/landing_1/review-1.png' alt='' />
                </div>
              </Col>

              <Col lg={6} sm={6}>
                <div className={styles.img}>
                  <img src='images/landing_1/review-1.png' alt='' />
                </div>
              </Col>

              <Col lg={6} sm={6}>
                <div className={styles.img}>
                  <img src='images/landing_1/review-1.png' alt='' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      
      {/* order */}
      <section id="placeAnOrder">
        
        <Order></Order>

      </section>

      {/* Fotoer */}
      <section id={styles.Footer}>
        <div className={styles.footerLeft}>
          <img src='images/landing_1/footer_left.png' alt='' />
        </div>

        <div className={styles.footerRight}>
          <img src='images/landing_1/footer_right.png' alt='' />
        </div>

        <Container>
          <Row>
            <Col lg={4} sm={4}>
              <div className={styles.FooterContent}>
                <h3>প্রয়োজনে কল করুন</h3>

                <ul>
                  <li className='d_flex'>
                    <BiPhoneCall /> <a href='tel:+8801894844452'>+8801894844452</a>{" "}
                  </li>
                </ul>

                {/* Social Icon */}
                <div className={styles.SocialIcon}>
                  <Link href='#' className={styles.fb}>
                    {" "}
                    <FaFacebookF />{" "}
                  </Link>
                  <a href='#' className={styles.youtube}>
                    {" "}
                    <AiFillYoutube />{" "}
                  </a>
                  <a href='#' className={styles.instagram}>
                    {" "}
                    <AiOutlineInstagram />{" "}
                  </a>
                  <a href='#' className={styles.twitter}>
                    {" "}
                    <BsTwitter />{" "}
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className={styles.FooterContent}>
                <h3>Important Links</h3>

                <ul>
                  <li className='d_flex'>
                    <a href='#'>Privacy Policy</a>{" "}
                  </li>
                  <li className='d_flex'>
                    <a href='#'>Terms & Conditions</a>{" "}
                  </li>
                  <li className='d_flex'>
                    <a href='#'>Contact</a>{" "}
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} sm={4}>
              <div className={styles.FooterContent}>
                <h3>Email us</h3>

                <ul>
                  <li className='d_flex'>
                    <FiMail />{" "}
                    <a href='mailto:support@funnelliner.com'>support@funnelliner.com</a>{" "}
                  </li>
                </ul>
              </div>
            </Col>


             {/* Tiny Footer */}
            <div className={styles.tinyFooter}>
                
                <p>@ {year} All Rights Reserved </p>
                <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

          </div>

          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingOne;
