import { useState } from 'react'
import '../styles/navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { CategoriesAside } from './CategoriesAside'
import { Cart } from './Cart'
import { Toaster, toast } from 'sonner'

export const Navbar = () => {
	const [showCategories, setShowCategories] = useState(false)

	const navigate = useNavigate()

	const handleSearch = e => {
		e.preventDefault()
		const search = e.target[0].value

		if (search.length < 3) {
			toast.error('La búsqueda debe de ser mayor a 2 caracteres')
			return
		}

		navigate(`/busqueda?s=${search}`)
	}

	return (
		<header className='header'>
			<Toaster richColors closeButton />
			<nav className='header-nav'>
				<ul>
					<li className='logo'>
						<Link to='/'>Dd</Link>
					</li>
					<li className='menu-categories'>
						<button onClick={() => setShowCategories(!showCategories)}>
							<i className='bi bi-list'></i>
							<span>Menú de categorías</span>
						</button>
					</li>
					<li className='search-container'>
						<form onSubmit={handleSearch}>
							<input
								type='text'
								name='search-input'
								placeholder='Buscar productos'
							/>
							<i className='bi bi-search'></i>
						</form>
					</li>
					<li className='btn-login'>
						<Link to='/login'>Iniciar Sesión</Link>
					</li>
					<li>
						<Cart />
					</li>
				</ul>
			</nav>
			{showCategories && (
				<CategoriesAside showCategoriesAside={setShowCategories} />
			)}
		</header>
	)
}
