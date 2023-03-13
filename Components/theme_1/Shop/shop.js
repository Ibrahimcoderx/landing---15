import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const axios = require("axios");
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import ReactPaginate from "react-paginate";
import { baseUrl } from "../../../constant/constant";

const shop = () => {
  const searchString = useSelector((state) => state.searchInput.searchString);
  const router = useRouter();
  const queryData = router?.query?.data;
  const [allProducts, setAllProducts] = useState([]);
  const [shopId, setShopId] = useState();
  const [shopName, setShopName] = useState();

  const dispatch = useDispatch();
  console.log(searchString);
  const handleFetchProduct = async (headers) => {
    try {
      let res = await axios({
        method: "get",
        url: `${process.env.API_URL}v1/customer/products`,
        headers: headers,
      });
      setAllProducts(res.data.data);
    } catch (err) {
      // console.log("all products", err.response.data.msg);
    }
  };

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    setShopId(localStorage.getItem("shop_id"));
    setShopName(localStorage.getItem("shop_name"));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/api/v1/customer/products`)
  //     .then((res) => {
  //       setAllProducts(res.data.data);
  //     });
  // }, [searchString]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section>
      <Container>
        <Row>
          {/* item */}
          <Col xs={12}>
            <div className='PopularProductGrid'>
              {allProducts.map((item, index) => {
                return (
                  <Link href={`/${shopName}/details/${item?.id}`}>
                    <div key={index} className='PopularProductItem'>
                      <div className='img'>
                        <img
                          style={{ maxWidth: "250px" }}
                          src={item?.main_image?.name}
                          alt=''
                        />
                      </div>
                      <div className='text'>
                        <h3>
                          BDT {item?.price} <del>{item?.discount}</del>
                        </h3>
                        <p>{item?.short_description}</p>
                        <div className='duelButton'>
                          <Link
                            onClick={() => handleAddToCart(item)}
                            href="#"
                            className='addToCart'
                          >
                            Add To Cart
                          </Link>
                          <Link onClick={() => handleBuyNow(item)} href={`/${shopName}/checkout`}>
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
      </Container>
    </section>
  );
};

export default shop;
