/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { decimal } from '../utils/decimal'
import '../styles/purchaseProduct.css'
import { CartContext } from '../context/CartContext'

export const PurchaseProduct = ({
	product_id,
	name,
	picture,
	unitPrice,
	quantity,
	total,
}) => {
	const { removeFromCart } = useContext(CartContext)

	return (
		<figure className='purchase-product'>
			<div className='purchase-product-image'>
				<img src={picture} alt={name} />
			</div>

			<div className='purcharse-product-container'>
				<div className='purchase-product-info'>
					<h5 className='purchase-product-info-name'>{name}</h5>
					<span className='purchase-product-info-id'>PI: {product_id}</span>
					<div className='purchase-product-price'>
						<span>Precio: {unitPrice}</span>
						<span>Cantidad: {quantity}</span>
					</div>
				</div>
			</div>
			<div className='purchase-product-delete'>
				<div>
					<span className='total'>Total</span>
					<span className='total-price'>S/ {decimal(total)}</span>
				</div>
				<button onClick={() => removeFromCart(product_id)}>
					<i className='bi bi-trash-fill'></i>
				</button>
			</div>
		</figure>
	)
}
