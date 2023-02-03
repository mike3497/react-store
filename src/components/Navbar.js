import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export const Navbar = () => {
	const { getCartQuantity } = useCart();

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Shop
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/cart" className="nav-link">
								<i className="fa-solid fa-cart-shopping me-1"></i>
								{getCartQuantity()}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
