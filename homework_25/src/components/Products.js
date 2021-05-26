import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../actions/index';
import Cart from './Cart';
import './style.css';
import { loadAsyncAction } from '../actions/index';

const Products = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadAsyncAction());
	}, [dispatch]);

	return (
		<>
			<section className="section1">
				<div className="container">
					<div className="row">
						<div className="col-4">
							<ul className="nav-item nav-left-item">
								<li>Paymant</li>
								<li>About Us</li>
								<li>Contacts</li>
							</ul>
						</div>
						<div className="col-4">
							<div className="logo">
								<img src="assets/img/logos.png" alt="" />
							</div>
						</div>
						<div className="col-4">
							<ul className="nav-item nav-right-item">
								<li>Daily 11 am-9am</li>
								<li style={{ marginTop: '-10px' }}>
									<img src="assets/img/call.png" alt="" />
									<a href="">0 800 33 08 98</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="title-section-1">
						<h1>Food delivery in Kovel</h1>
						<p>
							If you decide to relax or have unexpected guests, call us. We make sure that your vacation
							is comfortable, enjoyable and delicious
						</p>
					</div>
				</div>

				<Cart />
			</section>

			<div className="row" id="pizza_row">
				{props.pizzaList.map((pizza) => (
					<div className="col-3" key={pizza.id + Math.random().toString}>
						<div className="context-pizza">
							<div className="pizza-block">
								<img src={pizza.image} alt="" />
								<div className="pizza-block-inner">
									<div className="dp-fl">
										<h5>{pizza.category}</h5>
										<span>43cm</span>
									</div>
									<div className="dp-fl">
										<p>{pizza.name}</p>
									</div>
									<div className="cost-cont">
										<span className="cost">119</span>UAH
									</div>
								</div>

								<div className="pizza-bottom-circle">
									<div className="inner-circle">
										<img src="assets/img/bag.png" alt="" />
									</div>
								</div>
							</div>
							<div className="pizza-block-hover">
								<h3>Sizes:</h3>
								<input type="radio" value="small" name="radAnswer" /> <span>Small 20cm</span>
								<br />
								<input type="radio" value="medium" name="radAnswer" />
								<span>Medium 30cm</span> <br />
								<input type="radio" value="big" name="radAnswer" /> <span>Big 70cm</span>
								<div className="align-center">
									<button className="butt" onClick={() => props.addToCart(pizza)}>
										Add to basket
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		pizzaList: state.pizzaList,
		cart: state.cart,
	};
};

const mapActionsToProps = { addToCart };

export default connect(mapStateToProps, mapActionsToProps)(Products);
