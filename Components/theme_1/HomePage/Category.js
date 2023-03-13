import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row, Form } from "react-bootstrap";
import { BiCategory } from "react-icons/bi";
// Import Swiper React components
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { baseUrl } from "../../../constant/constant";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import Context from "../../Context";
import iamgeOne from "../../../public/theme_1/images/category/headphone.jpg"
import iamgeTwo from "../../../public/theme_1/images/category/image 130.png"
import iamgeThree from "../../../public/theme_1/images/category/Mask group (1).png"
import iamgeFour from "../../../public/theme_1/images/category/Mask group (2).png"
import iamgeFive from "../../../public/theme_1/images/category/Mask group (3).png"
import iamgeSix from "../../../public/theme_1/images/category/Mask group.png"


// /theme_1/images/logo.png
const Category = ({ title, fontSize, save }) => {

  const [categories, setCategories] = useState([])

  const category = [
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

  async function handleFetchCategories(headers) {
    const response = await fetch(
      // {process.env.API_URL}v1/customer/categories
      `${process.env.API_URL}v1/customer/categories`, { headers: headers }
    );
    const data = await response.json();
    if (data.success === true) {
      setCategories(data?.data)
    }
  }

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem('shop_id'),
    }
    handleFetchCategories(headers).then(r => console.log())
  }, [])


  const { connectors: { connect, drag }, hasSelectedNode, hasDraggedNode, actions: { setProp } } = useNode((state) => ({
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0
  }));
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: true
  }));

  const { value, value1 } = useContext(Context);
  const editActive = value;
  useEffect(() => {
    if (value1 === true) {
      const serialize = query.serialize();
      save(serialize);
    }
  }, [value1]);
  return (
    <section className='Category'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className='CategoryContent'>
              {editActive === false && <h2>{title}</h2>}
              {editActive === true && (
                <ContentEditable
                  html={title}
                  onChange={(e) =>
                    setProp(
                      (props) =>
                      (props.title = e.target.value.replace(
                        /<\/?[^>]+(>|$)/g,
                        ""
                      ))
                    )
                  }
                  tagName='h2'
                  style={{ fontSize: `${fontSize}px` }}
                />
              )}
              {editActive === true && (
                <Form.Range
                  min={1}
                  defaultvalue={fontSize}
                  style={{ width: "200px" }}
                  max={50}
                  onChange={(e) => {
                    setProp((props) => (props.fontSize = e.target.value));
                  }}
                />
              )}
              <div className='CategorySlider'>
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    600: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 7,
                      spaceBetween: 30,
                    },
                  }}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation]}
                  className='mySwiper'
                >
                  {category?.map((item, index) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className='CategoryItem'>
                          <div className='img'>
                            <Image
                              src={item.image}
                              alt="Picture of the author"
                              width={100}
                              height={90}
                            />
                            {/* <img
                             
                              alt=''
                            /> */}
                          </div>
                          <div className='text'>
                            <p>{item?.name}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Category;
