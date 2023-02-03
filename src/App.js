import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';

function App() {
	return (
		<CartProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product-details/:id" element={<ProductDetails />} />
			</Routes>
		</CartProvider>
	);
}

export default App;
