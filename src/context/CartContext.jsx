/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	useEffect(() => {
		const cartStorage = localStorage.getItem('ddTestCart')

		if (cartStorage) {
			const cartParsed = JSON.parse(cartStorage)
			setCart(cartParsed)
			return
		}

		localStorage.setItem('ddTestCart', JSON.stringify(cart))
	}, [])

	const addToCart = product => {
		const productInCart = cart.findIndex(
			item => item.product_id === product.product_id
		)

		if (productInCart >= 0) {
			const newCart = JSON.parse(JSON.stringify(cart))
			newCart[productInCart].quantity += 1
			newCart[productInCart].total =
				parseFloat(newCart[productInCart].unitPrice) *
				newCart[productInCart].quantity
			localStorage.setItem('ddTestCart', JSON.stringify(newCart))
			return setCart(newCart)
		}

		const { unitPrice, quantity } = product

		const newCart = [...cart, { ...product, total: unitPrice * quantity }]
		setCart(newCart)
		localStorage.setItem('ddTestCart', JSON.stringify(newCart))
	}

	const decreaseQuantity = productId => {
		const productInCartIndex = cart.findIndex(
			item => item.product_id === productId
		)

		if (productInCartIndex >= 0) {
			const newCart = JSON.parse(JSON.stringify(cart))
			const newQuantity = newCart[productInCartIndex].quantity - 1

			if (newQuantity > 0) {
				newCart[productInCartIndex].quantity = newQuantity
				newCart[productInCartIndex].total =
					parseFloat(newCart[productInCartIndex].unitPrice) * newQuantity
				setCart(newCart)
			} else {
				newCart.splice(productInCartIndex, 1)
				setCart(newCart)
			}

			localStorage.setItem('ddTestCart', JSON.stringify(newCart))
		}
	}

	const removeFromCart = productId => {
		const newCart = cart.filter(item => item.product_id !== productId)
		setCart(newCart)
		localStorage.setItem('ddTestCart', JSON.stringify(newCart))
	}

	const clearCart = () => {
		setCart([])
		localStorage.setItem('ddTestCart', JSON.stringify(cart))
	}

	console.log(cart)

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				decreaseQuantity,
				clearCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
