import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { currencyFormatter } from '../helpers/currency-formatter';
import { useCart } from '../contexts/CartContext';

export const ProductDetails = () => {
	const { id } = useParams();
	const product = products.filter((product) => product.id === id)[0];
	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
		useCart();

	return (
		<div className="container mt-2">
			<div className="row">
				<div className="col-sm-6">
					<img
						className="img-fluid"
						src={product.imageUrl}
						alt={product.name}
					/>
				</div>
				<div className="col-sm-6">
					<h1>{product.name}</h1>
					<p>{product.description}</p>
					<h5>{currencyFormatter.format(product.price)}</h5>
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
		</div>
	);
};
