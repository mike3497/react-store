import { createContext, useContext, useState } from 'react';
import products from '../data/products.json';

const CartContext = createContext({});

export function useCart() {
	return useContext(CartContext);
}

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);

	const getCartQuantity = () => {
		return items.reduce((quantity, item) => item.quantity + quantity, 0);
	};

	const getCartSubtotal = () => {
		let subtotal = 0;

		for (let i = 0; i < items.length; i++) {
			const price = products.filter((product) => product.id === items[i].id)[0]
				.price;

			subtotal += items[i].quantity * price;
		}

		return subtotal;
	};

	const getCartTax = () => {
		const subtotal = getCartSubtotal();

		return subtotal * 0.08;
	};

	const getCartTotal = () => {
		const subtotal = getCartSubtotal();
		const tax = getCartTax();

		return subtotal + tax;
	};

	const getItemQuantity = (id) => {
		return items.find((item) => item.id === id)?.quantity || 0;
	};

	const increaseCartQuantity = (id) => {
		setItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, quantity: 1 }];
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id) => {
		setItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeFromCart = (id) => {
		setItems((currentItems) => currentItems.filter((item) => item.id !== id));
	};

	return (
		<CartContext.Provider
			value={{
				items,
				getCartQuantity,
				getCartSubtotal,
				getCartTax,
				getCartTotal,
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
