import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { CategoryProductsPage } from '../pages/CategoryProductsPage'
import { MainPage } from '../pages/MainPage'
import { ProductPage } from '../pages/ProductPage'
import { Footer } from '../components/Footer'
import { OrderPage } from '../pages/OrderPage'
import { SearchPage } from '../pages/SearchPage'

export const MainRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route
					path='/tecnologia/categoria/:categoryName'
					element={<CategoryProductsPage />}
				/>
				<Route path='/producto/:productId' element={<ProductPage />} />
				<Route path='/bolsa' element={<OrderPage />} />
				<Route path='/busqueda' element={<SearchPage />} />
			</Routes>
			<Footer />
		</>
	)
}
