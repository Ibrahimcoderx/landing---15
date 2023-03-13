import React from 'react'
import Link from 'next/link';
// import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/landing_twelve/landing_twelve.module.css'
import { AiOutlineShoppingCart, AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { FiMail} from "react-icons/fi";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import Order from "../Common/Order";
import Menubar from "../Common/Menubar/Menubar";
import landingImageUrl from "../../../public/images/landing_12/logo.svg";
import MenubarLeft from '../Common/Menubar/MenubarLeft';




export default function LandingTwelve() {

    const today = new Date();
    const year = today.getFullYear();    

    return (
      <div className={styles.LandingTwelve}>
  
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section>

            <Container fluid className={styles.BannerCon}>

                                    <div >
                                        <div className={styles.BannerRelBox}>
                                            <img className={styles.BannerAbsBox} src="images/landing_12/m3.svg" alt="img" />
                                        </div>
                                    </div>


                <div className={styles.Banner}> 

                    <Container className={styles.BannerCon1}>

                        <MenubarLeft logoImageLeft={landingImageUrl}></MenubarLeft>

                            <Row className={styles.BannerCon1}>

                                <Col xs={12} sm={6} className={styles.myColP}>

                                <div className={styles.BannerTxtBox}>
                                    {/* <img className={styles.LogoLD} src='images/landing_12/logo.svg' alt='img'></img> */}
                                    <h1>ফোনে চার্জ হতে সময় লাগছে? <span className={styles.ColorCng}>'নিনজা টেকনিক'</span> ব্যবহার করে <span className={styles.ColorCng}>Smartphone, Smartwatch, wireless phone</span> চার্জ  করুন কম সময়ে।</h1>
                                 </div>

                                 <li> <Link href='#placeAnOrder' className={`${styles.bg} ${styles.bg1}`}> <AiOutlineShoppingCart/> অর্ডার করুন</Link></li>
                                 <div className={styles.BannerpadBtm}></div>
                               
                                </Col>

                                {/* Col---------------------------2 */}

                                <Col xs={12} sm={6}>
                                    
                                <div className={styles.BannerTxtBox2}>

                                <img className={styles.LogoSD} src='images/landing_12/logo.svg' alt='img'></img>

                                
                                    {/* <div >
                                        <div className={styles.BannerAbsBox}>
                                            <img src="images/landing_12/m3.svg" alt="img" />
                                        </div>
                                    </div> */}


                                    <img className={styles.ErrowImg} src='images/landing_12/m2.svg' alt='img'></img>
                                   

                                    <div>
                                        <div className={styles.BannerDiv}>
                                            <img className={styles.vertmove} src="images/landing_12/m.png" alt="Img"/>
                                        </div>
                                    </div>
                                   
                                 </div>


                                </Col>
                            </Row>

                        

                    </Container>


                
                </div>

            </Container>
        </section>


 
        
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner----2
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  

       <section>
            <Container fluid className={styles.BannerCon}>
                  <div className={styles.Banner2Relative}>
                    <img className={styles.Banner2Abs1} src="images/landing_12/m4.svg" alt="img" />
                    <img className={styles.Banner2Abs2} src="images/landing_12/m5.svg" alt="img" />
                   

                  </div>





                <div className={styles.Banner2MainDiv}> 
                   <div>
                        <Container>
                            <div className={styles.Banner2Relative}>
                               <div  className={styles.Banner2ImgAbs}>
                                    <div className={styles.Banner2ImgAbs1}>
                                        <img src="images/landing_12/m6.png" alt="Img" />
                                    </div>
                                        <div className={styles.Banner2ImgAbs2}>
                                             
                                            <img className={styles.mymove} src="images/landing_12/m7.png" alt="Img" />
                                              <div className={styles.Banner2MidTxt}>
                                                     <div className={styles.Banner2MidBox2}>
                                                       <h4 className={styles.Banner2MidTxt2}>মূল্যঃ ১৬৫০ টাকা</h4>
                                                     </div>
                                                  <p className={styles.Banner2MidTxt3}> অর্ডার পেতে কল করুন এই নাম্বারে </p>
                                                  <h4 className={styles.Banner2MidTxt4}>018100-45255</h4>

                                              </div>
                                        </div>
                                        
                               </div>

                            </div>
                        </Container>
                   </div>



                </div>

            </Container>
        </section>
  

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner--3
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section>
            <Container className={styles.BannerCon}>
                    
                    <div className={styles.Banner3TxtDiv}>
                        <h2>আপনার স্মার্টফোনকে দ্রুত চার্জ করতে ওয়্যারলেস চার্জিং স্ট্যান্ড কেন ব্যাবহার করবেন ?</h2>
                    </div>

                      {/* card------------------- */}

                  <Row className={styles.CardBox}>
                  
                        
                        <Col xs={12} sm={6} md={6} lg={4} className={styles.CardCol}>
                          <div className={styles.OverflowH}>
                             <div className={`${styles.CardDiv} ${styles.Card1}`}>
                                <img src="images/landing_12/m8.svg" alt="svg" />
                                <p> এই চমৎকার বৈশিষ্ট্যটির কারণে 5 মিনিটে 0 থেকে 40% পর্যন্ত Smartphone iPhone, Type-C, Micro USB  চার্জ করা সম্ভব।</p>
                              </div>
                          </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} className={styles.CardCol}>
                         <div className={styles.OverflowH}>
                             <div className={`${styles.CardDiv} ${styles.Card2}`}>
                                <img src="images/landing_12/m8.svg" alt="svg" />
                                <p> যারা ব্যস্ত, সময় নেই, কম সময়ে তাদের ফোন চার্জ করতে চান তাদের জন্য এই দ্রুত চার্জিং সিস্টেমটি একটি অত্যন্ত গুরুত্বপূর্ণ বৈশিষ্ট্য।</p>
                              </div>
                          </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} className={styles.CardCol}>
                         <div className={styles.OverflowH}>
                             <div className={`${styles.CardDiv} ${styles.Card3}`}>
                                <img src="images/landing_12/m8.svg" alt="svg" />
                                <p> দ্রুত চার্জিং স্ট্যান্ড সিস্টেমর কারণে বড় ব্যাটারিও কম সময়ে চার্জ করার সুবিধা পাচ্ছেন।</p>
                              </div>
                          </div>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={4} className={styles.CardCol}>
                           <div className={styles.OverflowH}>
                              <div className={`${styles.CardDiv} ${styles.Card4}`}>
                                <img src="images/landing_12/m8.svg" alt="svg" />
                                <p>  iPhone, Xiaomi Mi 9 Xiaomi Mi, Samsung, LG, Sony সহ সকল ধরনের রিচার্জেবল ঘড়ি চার্জ করতে পারবেন।</p>
                              </div>
                            </div>

                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} className={styles.CardCol}>
                          <div className={styles.OverflowH}>
                             <div className={`${styles.CardDiv} ${styles.Card5}`}>
                                <img src="images/landing_12/m8.svg" alt="svg" />
                                <p> চার্জার স্ট্যান্ডটি অগ্নিরোধী উপাদান দিয়ে তৈরি এটি মোটামুটি ভারী, তাই এটি একটি ডেস্কের চারপাশে স্লাইড করে রাখা যায় </p>
                              </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} className={styles.CardCol}>
                          <div className={styles.OverflowH}>
                              <div className={`${styles.CardDiv} ${styles.Card6}`}>
                                <img src="images/landing_12/m8.svg" alt="svg" />
                                <p> ১৫ শক্তি মোবাইল ফোনগুলিকে দ্রুতার দক্ষতার সাথে চার্জ করতে সাহায্য করে</p>
                              </div>
                          </div>
                        </Col>

                   

                  </Row>

            </Container>
        </section>





        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner-4
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  
        <section>
            <Container className={styles.BannerCon}>
                <div className={styles.ImgVideoBanner}>
                  <img src="images/landing_12/m9.png" alt="Img" />
                </div>
            </Container>
        </section>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner--5
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  

       <section>
            <Container fluid className={styles.BannerCon}>
              {/* <div className={styles.Banner5Rel}>
                

              </div> */}

              <div className={styles.banner5bgRltv}>
                    <div className={styles.banner5bgAbstMain}>
                          <div className={styles.banner5bgAbst1}>
                             <img className={styles.Anim3} src="images/landing_12/mm11.png" alt="" />
                          </div>
                          <div className={styles.banner5bgAbst2}>
                             <img className={styles.Anim4} src="images/landing_12/mm12.png" alt="" />
                          </div>

                    </div>
                
                        <div className={styles.banner5mainImg}>
                            <img  className={styles.vertmove2} src='images/landing_12/m10.png' alt='img'></img>
                               <div className={styles.banner5bgAbstTxt}>
                                   <h4>মুল্য-১২০০ টাকা</h4>
                                   <h5>সারা দেশে ফ্রি হোম ডেলিভারি</h5>
                                   <li> <Link href='#placeAnOrder' className={`${styles.bg} ${styles.bg2}`}> <AiOutlineShoppingCart/> অর্ডার করুন</Link></li>
                                   
                               </div>
                               
                        </div>
              </div>
          
            </Container>
        </section>



         {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
          Banner--6
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  

       <section className={styles.section_gaps}>
            <Container className={styles.BannerCon}>
              
      

                <div className={styles.Banner6TxtBox}>
                    <div className={styles.Banner6Rel}>
                      <img className={styles.Banner6Abs1} src="images/landing_12/m11.svg" alt="img" />
                      <img className={styles.Banner6Abs2} src="images/landing_12/m13.svg" alt="img" />
                      <img className={styles.Banner6Abs3} src="images/landing_12/m14.svg" alt="img" />
                      <img className={styles.Banner6Abs4} src="images/landing_12/m12.svg" alt="img" />
                      <img className={styles.Banner6Abs5} src="images/landing_12/m15.svg" alt="img" />

                  </div>



                    <h2>নিচের বাটনে ক্লিক করে এখুনি অর্ডার করুন</h2>
                    <li> <Link href='#placeAnOrder' className={`${styles.bg} ${styles.bg3}`}> <AiOutlineShoppingCart/> অর্ডার করুন</Link></li>
                  {/* <img src="images/landing_12/m11.svg" alt="img" /> */}

                </div>

            </Container>
        </section>



        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
            OrderConfirmFrom--
            ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
         <section className={styles.section_gaps}></section>

             <section id="placeAnOrder">
        
              <Order></Order>

            </section>



        
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  Banner--Footer--1
                ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <section className={styles.section_gaps}>
            <Container className={styles.BannerCon}>
                <Row>
                   <Col xs={12} sm={6}>
                      <div className={styles.Footertxt1}>
                        <div className={styles.Footertxtd}>
                            <ul>
                              <li> <h4>Contact Us</h4></li>
                              <li> <IoCallOutline/><span> +8801894844452</span></li>
                              <li><FiMail/> <span> oder@freshen.com</span></li>
                            </ul>
                        </div>
                      </div>
                    
                   </Col>

                   <Col xs={12} sm={6}>
                         <div className={styles.Footertxt2}>
                             <ul>
                               <li> <h4>Important Link</h4></li>
                                <li><Link href="#">Refund Policy </Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms and Conditions </Link></li>
                             </ul>
                         </div>

                   </Col>
                </Row>

                <div className={styles.hr}></div>
              
            </Container>
        </section>






        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                Banner Footer-2
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <section>

            <Container fluid className={styles.BannerCon}>

                <div className={styles.Footer2}>
                      <div className={styles.Footer2iconBox}>
                         <div> <Link href=""><AiOutlineTwitter/></Link><Link href=""><AiFillInstagram/></Link> <Link href=""><FaFacebookF/></Link>  <Link href=""><FaLinkedinIn/></Link> </div>
                      </div>

                      {/* Tiny Footer */}

                    <div className={styles.tinyFooter}>
                      
                      <p>@ {year} All Rights Reserved </p>
                      <p>System developed by <Link href='https://funnelliner.com/'>Funnel Liner</Link> </p>

                    </div>



                      <div className={styles.Footer2Abs1}>
                        <img src="images/landing_12/m16.svg" alt="img" />
                      </div>
                      <div className={styles.Footer2Abs2}>
                        <img src="images/landing_12/m17.svg" alt="img" />
                      </div>

                </div>    




            </Container>
        </section>





            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                  ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            




            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                  ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            



            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                  ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            



            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Banner
                  ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  
  
      </div>
    )
  }
  