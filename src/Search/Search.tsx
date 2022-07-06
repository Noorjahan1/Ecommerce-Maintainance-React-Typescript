import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import styles from "./Search.module.css";
function Search() {
  const product = useContext(DataContext);
  return (
    <>
      <div className={styles.filter}>
        <div className={`${styles.searchIcon}`}>
          <i className="fa-solid fa-magnifying-glass"/>
        </div>

        <input
          type="search"
          placeholder="Search among 100+ products"
          name="search"
          onChange={(event)=> product.search(event.target.value)}
        />
      </div>
    </>
  );
}
export default Search;
