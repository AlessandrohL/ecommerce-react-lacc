/* eslint-disable react/prop-types */
import { RadioButton } from './RadioButton'
import '../styles/filterAside.css'

export const FilterAside = ({
	brands = [],
	categoryTitle,
	selectedBrand,
	onSelectBrand,
	changePrice,
	maxPrice,
}) => {
	const handleBrandClick = brandId => {
		if (selectedBrand === brandId) {
			onSelectBrand(null)
		} else {
			onSelectBrand(brandId)
		}
	}

	return (
		<aside className='category-aside-nav'>
			<div className='category-title'>
				<h4>{categoryTitle}</h4>
			</div>

			<div className='filter'>
				<h4 className='filter-title'>
					<i className='bi bi-funnel-fill'></i>
					filtros
				</h4>
				<article className='brand-section'>
					<h5>Marca</h5>
					<form>
						{brands.map(brand => (
							<RadioButton
								key={brand.brandId}
								id={brand.name}
								name='brand'
								value={brand.brandId}
								labelText={brand.name}
								selectBrand={handleBrandClick}
							/>
						))}
					</form>
				</article>
				<article className='price-section'>
					<h5>Precio</h5>
					<input
						type='range'
						name='maxPrice'
						id='price-range'
						min={0}
						max={20000}
						step={50}
						onChange={changePrice}
					/>
					<label htmlFor='price-range'>Precio maximo: S./ {maxPrice}</label>
				</article>
			</div>
		</aside>
	)
}
