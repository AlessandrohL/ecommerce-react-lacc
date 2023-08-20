import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { decimal } from '../utils/decimal'
import { NoProducts } from '../components/noProducts'
import { Toaster, toast } from 'sonner'

import '../styles/orderPage.css'
import { PurchaseProduct } from '../components/PurchaseProduct'
export const OrderPage = () => {
	const { cart } = useContext(CartContext)

	const totalProducts = cart.map(pr => pr.total)
	const totalAll = totalProducts.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	)

	const handleErrorMessage = () => {
		toast.error('Las compras no estan disponibles.')
	}

	return (
		<>
			<Toaster richColors closeButton />
			<section className='order-section'>
				<article className='order-purchase'>
					<header>
						<div className='order-purchase-logo'>Dd</div>
						<div className='order-purchase-title'>Carro de compra</div>
					</header>
					<section className='order-purchase-products'>
						{cart.length === 0 ? (
							<NoProducts />
						) : (
							cart.map(pr => <PurchaseProduct key={pr.product_id} {...pr} />)
						)}
					</section>
				</article>
				<article className='order-resume'>
					<h4 className='order-resume-title'>Resumen</h4>
					<div className='order-resume-subtotal'>
						<h5>Subtotal</h5>
						<span>S/ {decimal(totalAll)}</span>
					</div>
					<div className='order-resume-total'>
						<h5>Total</h5>
						<span>S/ {decimal(totalAll)}</span>
					</div>
					<button disabled={cart.length === 0} onClick={handleErrorMessage}>
						Continuar
					</button>
				</article>
			</section>
		</>
	)
}
