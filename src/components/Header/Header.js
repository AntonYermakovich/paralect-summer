import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from './img/logo.svg'
import { ReactComponent as Search } from './img/search.svg'

export const Header = ({ setUsername, searchUser }) => {
	return (
		<header className="header">
			<Logo className="header__logo" />

			<div className="header-field">
				<Search className="header-field__icon" />
				<input
					onKeyDown={searchUser}
					onChange={e => setUsername(e.target.value)}
					className="header-field__input"
					type="text"
					placeholder="Enter GitHub username"
				/>
			</div>
		</header>
	)
}
