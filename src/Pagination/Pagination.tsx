import React, { useContext } from "react";
import styles from "./Pagination.module.css";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { DataContext } from "../Context/Context";

function Pagination({ totalPage }) {
  const product = useContext(DataContext);

  const handlePageClick = (event) => {
    const newOffset = event.selected * 6;
    //  console.log(newOffset)
    product.pageNumber(newOffset, totalPage);
  };

  //  setPageCount(Math.ceil(product.data.length / totalPage));
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next "
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={product.Page}
        previousLabel="Previous"
        className={styles.pagination}
        pageClassName={styles.number}
        previousClassName={styles.prev}
        nextClassName={styles.next}
        breakClassName={styles.number}
        activeClassName={styles.active}
        renderOnZeroPageCount={() => null}
        // onClick={(e)=>{if(e.isPrevious){product.pageNumber(0,totalPage)}}}
      />
    </>
  );
}
export default Pagination;
