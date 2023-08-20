import '../styles/specification.css'

export const Specification = ({ name, description }) => {
	return (
		<div className='product-specification-content'>
			<h5 className='specification-title'>{name}</h5>
			<p className='specification-description'>{description}</p>
		</div>
	)
}
