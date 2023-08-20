/* eslint-disable react/prop-types */
import '../styles/radioButton.css'

export const RadioButton = ({ id, value, name, labelText, selectBrand }) => {
	return (
		<div className='brand-option'>
			<input
				type='radio'
				name={name}
				value={value}
				id={id}
				className='radio-input'
			/>
			<span className='radio-container'></span>
			<label
				htmlFor={id}
				className='radio-label'
				onClick={() => selectBrand(value)}
			>
				{labelText}
			</label>
		</div>
	)
}
