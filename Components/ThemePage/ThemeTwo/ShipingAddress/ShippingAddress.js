import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { baseUrl, shopId } from "../../../../constant/constant";
import { TbCurrencyTaka } from "react-icons/tb";
// ../../../constant/constant
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../../redux/stateSlices/CartSlice";
// ../../../redux/stateSlices/CartSlice
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import iamgeOne from "../../../../public/theme_1/images/product/headphoneProduct.jpg"

const CheckOut = () => {

  const cart = [
		{
			name: "Head Phone",
			image: iamgeOne,
			price: 100,
			discount: 40,
			quantity: 1
		},
		{
			name: "Head Phone",
			image: iamgeOne,
			price: 100,
			discount: 40,
			quantity: 1
		},
		{
			name: "Head Phone",
			image: iamgeOne,
			price: 100,
			discount: 40,
			quantity: 1
		},
		
	]


 

  return (
    <section className='CheckOut'>
      <Container>
        <div className='CheckOutContent'>
          <Row className='justify-content-center mb-5'>
            <Col xs={6}>
              <div></div>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <div className='Header my-3'>
                <h3>Shopping cart 3 Items</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={8}>
              <div className='CheckOutTable'>
                {cart.length < 1 ? (
                  <h3 className="text-center mt-3 text-warning">Your Cart is empty</h3>
                ) : (
                  <table className='table roundedCorners'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart &&
                        cart.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div className='ProductFst d_flex'>
                                  <div className='svg'>
                                    <MdOutlineClose
                                     
                                    />
                                  </div>

                                  <div className='img'>
                                    {cart.length > 0 && (
                                      <img
                                        src={item?.image}
                                        alt=''
                                      />
                                    )}
                                  </div>

                                  <div className='Description'>
                                    <p style={{ paddingLeft: "15px" }}>
                                      {item.price}
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <p style={{ textAlign: "left" }}>
                                  TK{" "}
                                  <span
                                    style={{
                                      fontSize: "15px",
                                      color: "#3BB77E",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {item.price}
                                  </span>
                                </p>
                              </td>

                              <td>
                                <div className='PlusMinus'>
                                  <div
                                  
                                    className='Minus'
                                  >
                                    <AiOutlineMinus />
                                  </div>

                                  <div className='InputNumber'>
                                    <h6 className='py-2'>
                                     {item?.quantity}
                                    </h6>
                                  </div>

                                  <div
                                   
                                    className='Minus'
                                  >
                                    <AiOutlinePlus />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <h3 style={{ textAlign: "left" }}>
                                  300
                                </h3>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                )}
              </div>

              <section className='CheckOut'>
                {/* CheckOutContent */}
                <div className='CheckOutContent'>
                  <h3>Shipping Address</h3>
                  <div className='ProductDescriptionLeft'>
                    <form >
                      <div className='LoginItem'>
                        <div className='CustomeInput'>
                          <TextField
                            id='outlined-basic'
                            label='Name *'
                            variant='outlined'
                          
                          />
                        
                        </div>

                        <div className='CustomeInput'>
                          <TextField
                            id='outlined-basic'
                            label='Phone Number *'
                            variant='outlined'
                           
                          />
                         
                        </div>

                        <div className='CustomeInput'>
                          <TextField
                            id='outlined-basic'
                            label='Street address *'
                            variant='outlined'
                            
                          />
                         
                        </div>
                        <div className='ProceedToCheckout'>
                          <Button type='submit' variant='contained'>
                            PLACE ORDER TK 700
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </Col>

            <Col xs={4}>
              <div className='product_part'>
                <ul>
                  <li className='d_flex'>
                    <h3>Product</h3>
                    <h4>Subtotal</h4>
                  </li>

                  <li className='d_flex'>
                    <div className='img'>
                      <Image src={cart[0]?.image} alt='' />
                    </div>
                    <p>TK 700</p>
                  </li>

                  <li className='d_flex'>
                    <h5>Total Item</h5>
                    <p>3</p>
                  </li>

                  <li className='d_flex'>
                    <h5>Delivery fee</h5>
                    <p>0</p>
                  </li>

                  <li className='d_flex'>
                    <h3>Grand total</h3>
                    <h4>TK 700</h4>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
