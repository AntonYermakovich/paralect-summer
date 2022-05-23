import React, { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Error } from './components/Error/Error'
import { Account } from './components/Account/Account'
import { Loader } from './components/Loader/Loader'

function App() {
  const [username, setUsername] = useState('')
  const [currentPage, setCurrentPage] = useState('Home')
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(null)
  const [userRepos, setUserRepos] = useState(null)

  const searchUser = async e => {
    try {
      if (e.code === 'Enter') {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${username}`)
        const candidate = await res.json()

        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        const repos = await response.json()

        setUserRepos(repos)
        setProfile(candidate)
        setLoading(false)

        candidate.message === 'Not Found' && setCurrentPage('Error')
        !candidate.message && setCurrentPage('Account')
      }
    } catch (e) {
      setLoading(false)
      setCurrentPage('Error')
    }
  }

  return (
    <div className="wrapper">
      <Header setUsername={setUsername} searchUser={searchUser} />

      {loading && <Loader />}

      <main>
        {!loading && currentPage === 'Home' && <Home />}
        {!loading && currentPage === 'Error' && <Error />}
        {!loading && currentPage === 'Account' && <Account profile={profile} repos={userRepos} />}
      </main>

    </div>
  )
}

export default App
