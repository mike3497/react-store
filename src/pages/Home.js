import React from 'react';
import products from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';

export const Home = () => {
	const { cartQuantity } = useCart();

	return (
		<div className="container mt-2">
			<div className="row">
				<div className="col-sm-12">
					<h1>Shop</h1>
				</div>
			</div>
			<div className="row">
				{products.map((product) => (
					<div key={product.id} className="col-sm-3">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
};
