import '../styles/chooseus.css'

export const ChooseUs = () => {
	return (
		<section className='choose-us-section'>
			<h3>¿Por qué elegirnos?</h3>
			<article className='choose-us-cards-container'>
				<figure className='ch-us-card'>
					<i className='bi bi-box-fill'></i>
					<h4>Mejor calidad</h4>
					<p>
						Creemos en ofrecer a nuestros clientes sólo productos de la mejor
						calidad.
					</p>
				</figure>
				<figure className='ch-us-card'>
					<i className='bi bi-credit-card-2-back-fill'></i>
					<h4>Pagos seguros</h4>
					<p>
						Ofrecemos una serie de opciones de pago seguras para garantizar que
						sus transacciones sean seguras.
					</p>
				</figure>
				<figure className='ch-us-card'>
					<i className='bi bi-chat-right-dots-fill'></i>
					<h4>Atención al cliente</h4>
					<p>
						Nuestro equipo dedicado está listo para ayudarte en todo momento,
						brindándote soluciones rápidas y efectivas para tus necesidades
					</p>
				</figure>
			</article>
		</section>
	)
}
