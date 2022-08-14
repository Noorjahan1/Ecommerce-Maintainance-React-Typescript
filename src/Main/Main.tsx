import React from "react";
import styles from "./Main.module.css";
import Search from "../Search/Search";
import Popular from "../Popular/Popular";
import Content from "../Content/Content";
import Tag from "../Tags/Tags";
import Pagination from "../Pagination/Pagination";
import { TagPropTypes } from "../types";


function Main(tags: TagPropTypes) {
 
  const { minPrice, maxPrice, themes,ages,Compare} = tags;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainText}>
          <h1>Catalog</h1>
        </div>
        <div className={styles.formData}>
          <Search />
          <Popular />
        </div>
        <Tag
          minPrice={minPrice}
          maxPrice={maxPrice}
          themes={themes}
          ages={ages}
          Compare={Compare}
        />
        <div className="mt-5">
          <Content  Compare={Compare}/>
        </div>
      </div>
      <Pagination totalPage={6} />
    </>
  );
}
export default Main;
