import React, { useState, useContext } from "react";
import { DataContext } from "../Context/Context";
import styles from "./Search.module.css";
function Search() {
  const [search, setSearch] = useState<string>();

  const setSear = (event: any) => {
    setSearch(event.target.value);
  };
  const product = useContext(DataContext);

  return (
    <>
      <div className={styles.filter}>
        <div className={`${styles.searchIcon}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <input
          type="text"
          placeholder="Search among 100+ products"
          name="search"
          onChange={setSear}
          onKeyPress={(e) =>
            e.key === "Enter" ? product.search(search ? search : "") : null
          }
        />
      </div>
    </>
  );
}
export default Search;
