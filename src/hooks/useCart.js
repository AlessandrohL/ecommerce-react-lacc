import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


export const useCart = () => {
	const cart = useContext(CartContext)

	if (cart === undefined) {
		throw new Error('useCart debe utilizarse dentro de un CartProvider')
	}

	return cart
}
