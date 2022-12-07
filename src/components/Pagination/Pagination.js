import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPageNumber, pageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style>
        {`
      @media (max-width: 768px){
        .next, .prev {
          display:none;
        }

        .pagination {
          font-size: 14px;
        }
      }`}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-3 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-outline-primary next"
        previousClassName="btn btn-outline-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
