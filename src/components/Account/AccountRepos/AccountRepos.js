import React from 'react'
import ReactPaginate from 'react-paginate'

export const AccountRepos = ({ repos, itemsPerPage, itemOffset, endOffset, pageCount, handlePageClick, repositories, index }) => {
	return (

		<div className="account-repositories">
			<p className="account-repositories__title">
				Repositories ({repos.length})
			</p>

			<div className="account-repositories__list">
				{repositories && repositories[index].map(item => (
					<div key={item.id} className="repository">
						<a href={item.html_url} target="_blank" without="true" rel="noreferrer" className="repository__title">{item.name}</a>
						<p className="repository__description">{item.description}</p>
					</div>
				))}

			</div>

			{repos.length > itemsPerPage &&
				<div className="account-repositories__paginations">
					<p className="account-repositories__paginations-text">
						{itemOffset + 1}-{endOffset} of {repos.length} items
					</p>

					<ReactPaginate
						breakLabel="..."
						nextLabel=">"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={1}
						pageCount={pageCount}
						previousLabel="<"
						renderOnZeroPageCount={null}
						containerClassName={'pagination'}
						activeClassName={'active'}
					/>
				</div>
			}
		</div>
	)
}
