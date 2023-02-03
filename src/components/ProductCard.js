import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export const ProductCard = (props) => {
	const { id, imageUrl, name, price } = props.product;
	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
		useCart();

	return (
		<div className="card">
			<Link to={`/product-details/${id}`}>
				<img
					src={imageUrl}
					className="card-img-top p-4 product-image"
					alt={name}
				/>
			</Link>
			<div className="card-body">
				<Link
					className="text-body text-decoration-none"
					to={`/product-details/${id}`}
				>
					<p className="card-title product-name">{name}</p>
				</Link>
				<p className="card-text">${price}</p>
				{getItemQuantity(id) === 0 && (
					<button
						className="btn btn-primary w-100"
						onClick={() => increaseCartQuantity(id)}
					>
						<i className="fa-solid fa-cart-shopping me-1"></i>Add to Cart
					</button>
				)}
				{getItemQuantity(id) > 0 && (
					<div className="d-flex justify-content-center align-items-center">
						<button
							className="btn btn-primary"
							type="button"
							onClick={() => decreaseCartQuantity(id)}
						>
							<i className="fa-solid fa-minus"></i>
						</button>
						<div className="mx-2">{getItemQuantity(id)} in cart</div>
						<button
							className="btn btn-primary"
							type="button"
							onClick={() => increaseCartQuantity(id)}
						>
							<i className="fa-solid fa-plus"></i>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
