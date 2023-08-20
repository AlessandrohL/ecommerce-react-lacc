import categories from '../utils/categories.json'
import { CategoryLink } from './CategoryLink'

import '../styles/categoriesAside.css'
import 'animate.css'

export const CategoriesAside = ({ showCategoriesAside }) => {
	return (
		<aside className='categories-aside'>
			<article className='categories-content-container'>
				<nav>
					<ul>
						{categories.map(category => (
							<CategoryLink
								key={category.categoryId}
								category={category}
								hideAside={showCategoriesAside}
							/>
						))}
					</ul>
				</nav>
				<div className='categories-content-promotion'></div>
			</article>
		</aside>
	)
}
