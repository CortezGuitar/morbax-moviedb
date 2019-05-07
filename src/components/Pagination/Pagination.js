import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css';

const Pagination = ({ getPage, perPage }) => {
  const handlePageClick = page => {
    getPage(page.selected + 1);
  };

  return (
    <div className="nav-container">
      <nav
        aria-label="Page navigation"
        className="d-flex justify-content-center mt-2 nav-container border-bottom border-info"
      >
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'..'}
          breakClassName="page-item page-link"
          pageCount={perPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={page => handlePageClick(page)}
          initialPage={0}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="page-item active"
          activeLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          disabledClassName="page-item disabled"
        />
      </nav>
    </div>
  );
};

export default Pagination;
