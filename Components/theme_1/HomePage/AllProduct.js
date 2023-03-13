import Image from "next/image";
import Link from "next/link";
import {
  Col,
  Container,
  Dropdown,
  Nav,
  Row,
  Tab,
  Tabs,
  Form,
} from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import { baseUrl } from "../../../constant/constant";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import Context from "../../Context";
const axios = require("axios");
import { useRouter } from "next/router";
import iamgeOne from "../../../public/theme_1/images/product/headphoneProduct.jpg"
import iamgetwo from "../../../public/theme_1/images/product/cahrger1.jpg"
import iamge3 from "../../../public/theme_1/images/product/headphone3.jpg"
import iamge4 from "../../../public/theme_1/images/product/headphone444.jpg"
import iamge5 from "../../../public/theme_1/images/product/hunnynut11.jpg"
import iamge6 from "../../../public/theme_1/images/product/shirt4.jpg"
import iamge7 from "../../../public/theme_1/images/product/shirt33.jpg"
import iamge8 from "../../../public/theme_1/images/product/shoes11.jpg"
import iamge9 from "../../../public/theme_1/images/product/shoes44.jpg"
import iamge10 from "../../../public/theme_1/images/product/theme2Shirt.jpg"
import iamge11 from "../../../public/theme_1/images/product/tshirt33.jpg"
import iamge12 from "../../../public/theme_1/images/product/vegitables.jpg"
import iamge13 from "../../../public/theme_1/images/product/vegitables33.jpg"
import iamge14 from "../../../public/theme_1/images/product/yaedphone55.jpg"
import iamge16 from "../../../public/theme_1/images/product/yaerphone33.png"
import iamge17 from "../../../public/theme_1/images/product/hunnynut44.jpg"
import iamge18 from "../../../public/theme_1/images/product/yearphone44.jpg"



const AllProduct = ({ title, fontSize }) => {
  const product = [
    {
      name: "Discover a wide range of Headphone including Razer",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "USAMS T22 Single USB QC3.0 Travel Charger Fast Wall",
      image: iamgetwo,
      price: 100,
      discount: 40,
    },
    {
      name: "Travel Chargers Adapter For Mobile Phone",
      image: iamge3,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge4,
      price: 100,
      discount: 40,
    },
    {
      name: "Travel Chargers Adapter For Mobile Phone",
      image: iamge5,
      price: 100,
      discount: 40,
    },
    {
      name: "Travel Chargers Adapter For Mobile Phone",
      image: iamge6,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge7,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge8,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge9,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge11,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge12,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge13,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge14,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge16,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge17,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge18,
      price: 100,
      discount: 40,
    },
    {
      name: " Travel Chargers Adapter For Mobile Phone",
      image: iamge10,
      price: 100,
      discount: 40,
    },
  ]
  

  const dispatch = useDispatch();
  const router = useRouter();
  const editActive = useContext(Context);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);


  
 
  
  
  
  return (
    <section className='PopularProduct AllProduct'>
      <Container>
        <Row>
          {/* item */}
          <Col xs={12} >
          {/* <h2>All Product</h2> */}
            <div className='AllProductTabs'>
              <Tabs variant='pills' defaultActiveKey='PackOne'>
                <Tab eventKey='PackOne' title='All Products'>
                  <div className='PopularProductContent'>
                    <Row>
                      <Col xs={12} >
                        <div className='PopularProductGrid'>
                          {product.map((item, index) => {
                            return (
                              
                              <Link href="/theme_1/product_details/1">
                                <div
                                  key={item.id}
                                  className='PopularProductItem'
                                >
                                  <div className='img'>
                                    <Image
                                      src={item?.image}
                                     
                                    />
                                  </div>
                                  <div className='text'>
                                    <h3>
                                      {item?.price} <del>{item?.discount}</del>
                                    </h3>
                                    <p>{item?.name}</p>
                                    <div className='duelButton'>
                                      <Link
                                        
                                        className='addToCart'
                                        href='#'
                                      >
                                        Add To Cart
                                      </Link>
                                      <Link
                                       
                                        href="#"
                                      >
                                        Buy Now
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
