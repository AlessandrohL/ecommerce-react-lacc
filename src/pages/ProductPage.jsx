import { useParams } from 'react-router-dom'
import '../styles/productPage.css'
import { getProductById } from '../helpers/getProductById'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Specification } from '../components/Specification'
import { useCart } from '../hooks/useCart'
import useExpirationDate from '../hooks/useExpirationDate'
import { OffertTime } from '../components/OffertTime'
import { decimal } from '../utils/decimal'

export const ProductPage = () => {
	const { productId } = useParams()
	const { addToCart, cart } = useCart()
	const product = getProductById(productId)
	const [quantity, setQuantity] = useState(1)

	const {
		product_id,
		name,
		brand,
		picture,
		unitPrice,
		productDetails,
		discount,
		discountEndDate,
	} = product

	const rest = (unitPrice * discount) / 100
	const discountPrice = decimal(unitPrice - rest)

	const timeLeft = useExpirationDate(discountEndDate)
	const { days, hours, minutes, seconds } = timeLeft

	const handleIncrementQuantity = () => {
		setQuantity(prev => prev + 1)
	}

	const handleDecrementQuantity = () => {
		if (quantity < 2) return

		setQuantity(prev => prev - 1)
	}

	const handleCart = quantity => {
		const productInCart = {
			product_id,
			name,
			picture,
			unitPrice: discountPrice,
			quantity,
		}
		addToCart(productInCart)

		const exists = cart.some(pr => pr.product_id === product_id)

		if (exists) {
			toast('Se aumentó la cantidad')
			return
		}

		toast.success('El producto se añadió al carrito')
	}

	return (
		<>
			<Toaster closeButton richColors />
			<section className='product-section-container'>
				<div className='psi-ad-offert'>
					<h6 className='psi-ad-offert-title'>
						<i className='bi bi-megaphone-fill'></i>
						La oferta termina en:
					</h6>
					<section className='psi-ad-offert-time-section'>
						<OffertTime time={days} timeUnitsString='Días' />
						<OffertTime time={hours} timeUnitsString='Horas' />
						<OffertTime time={minutes} timeUnitsString='Minutos' />
						<OffertTime time={seconds} timeUnitsString='Segundos' />
					</section>
				</div>
				<section className='product-section'>
					<figure className='product-section-image'>
						<img src={picture} alt={name} />
					</figure>
					<article className='product-section-info'>
						<h3 className='psi-product-name'>{name}</h3>
						<span className='psi-product-id'>codigo {product_id}</span>
						<span className='psi-product-brand'>{brand?.name}</span>
						<span className='psi-product-discount'>-{discount}% menos.</span>
						<span className='psi-product-pricePrevious'>S/{unitPrice}</span>
						<h4 className='psi-product-price'>S/{discountPrice}</h4>
						<div className='product-options'>
							<div className='product-option-quantity'>
								<button onClick={() => handleDecrementQuantity()}>-</button>
								<input
									type='number'
									min='1'
									max='30'
									readOnly
									value={quantity}
								/>
								<button onClick={() => handleIncrementQuantity()}>+</button>
							</div>
							<button
								className='product-option-shopping'
								onClick={() => handleCart(quantity)}
							>
								Agregar al carrito
							</button>
						</div>
						<div className='product-info-delivery'>
							<div className='product-info-service'>
								<i className='bi bi-truck'></i>
								<p>Disponible envio a domicilio</p>
							</div>
							<p className='product-info-span'>
								Los mejores productos de {brand?.name} llegaron para ti.
								Encuéntralos en DigitalDen.
							</p>
						</div>
					</article>
				</section>
				<section className='product-section-specifications'>
					<h2 className='product-specifications-title'>especificaciones</h2>
					<article className='product-specifications-container'>
						{productDetails?.length > 0 ? (
							productDetails.map(pd => (
								<Specification
									key={pd.productDetailId}
									name={pd.detailType.name}
									description={pd.description}
								/>
							))
						) : (
							<h3>No hay información disponible</h3>
						)}
					</article>
				</section>
			</section>
		</>
	)
}
