import styles from "./Tags.module.css";
import { TagPropTypes } from "../types";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/Context";
const Tag = (tags: TagPropTypes) => {
  const product = useContext(DataContext);
  const { minPrice, maxPrice, themes, ages } = tags;
  const tagArray = [...themes, ...ages];
  const [prices, setPrices] = useState([minPrice, maxPrice]);
  const addPrices = (minPrice, maxPrice) => {
    setPrices([minPrice, maxPrice]);
  };
  const removePrice = () => {
    setPrices([]);
    product.search("");
  };
  useEffect(() => {
    addPrices(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

  const hideDisplay = (event: any) => {
    event.target.parentElement.style.display = "none";
  };

  return (
    <>
      <div className={styles.tag}>
        {prices.length !== 0 ? (
          minPrice !== 0 && maxPrice !== 0 ? (
            <div className={styles.tagItem}>
              <h3>{`Price : From ${prices[0]} to ${prices[1]}`}</h3>

              <i className="fa-solid fa-xmark" onClick={removePrice} />
            </div>
          ) : null
        ) : null}

        {tagArray.map((tag) => (
          <>
            <div className={styles.tagItem}>
              <h3>{tag}</h3>

              <i
                className="fa-solid fa-xmark"
                onClick={(event) => hideDisplay(event)}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Tag;
