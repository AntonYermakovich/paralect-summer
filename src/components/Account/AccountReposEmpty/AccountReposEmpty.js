import React from 'react'
import { ReactComponent as Empty } from './img/empty.svg'

export const AccountReposEmpty = () => {
	return (
		<div className="account-repositories__empty">
			<Empty />
			<p>Repository list is empty</p>
		</div>
	)
}
