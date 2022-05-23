import React from 'react'
import './Error.scss'
import { ReactComponent as User } from './img/user.svg'

export const Error = () => {
  return (
    <div className="error">
      <User className="error__icon" />

      <p className="error__title title">
        User not found
      </p>
    </div>
  )
}
