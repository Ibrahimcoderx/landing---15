import React from 'react'
import styles from '../../../styles/landing-16/landing_sixteen.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import  { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import { FiPhoneCall} from "react-icons/fi";
import { IoIosMail} from "react-icons/io";
import { RiShoppingCart2Line} from "react-icons/ri";
import { VscDebugBreakpointData } from "react-icons/vsc";

import Order from "../Common/Order";


const LandingSixteen = () => {

       const swiperRef = useRef();
       
       const today = new Date();
       const year = today.getFullYear();

  return (

       <section className={styles.LandingSixteen}>

            {/* =========================================================================================================
                   Banner One 
            =============================================================================================================*/}
            <Container fluid className={styles.ContainerPad}>
                    <div className={styles.bgImgBox}> 

                        <div className={styles.LogoBox}>
                            <img src="images/landing_16/logo.svg" alt="Img" />
                        </div>


                        <Container>
                             <Row className={styles.BannerRow}>
                                 <Col xs={12} md={12} lg={6}>
                                    <div className={styles.Bannertxtbox}>    
                                        <h1> ড্রাই ফ্রুটের অনন্য স্বাদ আর ন্যাচারাল হানির পুষ্টিকর গুন এখন এক জায়গায় </h1>
                                        <h4>হানি বি <span>এর সাথে !</span></h4>
                                        <Link className={styles.Btnbg} href='#placeAnOrder'>অর্ডার করুন</Link>
                                        <h5>১২০০ টাকা</h5>

                                    </div>


                                 </Col>

                                 {/* col---- */}

                                 <Col xs={12} md={12} lg={6} className={styles.BannerImgDiv} >

                                          <div className={styles.Banner2Rel}>   

                                              <img className={styles.BannerMAbsImg} src="images/landing_16/img20.svg" alt="img" />
                                              <img className={styles.BannerMAbsImg2} src="images/landing_16/img21.svg" alt="img" />
                                         
                                          </div>

                                        <img className={styles.BannerImg} src="images/landing_16/img1.png" alt="img" />

                                 </Col>

                             </Row>


                        </Container>


                    </div>

            </Container>

            {/* =========================================================================================================
                   Banner Two 
            =============================================================================================================*/}
           
           <section>

              <div className={styles.Banner2Rel}>
                     <img className={styles.Banner2AbsImg} src="images/landing_16/img2.png" alt="img" />
              </div>
           
           
              <Container>
                  <Row className={styles.BannerRow2}>
                       <Col xs={12} md={12} lg={6}>
                            <div className={styles.section_gap}></div>

                            <div className={styles.Banner2txtbox}>

                             <h2 className={styles.Banner2txth2}>কেনো হানি বি থেকে প্রাকৃতিক হানি নাট কম্বো নিবেন ?</h2>
                               <ul>
                                     <li> 
                                          <img src="images/landing_16/img7.svg" alt="img" />
                                          <p> আমাদের এই মধু প্রাকৃতিক চাক থেকে সংগৃহীত। </p>
                                     </li>

                                     <li> 
                                          <img src="images/landing_16/img7.svg" alt="img" />
                                          <p> আপনার আমাদের কাছে খাঁটি মধুর নিশ্চয়তা পাবেন।</p>
                                      </li>

                                     <li>
                                          <img src="images/landing_16/img7.svg" alt="img" />
                                          <p>মধু সংগ্রহ থেকে প্যাকেজিং পর্যন্ত কার্যাবলী নিজস্ব তত্ত্বাবধানে সম্পন্ন করা হয়।</p>
                                    </li>

                                    <li>
                                          <img src="images/landing_16/img7.svg" alt="img" />
                                          <p> বেস্ট ড্রাই ফ্রুট এর কম্বিনেশন দিয়ে তৈরি করা। </p>
                                    </li>

                               </ul>
                            </div>
                            

                       </Col>

                       {/* clo.. */}

                       <Col xs={12} md={12} lg={6}>
                            <div className={styles.Banner2imgbox}>
                                   <img className={styles.Banner2imgRel} src="images/landing_16/img3.png" alt="img" />
                                   <img className={styles.Banner2imgAbs}  src="images/landing_16/img19.png" alt="img" />

                                   <div className={styles.Container_gap}></div>
                            </div>

                       </Col>
                   </Row>
              </Container>
            

         </section>


            {/* =========================================================================================================
                   Banner Three
            =============================================================================================================*/}
           
               <div className={styles.section_gap}></div>
              
            
             
              <Container >
                  <Row>
                       <Col>
                          
                            <Swiper
                                   slidesPerView={3}
                                   spaceBetween={30}
                                   navigation={true} 
                                   modules={[Navigation]}
                                   className="mySwiper"
                                   loop={true}

                                   breakpoints={{
                                          240: {
                                            slidesPerView: 2,
                                            slidesPerGroup: 2,
                                            spaceBetween: 0,
                                          },
                                          768: {
                                            slidesPerView: 3,
                                            slidesPerGroup: 3,
                                            spaceBetween: 20,
                                          },
                                          1024: {
                                            slidesPerView: 3,
                                            slidesPerGroup: 3,
                                            spaceBetween: 30,
                                          },
                                        }}
                            >

                                   {/* item */}
                                   <SwiperSlide className={styles.SliderImg}>
                                          <Link href="#">
                                               <img src='images/landing_16/img4.png' alt='img'></img>
                                          </Link>
                                   </SwiperSlide>

                                   {/* item */}
                                   <SwiperSlide className={styles.SliderImg}>
                                          <Link href="#">
                                               <img src='images/landing_16/img5.png' alt='img'></img>
                                          </Link>
                                   </SwiperSlide>

                                   {/* item */}
                                   <SwiperSlide className={styles.SliderImg}>
                                          <Link href="#">
                                               <img src='images/landing_16/img6.png' alt='img'></img>
                                          </Link>
                                   </SwiperSlide>

                                   {/* item */}
                                   <SwiperSlide className={styles.SliderImg}>
                                          <Link href="#">
                                               <img src='images/landing_16/img4.png' alt='img'></img>
                                          </Link>
                                   </SwiperSlide>

                                   {/* item */}
                                   <SwiperSlide className={styles.SliderImg}>
                                          <Link href="#">
                                               <img src='images/landing_16/img5.png' alt='img'></img>
                                          </Link>
                                   </SwiperSlide>

                                   {/* item */}
                                   <SwiperSlide className={styles.SliderImg}>
                                          <Link href="#">
                                               <img src='images/landing_16/img6.png' alt='img'></img>
                                          </Link>
                                   </SwiperSlide>

                            </Swiper>
                                                        
                       </Col>
                 </Row>
              </Container>

              {/* section Gap */}
              <div className={styles.section_gap}></div>

            {/* =========================================================================================================
                   Banner Three 
            =============================================================================================================*/}
          
              <section> 

                     <div className={styles.Banner2Rel}>
                            <img className={styles.Banner3AbsImg} src="images/landing_16/img8.png" alt="img" />
                            {/* <img className={styles.Banner3AbsImg2} src="images/landing_16/img11.png" alt="img" /> */}
                     </div>



                     <Container>

                        <Row>

                            
                            {/* clo.. */}

                            <Col xs={12} md={12} lg={6} className={styles.Banner2imgboxCol}>
                                   <div className={styles.Banner2imgbox}>

                                          <img className={styles.Banner2imgRel} src="images/landing_16/img9.png" alt="img" />
                                          <img className={`${styles.Banner2imgAbs} ${styles.Banner2imgAbs2}`}  src="images/landing_16/img10.png" alt="img" />

                                          <div className={styles.Container_gap}></div>
                                   </div>

                            </Col>   



                            <Col xs={12} md={12} lg={6}>
                            

                                   <div className={`${styles.Banner2txtbox} ${styles.Banner2txtbox2}`}>

                                   <h2 className={styles.Banner2txth2}>হানি নাট (মধু ও বাদাম) এর সব গুনাগুন ও কার্যকারিতা </h2>
                                   <ul>
                                          <li> 
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p> শরীরে রো’গ প্রতিরো’ধ ক্ষম’তা বৃদ্ধিতে অতুলনীয়। </p>
                                          </li>

                                          <li> 
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p>যারা শরী’র ফি’ট রাখতে চান তাদের জন্য খুবই উ’পকারী।</p>
                                          </li>

                                          <li>
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p>চেহারায় লাবণ্য ধরে রাখতে খুবই কার্যকর।</p>
                                          </li>

                                          <li>
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p> র’ক্তে কো’লেস্টরেল কমানোর পাশাপাশি ক্যা’ন্সার সৃষ্টি হতে বাধা দেয়। </p>
                                          </li>

                                          <li>
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p> কোলেস্টরেল, ব্লাড সুগার , মাইগ্রেন এবং উচ্চ রক্তচাপ নিয়ন্ত্রণ করে। </p>
                                          </li>

                                          <li>
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p> শ’রীরের দু’র্বলতা দূর করে শা’রীরিক শক্তি বৃদ্ধি করে। </p>
                                          </li>

                                          <li>
                                                 <img src="images/landing_16/img7.svg" alt="img" />
                                                 <p> স্মৃতিশক্তি বৃদ্ধি করে, তীক্ষ্ণ মেধা সম্পন্ন হতে সাহায্য করে। </p>
                                          </li>

                                   </ul>
                                   </div>
                                   
                            
                            </Col>
                            <div className={`${styles.Container_gap} ${styles.section_gapNone}`}></div>
                         
                        </Row>
                     
                     </Container>

                     
                     <div className={styles.Banner2Rel}>
                            {/* <img className={styles.Banner3AbsImg} src="images/landing_16/img8.png" alt="img" /> */}
                            <img className={styles.Banner3AbsImg2} src="images/landing_16/img11.png" alt="img" />
                     </div>

              
               </section>   
              
              <div className={`${styles.section_gap} ${styles.section_gapNone}`}></div>
            {/* =========================================================================================================
                   Banner Four
            =============================================================================================================*/}
            
              <Container fluid>
                     
                                   
                     <div className={styles.Banner4txth2}>

                            <img src="images/landing_16/img12.png" alt="" />

                            <div  className={`${styles.Banner4txtbox} ${styles.Bannertxtbox}`}>
                                   <h5>১২০০ টাকা</h5>
                                   <p>সারা দেশে ফ্রি হোম ডেলিভারি</p>
                                   <Link className={styles.Btnbg} href='#placeAnOrder'>অর্ডার করুন</Link>
                            </div>

                     </div>
                            
                  
                      
              </Container>



               {/* section Gap */}
              <div className={styles.section_gap}></div>

            

              {/* =========================================================================================================
                            Slider-2   LandingSixteen1 Component 
              =============================================================================================================*/}


              <Container >

                     <Row>

                            <h2 className={styles.slider2h2}>কি কি আছে আমাদের <img src="images/landing_16/logo.svg" alt="Img" />এর হানি নাট কম্বোতে ?</h2>


                            <Col lg={12}>
                            
                                   <Swiper
                                          slidesPerView={3}
                                          spaceBetween={30}
                                          navigation={true} modules={[Navigation]}
                                          className="mySwiper"
                                          loop={true}

                                          breakpoints={{
                                                 240: {
                                                   slidesPerView: 2,
                                                   slidesPerGroup: 2,
                                                   spaceBetween: 0,
                                                 },
                                                 768: {
                                                   slidesPerView: 3,
                                                   slidesPerGroup: 3,
                                                   spaceBetween: 0,
                                                 },
                                                 1024: {
                                                   slidesPerView: 4,
                                                   slidesPerGroup: 4,
                                                   spaceBetween: 0,
                                                 },
                                               }}
                                   >

                                          {/* item */}
                                          <SwiperSlide className={styles.SliderImg}>
                                                 <Link href="#">
                                                 <img src='images/landing_16/img13.png' alt='img'></img>
                                                 </Link>
                                          </SwiperSlide>

                                          {/* item */}
                                          <SwiperSlide className={styles.SliderImg}>
                                                 <Link href="#">
                                                 <img src='images/landing_16/img14.png' alt='img'></img>
                                                 </Link>
                                          </SwiperSlide>

                                          {/* item */}
                                          <SwiperSlide className={styles.SliderImg}>
                                                 <Link href="#">
                                                 <img src='images/landing_16/img15.png' alt='img'></img>
                                                 </Link>
                                          </SwiperSlide>

                                          {/* item */}
                                          <SwiperSlide className={styles.SliderImg}>
                                                 <Link href="#">
                                                 <img src='images/landing_16/img16.png' alt='img'></img>
                                                 </Link>
                                          </SwiperSlide>

                                          {/* item */}
                                          <SwiperSlide className={styles.SliderImg}>
                                                 <Link href="#">
                                                 <img src='images/landing_16/img13.png' alt='img'></img>
                                                 </Link>
                                          </SwiperSlide>

                                          {/* item */}
                                          <SwiperSlide className={styles.SliderImg}>
                                                 <Link href="#">
                                                 <img src='images/landing_16/img14.png' alt='img'></img>
                                                 </Link>
                                          </SwiperSlide>

                                   </Swiper>
                                                               
                            </Col>
                     </Row>

              </Container>

              

              {/* section Gap */}
              <div className={styles.section_gap}></div>

              
              {/* =========================================================================================================
                            LandingSixteen2 Component
              =============================================================================================================*/}
      

               {/* =========================================================================================================
                            Love Section
               =============================================================================================================*/}
               <section>

                      <Container>

                             <Row className={styles.BannerRow}>

                                 {/* col---- */}

                                 <Col xs={12} md={12} lg={6}>
                                          <img className={styles.LoveImg} src="images/landing_16/img17.png" alt="img" />
                                   </Col>

                                 <Col xs={12} md={12} lg={6}>
                                    <div className={styles.LoveTextBox} >    
                                        <h2> সুস্থ সবল জীবনযাপন করতে আর শারীরিক শক্তি বৃদ্ধি করতে অর্ডার করুন আজই </h2>
                                        <h5>১২০০ টাকা</h5>
                                        <Link className={styles.Btnbg} href='#placeAnOrder'>অর্ডার করুন</Link>
                                      

                                    </div>


                                 </Col>

                               

                             </Row>


                        </Container>
              
              </section>    


              {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                     OrderConfirmFrom
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              <section className={styles.section_gap}></section>

              <section id="placeAnOrder">
              
                     <Order></Order>

              </section>



              {/* section Gap */}
              <div className={styles.section_gap}></div>



              {/* =========================================================================================================
                   Footer
               =============================================================================================================*/}
              <section>

                   <Container fluid className={styles.ContainerPad}>

                     <div className={styles.FooterBg}>

                            <Container>
                                   <Row>

                                   <div className={styles.LogoBox}>
                                          <img src="images/landing_16/logo.svg" alt="Img" />
                                   </div>


                                      <Col sm={12} md={6} lg={3}>
                                          <div className={styles.FooterBgTxtBox}>
                                                 <h4>Contact Us</h4>

                                                 <ul>
                                                        <li>
                                                               <Link href="#">
                                                                      <FiPhoneCall></FiPhoneCall> 
                                                                       +8801894844452
                                                               </Link>     
                                                        </li>

                                                        <li>
                                                               <Link href="#">
                                                                      <IoIosMail></IoIosMail> 
                                                                      support@funnelliner.com
                                                               </Link>     
                                                        </li>


                                                 </ul>

                                          </div>

                                      </Col>

                                      {/* Col----- */}


                                      <Col sm={12} md={6} lg={3}>
                                          <div className={styles.FooterBgTxtBox}>
                                                 <h4>Important Link</h4>

                                                 <ul>
                                                        <li>
                                                               <Link href="#">
                                                                      <VscDebugBreakpointData></VscDebugBreakpointData> 
                                                                       Refund Policy 
                                                               </Link>     
                                                        </li>

                                                        <li>
                                                               <Link href="#">
                                                                      <VscDebugBreakpointData></VscDebugBreakpointData> 
                                                                      Privacy Policy
                                                               </Link>     
                                                        </li>

                                                        <li>
                                                               <Link href="#">
                                                                       <VscDebugBreakpointData></VscDebugBreakpointData> 
                                                                      Terms and Conditions
                                                               </Link>     
                                                        </li>


                                                 </ul>

                                          </div>

                                      </Col>

                                      {/* Col----- */}


                                      <Col sm={12} md={6} lg={4}>
                                          <div className={styles.FooterBgTxtBox}>
                                                 <h4>অর্ডার পেতে কল করুন এই নাম্বারে</h4>
                                                 <h5>+8801894844452</h5>  

                                                 
                                          </div>

                                          <div className={styles.SocialIconBox}>
                                                    
                                                    <Link href="#"> <BsFacebook/> </Link>
                                                    <Link href="#"> <BsInstagram/> </Link>
                                                    <Link href="#"> <BsYoutube/> </Link>
                                                    
                                          </div>

                                      </Col>

                                      {/* Col----- */}


                                      <Col sm={12} md={6} lg={2}>
                                          <div className={styles.FooterBgTxtBox}>
                                                <img src="images/landing_16/img19.png" alt="" />
                                          </div>

                                      </Col>

                                      {/* Col----- */}


                                                           {/* Tiny Footer */}
                                          <div className={styles.tinyFooter}>
                                                 
                                                 <p>@ {year} All Rights Reserved </p>
                                                 <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

                                          </div>


                                          <div className={styles.Banner2Rel}>                                 
                                                 <img className={styles.BannerMAbsImgAll} src="images/landing_16/img20.svg" alt="img" />
                                                 <img className={styles.BannerMAbsImgAll2} src="images/landing_16/img21.svg" alt="img" />
                                          </div>


                                   </Row>                                  
                            </Container>
                     </div> 

                  
                     
                   </Container>

                     


              </section>




              {/* =========================================================================================================
                   Banner One 
               =============================================================================================================*/}
      


       </section>
  )

}



          
     export {
       LandingSixteen
       
     }