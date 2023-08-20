import { useSwiper } from 'swiper/react'
import '../styles/swiperNavButtons.css'

export const SwiperNavButtons = () => {
	const swiper = useSwiper()

	return (
		<div className='swiper-nav-btns'>
			<button className='swiper-btn-prev' onClick={() => swiper.slidePrev()}>
				<i className='bi bi-caret-left'></i>
			</button>
			<button className='swiper-btn-next' onClick={() => swiper.slideNext()}>
				<i className='bi bi-caret-right'></i>
			</button>
		</div>
	)
}
