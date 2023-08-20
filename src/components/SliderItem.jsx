import '../styles/sliderItem.css'

export const SliderItem = ({ children, title, backgroundImg }) => {
	return (
		<div
			className='slider-item-container'
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			<article className='slider-item-content'>
				<h3 className='slider-item-title'>{title}</h3>
				<p className='slider-item-description'>{children}</p>
			</article>
		</div>
	)
}
