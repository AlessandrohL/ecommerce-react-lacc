/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import '../styles/productCard.css'
import { decimal } from '../utils/decimal'

export const ProductCard = ({
	product_id,
	name,
	picture,
	brand,
	unitPrice,
	discount,
}) => {
	const navigate = useNavigate()
	const rest = (unitPrice * discount) / 100
	const discountPrice = decimal(unitPrice - rest)

	return (
		<figure
			className='product-figure'
			onClick={() => navigate(`/producto/${product_id}`)}
		>
			<img src={picture} alt={name} />
			<span className='product-figure-discount'>-{discount}%</span>
			<h4 className='product-figure-brand'>{brand.name}</h4>
			<h3 className='product-figure-name'>{name}</h3>
			<span className='product-figure-discountPrice'>S/{unitPrice}</span>
			<p className='product-figure-price'>S/{discountPrice}</p>
		</figure>
	)
}
