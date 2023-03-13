import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ShippingAddress from "../../../Components/theme_1/ShippingAddress/ShippingAddress";
import { baseUrl, shopId } from "../../../constant/constant";
import { TbCurrencyTaka } from "react-icons/tb";
import iamgeOne from "../../../public/theme_1/images/product/headphoneProduct.jpg"

import {
	addToCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from "../../../redux/stateSlices/CartSlice";

import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import Header from "../Common/Header";
import Delivary from "../Common/Delivary";
import Footer from "../Common/Footer";
import SocialMedia from "../Common/SocialMedia";
import TinyFooter from "../Common/TinyFooter";

const CheckOut = () => {
	const carts = useSelector((state) => state.cart);
	const [cart, setCart] = useState([]);
	const [cartSubTotal, setCartSubTotal] = useState("");
	const dispatch = useDispatch();
	const router = useRouter();

	const [shopID, setShopID] = useState();

	useEffect(() => {
		setShopID(localStorage.getItem("shop_id"));
		setCart(carts?.cartItems);
		setCartSubTotal(carts.cartTotalAmount);
	}, [carts]);

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	const handleDecreaseCart = (product) => {
		if (product.cartQuantity < 2) {
			return;
		}
		dispatch(decreaseCart(product));
	};
	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	//order place
	const cartQuantitys = [];
	const productsId = [];
	cart.map((item, index) => {
		return [cartQuantitys.push(item.cartQuantity), productsId.push(item.id)];
	});
	const totalItem = cartQuantitys.reduce((partialSum, a) => partialSum + a, 0);

	const headers = {
		"shop-id": shopID,
	};
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	// const handleSubmitOrder = (data) => {
	// 	const postBody = {
	// 		customer_name: data.customerName,
	// 		customer_phone: data.customerMobile,
	// 		customer_address: data.customerAddress,
	// 		product_id: productsId,
	// 		product_qty: cartQuantitys,
	// 	};
	// 	axios
	// 		.post(`${baseUrl}/api/v1/customer/order/store`, postBody, {
	// 			headers: headers,
	// 		})
	// 		.then((res) => {
	// 			if (res.status === 200) {
	// 				swal(
	// 					"Thank you!",
	// 					"Your order has been successfully placed",
	// 					"success"
	// 				);
	// 				handleClearCart();


	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			swal("Something went wrong !", "error");
	// 		});
	// };

	const product = [
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

	return (<>
		<Header />
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
								<h2>Shopping cart ({cart.length} Items)</h2>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={8}>
							<div className='CheckOutTable'>

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
										{
											product.map((item, index) => {
												return (
													<tr key={index}>
														<td>
															<div className='ProductFst d_flex'>
																<div className='svg'>
																	<MdOutlineClose

																	/>
																</div>

																<div className='img'>
																	<img
																		src={item?.image}
																		alt=''
																	/>
																</div>

																<div className='Description'>
																	<p style={{ paddingLeft: "15px" }}>
																		{item.name}
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
																	onClick={() => handleAddToCart(item)}
																	className='Minus'
																>
																	<AiOutlinePlus />
																</div>
															</div>
														</td>

														<td>
															<h3 style={{ textAlign: "left" }}>
																TK 2000
															</h3>
														</td>
													</tr>
												)
											})
										}



										
									</tbody>
								</table>

							</div>

							<section className='CheckOut'>
								{/* CheckOutContent */}
								<div className='CheckOutContent'>
									<h2>Shipping Address</h2>
									<div className='ProductDescriptionLeft'>
										<form >
											<div className='LoginItem'>
												<div className='CustomeInput'>
													<TextField
														id='outlined-basic'
														label='Name *'
														variant='outlined'
														{...register("customerName", { required: true })}
													/>
													{errors.customerName && (
														<span style={{ color: "red" }}>
															Name is required
														</span>
													)}
												</div>

												<div className='CustomeInput'>
													<TextField
														id='outlined-basic'
														label='Phone Number *'
														variant='outlined'
														{...register(
															"customerMobile",
															{ required: true },
															{ min: 11, max: 15 }
														)}
													/>
													{errors.customerMobile && (
														<span style={{ color: "red" }}>
															Valid Mobile Number require
														</span>
													)}
												</div>

												<div className='CustomeInput'>
													<TextField
														id='outlined-basic'
														label='Street address *'
														variant='outlined'
														{...register("customerAddress", { required: true })}
													/>
													{errors.customerAddress && (
														<span style={{ color: "red" }}>
															Address is required
														</span>
													)}
												</div>
												<div className='ProceedToCheckout'>
													<Button  variant='contained'>
														PLACE ORDER TK 500
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
											<Image src={product[0]?.image}/>
											{/* <img src={product[0]?.image} alt='' /> */}
										</div>
										<p>TK 1000</p>
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
										<h4>TK 1000</h4>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
		<Delivary />
		<Footer />
		<SocialMedia />
		<TinyFooter />
	</>

	);
};

export default CheckOut;
