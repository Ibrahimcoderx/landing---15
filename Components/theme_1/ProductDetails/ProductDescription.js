import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
const axios = require("axios");
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import ImageSliderComponent from "../ImageSliderComponent";
import { useRouter } from "next/router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";

const ProductDescription = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };
  const [shopName, setShopName] = useState();
  useEffect(() => {
    setShopName(localStorage.getItem("shop_name"));
  }, []);
  return (
    <>
      <section className='ProductDetails'>
        <Container>
          <Row>
            <Col xs={6}>
              <div className='ProductDetailsLeft'>
                <div className='ProductDetailsSlider'>
                  <ImageSliderComponent data={data}></ImageSliderComponent>
                </div>
              </div>
            </Col>

            <Col xs={6}>
              <div className='ProductDetailsRight'>
              <h4>IN STOCK</h4>

                <h3>Karkuma Organic Turmeric Immune Booster</h3>

                <h2>
                 499 TK{" "}
                  <del>600</del>{" "}
                </h2>

                <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                {/* <div className='Price'>
                  <div   onClick={() => handleAddToCart(data)} className='Plus'>
                    <FiPlus />
                  </div>
                  <div  className='Minus'>
                    <BiMinus />
                  </div>

                  <input defaultValue={3} readOnly  type='text' />
                </div> */}

                {/* AddCart */}
                <div className='AddCart mt-5'>
                  <button>
                    {" "}
                    <AiOutlineShoppingCart /> ADD TO CART
                  </button>
                  <button   href={`/theme_1/checkout`}>
                    {" "}
                    <BsCart4 /> Buy Now
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          {/* ProductTabs */}
          <div className='ProductTabs'>
            <Tabs
              defaultActiveKey='profile'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab eventKey='Description' title='Description'>
                <div className='TabsItem'>
                  <p>{data?.short_description}</p>

                  <ul>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer dipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="Additional information" title="Additional information">

              <div className="TabsItem">

                <div className="TabsItemList d_flex d_justify">
                  <h4>Weight</h4>
                  <h5>1 kg</h5>
                </div>

                 <div className="TabsItemList d_flex d_justify">
                  <h4>Dimensions</h4>
                  <h5>224 × 65 × 564 cm</h5>
                </div>

                 <div className="TabsItemList d_flex d_justify">
                  <h4>Brand</h4>
                  <h5>Evoylink</h5>
                </div>

              </div>

              </Tab> 
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDescription;
