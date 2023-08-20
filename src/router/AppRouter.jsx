import { Route, Routes } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { LoginPage } from '../pages/LoginPage'
import { MainRoutes } from './MainRouter'

export const AppRouter = () => {
	return (
		<CartProvider>
			<Routes>
				<Route path='/*' element={<MainRoutes />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</CartProvider>
	)
}
