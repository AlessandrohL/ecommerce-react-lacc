/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export const CategoryLink = ({ category, hideAside }) => {
	return (
		<li>
			<Link
				to={`/tecnologia/categoria/${category.name.toLowerCase()}`}
				onClick={() => hideAside(false)}
			>
				{category.name}
			</Link>
		</li>
	)
}
