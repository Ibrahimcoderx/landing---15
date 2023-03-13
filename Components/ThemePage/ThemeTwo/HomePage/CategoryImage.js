import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Autoplay, Pagination, Navigation, Grid } from "swiper";
import Link from "next/link";
import { baseUrl } from "../../../../constant/constant";
import iamgeOne from "../../../../public/theme_1/images/category/headphone.jpg"
import iamgeTwo from "../../../../public/theme_1/images/category/image 130.png"
import iamgeThree from "../../../../public/theme_1/images/category/Mask group (1).png"
import iamgeFour from "../../../../public/theme_1/images/category/Mask group (2).png"
import iamgeFive from "../../../../public/theme_1/images/category/Mask group (3).png"
import iamgeSix from "../../../../public/theme_1/images/category/Mask group.png"

const CategoryImage = () => {
  const categories = [
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
  ]

  return (
    <>
      <section id='category-image'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='heading d_flex align-items-center'>
                <div className='circle'>
                  <FiCircle />
                </div>
                <h2 className='my-auto mx-lg-3 mx-2'>
                  Explore Popular Categories
                </h2>
                <div className='circle'>
                  <FiCircle />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className='more-btn'>
                <Link href='/all-products' className='btn pt-0'>
                  All Product <BsArrowRight />
                </Link>
              </div>
            </Col>

            <Col lg={12}>
              <div className='category-slider'>
                <Swiper
                  slidesPerView={7}
                  spaceBetween={20}
                  pagination={{
                    type: "progressbar",
                  }}
                  grid={{
                    rows: 1,
                    fill: "row",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 4,
                      spaceBetween: 7,
                    },
                    // when window width is >= 480px
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 7,
                      spaceBetween: 40,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    loop: true,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation, Grid]}
                  className='mySwiper'
                >
                  {categories?.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div className='imagebox'>
                          <Image src={item?.image} alt='' />
                          <p>{item.name}</p>
                        </div>
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

export default CategoryImage;
