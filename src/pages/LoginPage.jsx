import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RegisterForm } from '../components/RegisterForm'
import { LoginForm } from '../components/LoginForm'
import { useShowMessage } from '../hooks/useShowMessage'

import '../styles/login.css'

export const LoginPage = () => {
	const [showFormRegister, setShowFormRegister] = useState(false)

	const [errorMessage, setErrorMessage] = useState(null)

	const { transformValue, handleShowError } = useShowMessage()

	function handleShowForm() {
		setShowFormRegister(!showFormRegister)
	}

	return (
		<section className='row login-page'>
			<article className='col-md-4 d-none d-md-block bg-image'>
				<Link to='/'>
					Digital<span>Den</span>
				</Link>
			</article>
			<article className='col-12 col-md-8 form-container'>
				<p className='error-message' style={{ transform: transformValue }}>
					{errorMessage}
				</p>

				{showFormRegister ? (
					<RegisterForm
						setErrorMessage={setErrorMessage}
						handleShowError={handleShowError}
						showFormRegister={handleShowForm}
					/>
				) : (
					<LoginForm
						setErrorMessage={setErrorMessage}
						handleShowError={handleShowError}
						showFormRegister={handleShowForm}
					/>
				)}
			</article>
		</section>
	)
}
