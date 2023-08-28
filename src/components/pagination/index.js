import React from "react";
import { Link } from "gatsby";
import "./pagination.scss";
import paginationNext from "../../assets/images/pagination-next-icon.png";
import paginationprev from "../../assets/images/pagination-prev-icon.png";

export default function PaginationBox(props) {
  //const { pageContext, data } = props;

  return (
    <>
      <div className="pagination-box">
        <div className="pagination">
          <a href="/blog" className="page-navigate-icon">
            <img src={paginationprev} alt="St Logo" />
          </a>

          <a href="/blog" className="pagination-count">
            1
          </a>
          <a href="/blog" className="pagination-count active">
            2
          </a>
          <a href="../blog" className="page-navigate-icon">
            <img src={paginationNext} alt="St Logo" />
          </a>
          {/* <Blog articles={data.articles.edges} pageContext={pageContext} /> */}
        </div>
      </div>
    </>
  );
}

// const PaginationBox = ({ numPages, currentPage }) => {
//   console.log("numPages",numPages,currentPage)
//   return (
//     <div className="pagination">
//       {Array.from({ length: numPages }).map((_, i) => (
//         <Link
//           key={`pagination-number${i + 1}`}
//           to={`/blog/${i === 0 ? "" : i + 1}`}
//           className={currentPage === i + 1 ? "active" : ""}
//         >
//           {i + 1}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default PaginationBox;

//   <>
//   <div className="pagination-box">
//     <div className="pagination">
//       <a href="/blog" className="page-navigate-icon">
//         <img src={paginationprev} alt="St Logo" />
//       </a>

//       <a href="/blog" className="pagination-count">1</a>
//       <a href="/blog" className="pagination-count active">2</a>
//       <a href="../blog" className="page-navigate-icon">
//         <img src={paginationNext} alt="St Logo" />
//       </a>
//         {/* <Blog articles={data.articles.edges} pageContext={pageContext} /> */}
//     </div>
//   </div>
// </>
