import React from 'react';
import './style.css';
import paginationNext from '../../assets/images/pagination-next-icon.png';
import paginationprev from '../../assets/images/pagination-prev-icon.png';
import Blog from '../../pages/blog';

export default function PaginationBox(props) {
  const { pageContext, data } = props;
  console.log('pagination',props)

  return (
    <>
    <div className="pagination-box">
      <div class="pagination">
        <a href="/blogs" className="page-navigate-icon">
          <img src={paginationprev} alt="St Logo" />
        </a>
        <a href="/blogs" className="pagination-count">1</a>
        <a href="/blogs" class="pagination-count active">2</a>
        <a href="/blog" className="page-navigate-icon">
          <img src={paginationNext} alt="St Logo" />
        </a>
          {/* <Blog articles={data.articles.edges} pageContext={pageContext} /> */}
      </div>
    </div>
  </>
  )
}
