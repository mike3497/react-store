import React from 'react';
import products from '../data/products.json';
import { useCart } from '../contexts/CartContext';
import { currencyFormatter } from '../helpers/currency-formatter';
import { Link } from 'react-router-dom';

export const CartItem = (props) => {
	const { id, quantity } = props;
	const product = products.filter((product) => product.id === id)[0];
	const { removeFromCart } = useCart();

	return (
		<div className="d-flex flex-row border-bottom py-4">
			<div className="me-auto d-flex flex-row">
				<Link to={`/product-details/${id}`}>
					<img
						className="me-4 object-fit-scale"
						src={product.imageUrl}
						height="64px"
						width="64px"
						alt={product.name}
					/>
				</Link>
				<div className="ms-auto">
					<Link
						className="text-body text-decoration-none"
						to={`/product-details/${id}`}
					>
						<h5>{product.name}</h5>
					</Link>
					<p className="m-0">{product.description}</p>
				</div>
			</div>
			<div className="ms-auto d-flex align-items-center">
				<div>
					<h6 className="d-inline me-4 mb-0">{quantity}</h6>
					<h6 className="d-inline me-4 mb-0 fw-bold">
						{currencyFormatter.format(product.price)}
					</h6>
					<button className="btn btn-light" onClick={() => removeFromCart(id)}>
						<i className="fa-solid fa-trash"></i>
					</button>
				</div>
			</div>
		</div>
	);
};
