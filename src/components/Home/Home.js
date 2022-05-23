import React from 'react'
import './Home.scss'
import { ReactComponent as Search } from './img/search.svg'

export const Home = () => {
	return (
		<div className="home">
			<Search className="home__icon" />
			<p className="home__title title">
				Start with searching a GitHub user
			</p>
		</div>
	)
}
