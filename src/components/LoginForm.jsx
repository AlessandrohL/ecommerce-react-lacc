/* eslint-disable react/prop-types */

import { useForm } from '../hooks/useForm'
import { FormField } from './FormField'

export const LoginForm = ({
	setErrorMessage,
	handleShowError,
	showFormRegister,
}) => {
	const { formState, onInputChange } = useForm({
		email: '',
		password: '',
	})

	const { email, password } = formState

	const showError = message => {
		setErrorMessage(message)
		handleShowError()
	}

	return (
		<>
			<h2 className='form-title'>Iniciar sesión en DigitalDen</h2>

			<form className='form' onSubmit={e => e.preventDefault()}>
				<FormField
					id='email'
					type='text'
					name='email'
					value={email}
					onChange={onInputChange}
					labelText='Correo electrónico'
				/>

				<FormField
					id='pass'
					type='password'
					name='password'
					value={password}
					onChange={onInputChange}
					labelText='Contraseña'
				/>

				<button
					className='btn-form-login'
					onClick={() =>
						showError(
							'Lo sentimos, no se puedo iniciar sesión. Inténtalo más tarde'
						)
					}
				>
					Iniciar sesión
				</button>

				<p className='link-register'>
					¿No tiene una cuenta?{' '}
					<span onClick={showFormRegister}>Registrate</span>
				</p>
			</form>
		</>
	)
}
