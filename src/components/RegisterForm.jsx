/* eslint-disable react/prop-types */
import { FormField } from './FormField'
import { useForm } from '../hooks/useForm'

export const RegisterForm = ({
	setErrorMessage,
	handleShowError,
	showFormRegister,
}) => {
	const { formState, onInputChange } = useForm({
		firstnames: '',
		lastnames: '',
		email: '',
		password: '',
		address: '',
		dni: '',
		phone: '',
	})

	const { firstnames, lastnames, email, password, address, dni, phone } =
		formState

	const showError = message => {
		setErrorMessage(message)
		handleShowError()
	}

	return (
		<>
			<h2 className='form-title'>Regístrate en DigitalDen</h2>

			<form className='form' onSubmit={e => e.preventDefault()}>
				<FormField
					id='firstnames'
					type='text'
					name='firstnames'
					value={firstnames}
					onChange={onInputChange}
					labelText='Nombres'
				/>

				<FormField
					id='lastnames'
					type='text'
					name='lastnames'
					value={lastnames}
					onChange={onInputChange}
					labelText='Apellidos'
				/>

				<FormField
					id='email'
					type='text'
					name='email'
					value={email}
					onChange={onInputChange}
					labelText='Correo electrónico'
				/>

				<FormField
					id='address'
					type='text'
					name='address'
					value={address}
					onChange={onInputChange}
					labelText='Dirección'
				/>

				<FormField
					id='dni'
					type='text'
					name='dni'
					value={dni}
					onChange={onInputChange}
					labelText='DNI'
				/>

				<FormField
					id='phone'
					type='text'
					name='phone'
					value={phone}
					onChange={onInputChange}
					labelText='Teléfono'
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
							'Lo sentimos, no se puedo registrar sus datos. Inténtalo más tarde'
						)
					}
				>
					Crear cuenta
				</button>

				<p className='link-register'>
					¿Ya es miembro? <span onClick={showFormRegister}>Iniciar sesión</span>
				</p>
			</form>
		</>
	)
}
