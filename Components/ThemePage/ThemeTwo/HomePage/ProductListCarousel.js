import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Autoplay, Pagination, Grid, Navigation } from "swiper";
import { BsCart3, BsChevronRight } from "react-icons/bs";
import { baseUrl } from "../../../../constant/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/stateSlices/CartSlice";
import Link from "next/link";
import iamgeOne from "../../../../public/theme_1/images/category/headphone.jpg"
import iamgeTwo from "../../../../public/theme_1/images/category/headphone3.jpg"
import iamgeThree from "../../../../public/theme_1/images/category/theme2Shirt.jpg"
import iamgeFour from "../../../../public/theme_1/images/category/theme2Shirt.jpg"
import iamgeFive from "../../../../public/theme_1/images/category/headphone3.jpg"
import iamgeSix from "../../../../public/theme_1/images/category/theme2Shirt.jpg"
import Image from 'next/image'

// ../../../redux/stateSlices/CartSlice
const ProductListCarousel = () => {
  const [shopId, setShopId] = useState();
  const dispatch = useDispatch();
  const allProducts = [
    {
      name: "Head Phone",
      image: iamgeOne
    },
    {
      name: "Men Shirt",
      image: iamgeTwo
    },
    {
      name: "women Shoes",
      image: iamgeThree
    },
    {
      name: "Men Shoes",
      image: iamgeFive
    },
    {
      name: "Ladies Dress",
      image: iamgeFour
    },
    {
      name: "Women Bag",
      image: iamgeSix
    },
    {
      name: "Bag",
      image: iamgeSix
    },
    {
      name: "Men Shirt",
      image: iamgeTwo
    },
    {
      name: "Men Shoes",
      image: iamgeFive
    },
    {
      name: "Head Phone",
      image: iamgeOne
    },
    {
      name: "Head Phone",
      image: iamgeOne
    },
    {
      name: "Men Shirt",
      image: iamgeTwo
    },
    {
      name: "women Shoes",
      image: iamgeThree
    },
    {
      name: "Men Shoes",
      image: iamgeFive
    },
    {
      name: "Ladies Dress",
      image: iamgeFour
    },
    {
      name: "Women Bag",
      image: iamgeSix
    },
    {
      name: "Bag",
      image: iamgeSix
    },
    {
      name: "Men Shirt",
      image: iamgeTwo
    },
    {
      name: "Men Shoes",
      image: iamgeFive
    },
    {
      name: "Head Phone",
      image: iamgeOne
    },
  ]


  return (
    <>
      <section id='product-list-carousel'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='heading d_flex align-items-center'>
                <div className='circle'>
                  <FiCircle />
                </div>
                <h2 className='my-auto mx-lg-3 mx-2'>All Products</h2>
                <div className='circle'>
                  <FiCircle />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className='more-btn'>
                <button className='btn pt-0 pe-0'>See All Products</button>
              </div>
            </Col>

            <Col lg={12}>
              <div className='productlist-slider'>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={20}
                  grid={{
                    rows: 2,
                    fill: "row",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      grid: {
                        rows: 3,
                        fill: "row",
                      },
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                      grid: {
                        rows: 2,
                        fill: "row",
                      },
                    },
                  }}
                  modules={[Autoplay, Pagination, Grid, Navigation]}
                  className='mySwiperProductList'
                >
                  {allProducts.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <Link href='/theme-two/productDetails'>
                          <div className='imageproduct'>
                            <div className='image-layer'>
                              <button className='wishlist' type='button'>
                                <img
                                  className='add-heart'
                                  src='../images/theme_2/heart-add-sm.png'
                                  alt=''
                                />
                                <img
                                  className='remove-heart d-none'
                                  src='../images/theme_2/heart.png'
                                  alt=''
                                />
                              </button>
                              <Image style={{width:'250px', height:'160px'}} src={item.image} alt='' />
                              <div className='overlay' />
                              <button

                                className='cart'
                              >
                                <BsCart3 />
                                Add to Cart
                              </button>
                            </div>
                            <p className='category'>Accessories</p>
                            <h3 className='title'>{item.name}</h3>
                            <h3 className='price-discount'>
                              BDT 100
                              <span>
                                150
                              </span>
                            </h3>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListCarousel;
