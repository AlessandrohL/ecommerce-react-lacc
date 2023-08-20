/* eslint-disable react/prop-types */
import '../styles/formField.css'

export const FormField = ({
	id,
	type,
	name,
	value,
	onChange,
	labelText,
	pattern = '',
	onFocus = null,
	required = false,
	inputMode = 'text',
}) => {
	return (
		<fieldset className='form-fieldset'>
			<label htmlFor={id}>{labelText}</label>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				pattern={pattern}
				inputMode={inputMode}
				required={required}
				onFocus={onFocus}
			/>
		</fieldset>
	)
}
