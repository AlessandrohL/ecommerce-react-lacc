import { useNavigate } from 'react-router-dom'
import '../styles/noProducts.css'

export const NoProducts = () => {
	const navigate = useNavigate()

	return (
		<article className='no-products-container'>
			<i className='bi bi-cart-fill'></i>
			<p>Llena tu carro con productos para comprar</p>
			<button onClick={() => navigate('/tecnologia/categoria/smartphones')}>
				Seguir comprando
			</button>
		</article>
	)
}
