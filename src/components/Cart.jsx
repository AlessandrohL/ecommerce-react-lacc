import { Link } from 'react-router-dom'
import '../styles/cart.css'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import { ProductCart } from './ProductCart'

export const Cart = () => {
	const [showCartAside, setShowCartAside] = useState(false)
	const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart()

	return (
		<>
			<button
				className='btn-shopping-cart'
				onClick={() => setShowCartAside(true)}
			>
				<i className='bi bi-cart-fill'></i>
				<span className='cart-products-length'>{cart.length}</span>
			</button>
			<aside className={`cart-aside ${showCartAside && 'cart-aside-show'}`}>
				{cart.map(product => (
					<ProductCart
						key={product.product_id}
						product={product}
						add={addToCart}
						dec={decreaseQuantity}
						remove={removeFromCart}
					/>
				))}
				<article className='cart-aside-order'>
					<button
						className='btn-cart-close'
						onClick={() => setShowCartAside(false)}
					>
						Cerrar
					</button>
					<Link to='/bolsa' className='btn-cart-bag'>
						Ir a la bolsa
					</Link>
				</article>
			</aside>
		</>
	)
}
