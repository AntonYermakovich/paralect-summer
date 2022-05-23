import React, { useState, useEffect } from 'react'
import { AccountRepos } from './AccountRepos/AccountRepos'
import { AccountInfo } from './AccountInfo/AccountInfo'
import { AccountReposEmpty } from './AccountReposEmpty/AccountReposEmpty'
import './Account.scss'

export const Account = ({ profile, repos }) => {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [repositories, setRepositories] = useState(null)
  const [index, setIndex] = useState(0)
  const [itemsPerPage] = useState(4)
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage)

  const chunk = (array, number) => {
    return array.reduce((carry, current, index) => {
      let element = carry[Math.floor(index / number)] = carry[Math.floor(index / number)] || []
      element.push(current)
      return carry
    }, [])
  }

  const handlePageClick = (event) => {
    let newOffset = (event.selected * itemsPerPage) % repos.length
    setIndex(event.selected)
    setEndOffset(newOffset + repositories[event.selected].length)
    setItemOffset(newOffset)
  }

  useEffect(() => {
    setPageCount(Math.ceil(repos.length / itemsPerPage))
    setRepositories(chunk(repos, itemsPerPage))
  }, [itemOffset, itemsPerPage, repos, endOffset])

  return (
    <div className="account">
      <div className="container">
        <div className="account__inner">

          <AccountInfo profile={profile} />

          {repos.length
            ? <AccountRepos
              repos={repos}
              itemsPerPage={itemsPerPage}
              itemOffset={itemOffset}
              endOffset={endOffset}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
              repositories={repositories}
              index={index}
            />
            : <AccountReposEmpty />
          }

        </div>
      </div>
    </div >
  )
}
