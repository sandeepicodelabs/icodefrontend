import React from 'react';
import './style.css';
import paginationNext from '../../assets/images/pagination-next-icon.png';
import paginationprev from '../../assets/images/pagination-prev-icon.png';

export default function PaginationBox() {
  return (
    <>
    <div className="pagination-box">
      <div class="pagination">
        <a href="../blogs" className="page-navigate-icon">
          <img src={paginationprev} alt="St Logo" />
        </a>
        <a href="#" className="pagination-count">1</a>
        <a href="#" class="pagination-count active">2</a>
        <a href="#" className="pagination-count">3</a>
        <a href="#" className="pagination-count">4</a>
        <a href="#" className="pagination-count">5</a>
        <a href="../blog" className="page-navigate-icon">
          <img src={paginationNext} alt="St Logo" />
        </a>
      </div>
    </div>
  </>
  )
}
