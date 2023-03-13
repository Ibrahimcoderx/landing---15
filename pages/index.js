
import React from 'react'
import styles from '../styles/landing-15/landing_fifteen.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { RiShoppingCart2Line} from "react-icons/ri";
import {TbPhoneCall } from "react-icons/tb";
import {MdOutlineMailOutline } from "react-icons/md";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";


import Link from 'next/link';
import Order from'/Components/LandingPage/Common/Order'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {FreeMode, Autoplay, Pagination,Navigation } from "swiper";



const index = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (

        <section className='Landing__Fifteen'>

          <section className={styles.LandingFifteen}>


            {/* =========================================================================================================
                    Banner
            ===============================================================================================================*/}
            <section>

                <Container fluid className={styles.Conpad}>

                     <img className={styles.img1} src="images/landing_15/img1.png" alt="img" />

                    <div className={styles.bgimg}>

                        <Container>

                            <Row className={styles.ColReverce}>

                                <Col md={12} lg={6} className={styles.ColCenterMob}>

                                    <img  className={styles.MobLogo} src="images/landing_15/logo.svg" alt="img" />

                                    <img className={styles.imgMo2} src="images/landing_15/img1.png" alt="img" />

                                    <h1>মধু বলতেই সুন্দরবনের মিশ্র ফুলের প্রাকৃতিক খাঁটি মধু অন্যতম.</h1>

                                    <Link href='#placeAnOrder' className={styles.bg}><AiOutlineShoppingCart/> অর্ডার করুন </Link>

                                    <Link href='#placeAnOrder' className={styles.bg2}> ১৬৫০ টাকা </Link>

                                    <div className={styles.uldiv}>

                                         <div>
                                            <img src="images/landing_15/viver.svg" alt="img" /> 
                                        </div>   

                                         <div>

                                            <h5>ফোনে অর্ডার করতে</h5>

                                            <h6>+8801799733234</h6>
                                        </div>   




                                        {/* <ul >
                                            <li> 
                                                <img src="images/landing_15/viver.svg" alt="img" /> 

                                                ফোনে অর্ডার করতে <br />

                                               <span>+8801799733234</span> 

                                            </li>
                                        </ul> */}
                                    </div>

                                </Col>

                                {/* Col-------- */}
                                
                                <Col md={12} lg={6}>

                                   <div className={styles.img2div}>  

                                     <img className={styles.img2} src="images/landing_15/img2.svg" alt="img" />

                                     <div className={styles.img2Abs}>

                                        <div className={styles.img2AbsTxt}>

                                                <div>
                                                    <span className={styles.img2Span1}>50</span> 
                                                </div>
                                                
                                                <div>
                                                    <h5 className={styles.img2Span2}>%</h5>
                                                    <h5 className={styles.img2Span3}>OFF</h5>
                                                </div>

                                        </div>
                                        
                                        <h6 className={styles.img2Span4}>500-গ্রাম</h6>

                                     </div>



                                   </div>
                                
                                
                                </Col>


                            </Row>



                        </Container>

                    </div>

                </Container>



            </section>



             <section className={styles.section_gap}></section>                               

            {/* =========================================================================================================
                     HONEY STORE
            ===============================================================================================================*/}

            <section  className={styles.StoreRel}>

                

                    <img  className={styles.StoreAbs1} src="images/landing_15/img3.svg" alt="img" />
                    <img  className={styles.StoreAbs2} src="images/landing_15/img4.svg" alt="img" />

                

                <Container>

                    <Row>
                        <Col xs={12} sm={12} md={4}>

                            <img className={styles.Storeimg1} src="images/landing_15/img5.png" alt="img" />  

                            <div className={styles.StoreRel}>   

                                <img className={styles.Storeimg2} src="images/landing_15/img7.png" alt="img" />
                                <h5 className={styles.Storeh5}>Mixed Flowers</h5>

                            </div>    
                                
                        </Col>

                        {/* Col--- */}

                        <Col xs={12} sm={12} md={8} className={styles.StoreCol2}>

                           <h2 className={styles.StoreH2}>কেন HONEY STORE খাঁটি ফুলের প্রাকৃতিক (mixed flowers) মধু নিবেন?</h2>
                           
                           <Row className={styles.StoreRow2}>
                              <Col sx={12} sm={6}>

                              <img className={styles.Storeimg3} src="images/landing_15/img6.png" alt="img" />
                              
                              </Col>

                              {/* col---- */}

                              <Col sx={12} sm={6}>

                                <div className={styles.LitxtBox}>

                                    <ul>

                                        <li>
                                            <img src="images/landing_15/img8.svg" alt="img" /><p>আমাদের এই মধু প্রাকৃতিক চাক থেকে সংগৃহীত।</p>
                                        </li>

                                        

                                        <li>
                                            <img src="images/landing_15/img8.svg" alt="img" /><p>আপনার আমাদের কাছে খাঁটি মধুর নিশ্চয়তা পাবেন।</p>
                                        </li>


                                        <li>
                                            <img src="images/landing_15/img8.svg" alt="img" /><p>মধু সংগ্রহ থেকে প্যাকেজিং পর্যন্ত কার্যাবলী নিজস্ব তত্ত্বাবধানে সম্পন্ন করা হয়।</p>
                                        </li>


                                    </ul>


                                </div>

                             
                              
                              </Col>
                           </Row>

                           


                        
                        </Col>
                    </Row>

                </Container>


            </section>




           
            <section className={styles.section_gap}></section> 
            <section className={styles.section_gap}></section> 
            {/* =========================================================================================================
                    Price Section One
            ===============================================================================================================*/}

            <section>

                <Container fluid className={styles.Conpad}>

                    <Row>
                        <Col>

                            <div className={styles.PriceBgBox}>
                                
                                <img className={styles.PriceBgBoxImg} src="images/landing_15/img9.png" alt="img" />

                                <div className={styles.PriceBgBoxTxt}>

                                    <h5>মুল্য-1,500.00 টাকা</h5>

                                    <h6> সারা দেশে ফ্রি হোম ডেলিভারি </h6>

                                    <Link href='#placeAnOrder' className={`${styles.bg} ${styles.bg3}`}><AiOutlineShoppingCart/> অর্ডার করুন </Link>

                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>




            </section>


          
        
            {/* =========================================================================================================
                    Video Section
            ===============================================================================================================*/}

                        
            <section>

            <Container fluid className={styles.Conpad}>

                <Row>
                    <Col>

                        <div className={styles.VideoBgBox}>

                            <Container className={styles.VideoBgBoxCon}>

                                <h2>ফুলের নেক্টার থেকে সংগৃহীত সুন্দরবনের প্রাকৃতিক মধু সংগ্রহের কিছু সময়</h2>

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/qgkVdMs5jMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                {/* <img src="images/landing_15/img10.png" alt="img" /> */}

                            </Container>
                            
                          

                        </div>

                        <img className={styles.VideoBgBoxImg1} src="images/landing_15/img11.png" alt="img" />
                    </Col>
                </Row>
            </Container>




            </section>

            <section className={styles.section_gap}></section> 

            {/* =========================================================================================================
                    Table Section
            ===============================================================================================================*/}
           
            <section>

                <Container>

                            <div className={styles.TableBoxH2}>

                                <h2>ফুলের নেক্টার থেকে সংগৃহীত সুন্দরবনের প্রাকৃতিক মধু সংগ্রহের কিছু সময়</h2>

                            </div>

                    <Row className={styles.TableBoxRow}>


                            <img  className={styles.TableAbs3} src="images/landing_15/img12.svg" alt="img" />
                            <img  className={styles.TableAbs4} src="images/landing_15/img13.svg" alt="img" />

                           
                        <Col sm={12} md={6}>

                            <Row>                


                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                            এতে রয়েছে বেশ কিছু খনিজ উপাদান যা শারীরিক সুস্থতা প্রদানে বেশ গুরুত্বপূর্ণ ভূমিকা রাখে
                                        </p>
                                        
                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                           হাঁপানি ও ফুসফুসের সমস্যা সমাধানে কার্যকরী।
                                        </p>

                                    </Col>

                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                           অতিরিক্ত মেদ কমিয়ে ওজন হ্রাসে ভূমিকা রাখে।
                                        </p>

                                     </Col>
                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                           রক্তশূন্যতা দূর করে ভূমিকা রাখে।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                           দেহের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে দেহকে সুরক্ষিত রাখে।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                           হজমক্রিয়াকে ত্বরান্বিত করে হজমে সহায়তা করে।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                          ত্বক মসৃণ ও সজীব রাখতে কাজ করে এটি।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                          দেহের পানিশূন্যতা দূর করতে ভূমিকা রাখে।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                          রূপচর্চায় এক বহুল ব্যবহৃত উপাদান।
                                        </p>

                                    </Col>

                                   
                                    <Col xs={6} className={styles.TableBoxCol}>

                                        <p>
                                        কোষ্ঠ্যকাঠিন্য এবং ডায়রিয়াতেও এটি বেশ উপযোগী।
                                        </p>

                                    </Col>

                                   
                                   

                                   
                            </Row>

                           


                        
                        </Col>

                        <Col sm={12} md={6}>

                          <img className={styles.TableBoxImg} src="images/landing_15/img14.png" alt="img" />
                        
                        </Col>

                    </Row>


                </Container>
            </section>



            <section className={styles.section_gap}></section> 

            {/* =========================================================================================================
                    Price Section 2
            ===============================================================================================================*/}
            
            <section >

                            
                
                    <Container>

                    <div className={styles.PriceBoxTxt2}>

                        <h5>মুল্য-1,500.00 টাকা</h5>

                        <h6> সারা দেশে ফ্রি হোম ডেলিভারি </h6>

                        <Link href='#placeAnOrder' className={`${styles.bg} ${styles.bg3}`}><AiOutlineShoppingCart/> অর্ডার করুন </Link>

                    </div>



                    </Container>


            </section>




            <section className={styles.section_gap}></section> 
            <section className={styles.section_gap}></section> 
            <section className={`${styles.section_gap} ${styles.section_gap2}`}></section> 

            {/* =========================================================================================================
                    Discussion Honey
            ===============================================================================================================*/}
           
            <section >



                <Container fluid className={styles.Conpad}>


                    <img  className={styles.HoneyAbs5} src="images/landing_15/img15.png" alt="img" />
                    <img  className={styles.HoneyAbs6} src="images/landing_15/img15.png" alt="img" />


                    <div className={styles.DiscussionBgBox}>

                        <img className={styles.Discussionimg1} src="images/landing_15/img17.png" alt="img"/>

                        <div className={styles.DiscussionTxtBox}>

                            <h2> আমাদের প্রাকৃতিক খাঁটি মধুর সম্পর্ক কিছু কথা </h2>

                            <p>সুন্দরবনের প্রাকৃতিক মধুর চাহিদা বরাবরই ভিন্ন। খাঁটি মধু বলতেই সবার আগে এর কথাই মাথায় আসে।
                                 HONEY STORE যাত্রার শুরু থেকেই আপনাদের জন্য সেরা মানের ব পণ্য নিয়ে হাজির হয়েছে, 
                                যার মধ্যে মধু অন্যতম। প্রাকৃতিক মধু বলতে বুঝায় মৌচাক কেটে সংগ্রহ করা মধু।
                            </p>

                            <p>প্রাকৃতিক মধু সংগ্রহের জন্য মৌয়ালরা সুন্দরবনের গহীনে চলে যায়। বছরের বিভিন্ন সময় সংগ্রহ করা গেলেও ফেব্রুয়ারি.
                                 থেকে এপ্রিল মাস এর জন্য উৎকৃষ্ট সময়। মৌয়ালরা মধু সংগ্রহের জন্য বিভিন্ন নৌকাতে করে চাকের খোঁজে পাড়ি জমায় বনের গহীনে।
                                  সুন্দরবনের মধুতে খলিসা ফুলের নির্যাস বেশি থাকে। এই মধু অনেক পাতলা এবং সুস্বাদু হয়। 
                                তবে একটু পুরনো হয়ে গেলে খানিকটা গন্ধ নাকে আসতে পারে। এক্ষেত্রে হালকা তাপ দিলে এই গন্ধ দূর হয়ে যায়।
                            </p>

                        </div>

                    </div>

                </Container>


            </section>

            <section className={styles.section_gap}></section> 

            {/* =========================================================================================================
                     Honey Idea
            ===============================================================================================================*/}
           
            <section>
                <Container>
                    <Row className={styles.HoneyIdeaRow}>
                        <Col sm={12} md={6}>
                            <div className={styles.LitxtBox}>

                                <h2 className={styles.LitxtBoxTxtH2}>নকল ও ভেজাল মধু চেনার উপায়</h2>

                                <ul>

                                    <li>
                                        <img src="images/landing_15/img8.svg" alt="img" /><p>সব মৌসুমে সারা বছর মধুর স্বাদ ও ঘ্রাণ প্রায় একই থাকে যা খাঁঁটি মধুর ক্ষেত্রে হয় না।</p>
                                    </li>

                                    

                                    <li>
                                        <img src="images/landing_15/img8.svg" alt="img" /><p>বৈজ্ঞানিক পরীক্ষারা দ্বারা নিশ্চিত হওয়া যায়।</p>
                                    </li>


                                    <li>
                                        <img src="images/landing_15/img8.svg" alt="img" /><p>এতে পোলেনের উপস্থিতি পাওয়া যায় না।</p>
                                    </li>


                                </ul>


                            </div>

                        </Col>

                        {/* col */}

                        <Col sm={12} md={6}>

                            <img className={styles.HoneyIdeaImg} src="images/landing_15/img18.png" alt="img" />
                        
                        </Col>

                    </Row>

                </Container>

            </section>

            <section className={styles.section_gap}></section> 

            {/* =========================================================================================================
                    Order Last section
            ===============================================================================================================*/}
             
              <section>

                    <Container>

                        <div className={styles.LastOrderDiv}>

                            <img src='images/landing_15/img19.png' alt="img"></img>

                            <h5 className={styles.LastOrderDivAbs1}>সারা দেশে ফ্রি হোম ডেলিভারি</h5>
                            <h6 className={styles.LastOrderDivAbs2}>ডিস্কাউন্ট মূল্যঃ ১৬৫০ টাকা</h6>
                            <Link href='#placeAnOrder' className={` ${styles.bg3} ${styles.bg7} ${styles.bg8}`}><AiOutlineShoppingCart/> অর্ডার করুন </Link>


                        </div>

                    </Container>



              </section>








              <section className={styles.section_gap}></section>
              <section className={styles.section_gap2}></section>

            {/* =========================================================================================================
                    OrderConfirmFrom
            ===============================================================================================================*/}
              
                <section id="placeAnOrder">

                        <Order></Order>

                </section>


              <section className={styles.section_gap}></section>




            {/* =========================================================================================================
                    Shipping Icon
            ===============================================================================================================*/}
            <section>
                <Container>
                        <div className={styles.ShippingIconBox}>
                             
                            <div className={styles.ShippingIcondev}>

                                <Link href="#">

                                    <img src="images/landing_15/img19.svg" alt="Img" />
                                    <h5>Free 2 Days Shipping</h5>

                                </Link>

                            </div>
                             
                            <div className={styles.ShippingIcondev}>

                                <Link href="#">

                                    <img src="images/landing_15/img20.svg" alt="Img" />
                                    <h5>Money Back Gurantee</h5>

                                </Link>

                            </div>
                             
                            <div className={styles.ShippingIcondev}>

                                <Link href="#">

                                    <img src="images/landing_15/img21.svg" alt="Img" />
                                    <h5>Return Upto 30 Days</h5>

                                </Link>

                            </div>
                             
                            <div className={styles.ShippingIcondev}>

                                <Link href="#">

                                    <img src="images/landing_15/img22.svg" alt="Img" />
                                    <h5>24/7 Customer Support</h5>

                                </Link>

                            </div>



                        </div>

                                        
                </Container>

            </section>


            <section className={styles.section_gap}></section>

            {/* =========================================================================================================
                    Footer Section
            ===============================================================================================================*/}
            
            <section>
                <Container fluid className={styles.Conpad}>
                    <div className={styles.FooterBg}>

                        <Container>
                    
                            

                                <img className={styles.logo2} src="images/landing_15/logo2.svg" alt="img" />

                                <div className={styles.Footerhrdiv}>
                                      <h6 href="#">KEEP IN TOUCH </h6>
                                    <div className={styles.Footerhr}> </div>
                                  
                                </div>
                            

                                <Row className={styles.FooterdivRow}>

                                    <Col sm={12} lg={4}>
                                        <div className={styles.FooterTxtdiv}>

                                               <h5>Contact Us</h5>
                                               
                                               <ul>
                                                    <li>
                                                        <TbPhoneCall className={styles.FooterIcon}></TbPhoneCall>
                                                        <Link href="#">+8801894844452</Link>
                                                    </li>
                                                    
                                                    <li>
                                                        <MdOutlineMailOutline className={styles.FooterIcon}></MdOutlineMailOutline>
                                                        <Link href="#">support@funnelliner.com</Link>
                                                    </li>

                                               </ul>

                                        </div>
                                    
                                    </Col>

                                    <Col sm={12} lg={4}>

                                        <div className={styles.FooterTxtdiv}>

                                               <h5>Important Link</h5>

                                               <ul>
                                                    <li>
                                                        <img src="images/landing_15/Check.png" alt="Img" />
                                                        <Link href="#">Refund Policy </Link>
                                                    </li>
                                                    
                                                    <li>
                                                       <img src="images/landing_15/Check.png" alt="Img" />
                                                        <Link href="#">Privacy Policy</Link>
                                                    </li>

                                                    <li>
                                                        <img src="images/landing_15/Check.png" alt="Img" />
                                                        <Link href="#">Terms and Conditions</Link>
                                                    </li>

                                               </ul>

                                        </div>
                                    
                                    </Col>

                                    <Col sm={12} lg={4}>
                                        <div className={styles.FooterTxtdiv}>

                                               <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>
                                                <h2>+8801894844452</h2>

                                                <div className={styles.SocialIconBox}>
                                                    
                                                    <Link href="#"> <BsFacebook/> </Link>
                                                    <Link href="#"> <BsInstagram/> </Link>
                                                    <Link href="#"> <BsYoutube/> </Link>
                                                    
                                                </div>


                                        </div>
                                    
                                    </Col>


                                </Row>


                            <div className={styles.Footerhr2}></div>


                            
                                                           {/* Tiny Footer */}
                                <div className={styles.tinyFooter}>
                                                 
                                    <p>@ {year} All Rights Reserved </p>
                                    <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

                                </div>

                                

                                

                            

                        </Container>

                    </div>


                  

                </Container>


                

            </section>



          
            {/* =========================================================================================================
                    Header Section
            ===============================================================================================================*/}
    


           </section>
        </section>

    )

}

export default index
