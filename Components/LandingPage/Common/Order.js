import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RiShoppingCart2Line } from "react-icons/ri";

const Order = () => {

  return (

    <>

      <section className="OrderConfirmFrom">

        <Container>

          <Row>

            <h2>তাই আর দেরি না করে আজই অর্ডার করুন </h2>

            {/* left */}
            <Col lg={7}>

              <div className="OrderConfirmLeft">

                <h3>Billing details</h3>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার নাম লিখুন *' />
                </div>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার মোবাইল নাম্বার লিখুন *' />
                </div>

                <div className="CustomeInput">
                  <input type="text" name="" placeholder='আপনার সম্পূর্ণ ঠিকানা লিখুন *' />
                </div>

                {/* Payment */}
                <div className="Payment">

                  <h3>Payment</h3>

                  <div className="CustomeInput d_flex">

                    <input type="checkbox" checked name="" id='CashOn'/>
                    <label htmlFor="CashOn">ক্যাশ অন ডেলিভারি</label>

                  </div>

                  <div className="ArrowBg">
                    <p>Pay with cash on delivery.</p>
                  </div>

                </div>

              </div>

            </Col>

            {/* right */}
            
            <Col lg={5}>

              <div className="OrderConfirmRight">

                <h3>Your order</h3>

                <ul>

                  <li>
                    <h4>Product</h4>
                    <h5>Subtotal</h5>
                  </li>

                  <li>

                    <div className="left d_flex">
                      
                      <div className="img">
                        <img src="images/product.svg" alt="" />
                      </div>

                      <p>Flower Of Story Men’s Perfume Set Boss</p>

                    </div>

                    <div className="right d_flex">

                      <input type="number" />

                      <h5>BDT 1,690.00</h5>

                    </div>

                  </li>

                  <li>
                    <h5>Subtotal</h5>
                    <h5>1,690.00</h5>
                  </li>

                  <li>
                    <h5>Shipping</h5>

                    <h5>
                      <div className="checkbox d_flex">
                        <input type="radio" id='Inside' name='checkbox'/>
                        <label htmlFor="Inside">Inside Dhaka : ৳ 00.00</label>
                      </div>
                      <div className="checkbox d_flex">
                        <input type="radio" id='Outside' name='checkbox'/>
                        <label htmlFor="Outside">Outside Dhaka: ৳ 00.00</label>
                      </div>
                    </h5>

                  </li>

                  <li>
                    <h4>Total</h4>
                    <h4>1,690.00</h4>
                  </li>
                  
                </ul>

                  <button> <RiShoppingCart2Line/> Place Order BDT 1,690.00</button>

              </div>

            </Col>

          </Row>

        </Container>

      </section>
      
    </>
  )

}

export default Order

