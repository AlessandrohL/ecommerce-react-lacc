import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import productsJson from '../utils/products.json'
import { ProductCard } from '../components/ProductCard'
import queryString from 'query-string'

import '../styles/searchPage.css'

export const SearchPage = () => {
	const [products, setProducts] = useState([])

	const location = useLocation()
	const { s: search } = queryString.parse(location.search)

	useEffect(() => {
		const productsSearched = productsJson.filter(pr =>
			pr.name.toLowerCase().includes(search.toLowerCase())
		)

		setProducts(productsSearched)
	}, [search])

	return (
		<section className='search-section'>
			<div className='search-section-title'>
				Búsqueda: <span>{search}</span>
			</div>
			<article
				className={`search-section-products${
					products.length === 0 ? '-no-elements' : ''
				}`}
			>
				{products.length === 0 ? (
					<h2>No se encontraron productos relacionados a la búsqueda</h2>
				) : (
					products?.map(pr => <ProductCard key={pr?.product_id} {...pr} />)
				)}
			</article>
		</section>
	)
}
