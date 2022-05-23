import React from 'react'
import { ReactComponent as Followers } from './img/followers.svg'
import { ReactComponent as Following } from './img/following.svg'

export const AccountInfo = ({ profile }) => {
	return (
		<div className="account-user">
			<div className="account-user__photo">
				<img src={profile.avatar_url} alt="img" />
			</div>

			<p className="account-user__name">
				{profile.name}
			</p>

			<a href={profile.html_url} target="_blank" without="true" rel="noreferrer" className="account-user__nickname">
				{profile.login}
			</a>

			<div className="account-user__follow">
				<div className="account-user__follow-block">
					<Followers />
					<p>{profile.followers} followers</p>
				</div>
				<div className="account-user__follow-block">
					<Following />
					<p>{profile.following} following</p>
				</div>
			</div>
		</div>
	)
}
