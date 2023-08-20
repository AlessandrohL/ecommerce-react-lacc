/* eslint-disable react/prop-types */
import '../styles/offertTime.css'

export const OffertTime = ({ time, timeUnitsString = '' }) => {
	return (
		<div className='psi-ad-offert-time-container'>
			<div className='psi-ad-offert-time-number'>{time}</div>
			<span className='psi-ad-offert-time-unit'>{timeUnitsString}</span>
		</div>
	)
}
