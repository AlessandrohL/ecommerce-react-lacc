import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderItem } from '../components/SliderItem'
import { SwiperNavButtons } from '../components/SwiperNavButtons'
import { ChooseUs } from '../components/ChooseUs'
// import { discount } from '../helpers/discount'

export const MainPage = () => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, A11y, Autoplay]}
				slidesPerView={1}
				autoplay={{ delay: 3000 }}
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<SliderItem
						title='Conéctate sobre la marcha'
						backgroundImg='/img/smartphones.jpg'
					>
						Mantente al día de las últimas tendencias y conectado en cualquier
						lugar con nuestra selección de smartphones. Elige entre las mejores
						marcas y opciones asequibles, con funciones avanzadas para mejorar
						tu experiencia móvil
					</SliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<SliderItem
						title='Controle su forma física y manténgase conectado'
						backgroundImg='/img/smartwatch.jpg'
					>
						Mejora tu estilo de vida con nuestra gama de smartwatches. Controla
						tus objetivos de forma física y mantente conectado a tu vida digital
						con facilidad. Elige entre marcas populares y una gran variedad de
						estilos y funciones.
					</SliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<SliderItem
						title='La experiencia de juego definitiva'
						backgroundImg='/img/gaming.jpg'
					>
						Lleva tu experiencia de juego al siguiente nivel con nuestras
						tarjetas gráficas de alto rendimiento. Elija entre las mejores
						marcas y la última tecnología para disfrutar de un juego fluido y
						rápido.
					</SliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<SliderItem
						title='Escucha con estilo y comodidad'
						backgroundImg='/img/headphones.jpg'
					>
						Mejore su experiencia de audio con nuestra selección de auriculares
						y cascos. Elija entre los últimos modelos y las mejores marcas, con
						opciones inalámbricas y de cancelación de ruido para disfrutar de
						una experiencia auditiva personalizada.
					</SliderItem>
				</SwiperSlide>
				<SwiperNavButtons />
			</Swiper>
			<ChooseUs />
		</>
	)
}
