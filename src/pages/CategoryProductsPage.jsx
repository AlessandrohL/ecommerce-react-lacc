import { useParams } from 'react-router-dom'
import { FilterAside } from '../components/FilterAside'
import '../styles/categoriesProductsPage.css'
import productsJson from '../utils/products.json'
import { ProductCard } from '../components/ProductCard'
import { getAllBrandsByProducts } from '../helpers/getAllBrandsByProducts'
import { useEffect, useState } from 'react'

export const CategoryProductsPage = () => {
	const [products, setProducts] = useState([])
	const [brands, setBrands] = useState([])
	const [maxPrice, setMaxPrice] = useState(20000)
	const [selectedBrand, setSelectedBrand] = useState(null)
	const { categoryName: categoryTitle } = useParams()

	useEffect(() => {
		const productsFiltered = productsJson.filter(
			pr =>
				pr.category.name.toLowerCase() === categoryTitle &&
				(!selectedBrand || pr.brand.brandId === selectedBrand) &&
				pr.unitPrice <= maxPrice
		)
		setProducts(productsFiltered)
	}, [categoryTitle, selectedBrand, maxPrice])

	useEffect(() => {
		const brandsByCategory = getAllBrandsByProducts(
			productsJson.filter(
				pr => pr.category.name.toLowerCase() === categoryTitle
			)
		)
		setBrands(brandsByCategory)
	}, [categoryTitle])

	const handleSelectBrand = brandId => {
		setSelectedBrand(brandId)
	}

	const handleMaxPriceChange = e => {
		const { value } = e.target
		setMaxPrice(parseInt(value))
	}

	return (
		<section className='category-products-container'>
			<FilterAside
				brands={brands}
				selectedBrand={selectedBrand}
				categoryTitle={categoryTitle}
				onSelectBrand={handleSelectBrand}
				changePrice={handleMaxPriceChange}
				maxPrice={maxPrice}
			/>
			<article
				className={`category-products${
					products.length === 0 ? '-no-elements' : ''
				} animate__animated animate__fadeIn`}
			>
				{products.length > 0 ? (
					products?.map(product => (
						<ProductCard key={product.product_id} {...product} />
					))
				) : (
					<h2>No se encontraron productos</h2>
				)}
			</article>
		</section>
	)
}
