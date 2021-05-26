import React from 'react';

import { connect } from 'react-redux';

import './style.css';

const Cart = (props) => {
	const totalprice = props.cart.reduce((total, item) => (total += item.price), 0);
	const lent = props.cart.length;

	return (
		<>
			<div className="basket">
				<img src="assets/img/bag.png" alt="" />
				<div className="basket_elements" id="basket_elements_list">
					{props.cart.map((pizza) => (
						<div className="row" key={pizza.id + Math.random()}>
							<div className="col-2">
								<img src={pizza.image} alt="" />
							</div>
							<div className="col-8">
								<p>
									{pizza.name} <span>size: small</span>
								</p>
							</div>
							<div className="col-2">
								{pizza.price}
								<span>$</span>
							</div>
						</div>
					))}
				</div>
				<div className="counts">{lent}</div>
				<div className="sum">
					<p>{totalprice}$</p>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(Cart);
