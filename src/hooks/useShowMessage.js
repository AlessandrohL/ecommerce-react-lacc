import { useState } from 'react'

const defaultTransformValue = 'translateY(-150%)'

export const useShowMessage = () => {
	const [transformValue, setTransformValue] = useState(defaultTransformValue)

	function handleShowError() {
		setTransformValue('translateY(0)')
		setTimeout(() => {
			setTransformValue(defaultTransformValue)
		}, 3500)
	}

	return {
		transformValue,
		handleShowError,
	}
}
