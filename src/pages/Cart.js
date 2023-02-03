import React from 'react';
import { CartItem } from '../components/CartItem';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { currencyFormatter } from '../helpers/currency-formatter';

export const Cart = () => {
	const { items, getCartQuantity, getCartSubtotal, getCartTax, getCartTotal } =
		useCart();

	return (
		<div className="container mt-2">
			<div className="row">
				<div className="col-12">
					<h1>Cart</h1>
					<Link to="/" className="text-decoration-none">
						<i className="fa-solid fa-arrow-left me-1"></i>Continue Shopping
					</Link>
					{getCartQuantity() === 0 && <p>You have no items in your cart.</p>}
					{getCartQuantity() > 0 && (
						<p>You have {getCartQuantity()} items in your cart</p>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col-lg-9">
					<div className="vstack">
						{items.map((item) => (
							<CartItem key={item.id} id={item.id} quantity={item.quantity} />
						))}
					</div>
				</div>
				{getCartQuantity() > 0 && (
					<div className="col-lg-3">
						<div className="v-stack">
							<h5>Order Summary</h5>
							<div>
								<span>Subtotal:</span>
								<span className="float-end">
									{currencyFormatter.format(getCartSubtotal())}
								</span>
							</div>
							<div>
								<span>Tax:</span>
								<span className="float-end">
									{currencyFormatter.format(getCartTax())}
								</span>
							</div>
							<h6>
								<span>Total:</span>
								<span className="float-end">
									{currencyFormatter.format(getCartTotal())}
								</span>
							</h6>
							<button className="btn btn-primary w-100">Checkout</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
