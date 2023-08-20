/* eslint-disable react/prop-types */
export const ProductCart = ({ product, add, dec, remove }) => {
	return (
		<div className='cart-aside-product'>
			<button
				className='cart-product-remove'
				onClick={() => remove(product.product_id)}
			>
				<i className='bi bi-trash-fill'></i>
			</button>
			<img
				src={product.picture}
				alt={product.name}
				className='cart-product-image'
			/>
			<div className='cart-product-content'>
				<h5>{product.name}</h5>
				<span>S./{product.unitPrice}</span>
			</div>
			<div className='cart-product-buttons'>
				<button className='cart-product-increment' onClick={() => add(product)}>
					+
				</button>
				<span>{product.quantity}</span>
				<button
					className='cart-product-decrement'
					onClick={() => dec(product.product_id)}
				>
					-
				</button>
			</div>
		</div>
	)
}
