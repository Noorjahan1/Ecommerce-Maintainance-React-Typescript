import React, { useState, useEffect } from "react";
import styles from "./Tags.module.css";
import { TagPropTypes } from "../types";
const Tag = (tags:TagPropTypes) => {
  const {minPrice,maxPrice,themes,ages }=tags
  
  const [priceTagBool, setPriceTag] = useState(false);

  const hideDisplay = (event: any, obj: string) => {
    if (obj === "price") {
      setPriceTag(true);
    } else if (obj !== "price") {
      event.target.parentElement.style.display = "none";
    }
  };
  useEffect(() => {
    setPriceTag(true);
  }, [tags]);
 
  return (
    <>
      <div className={styles.tag}>

            <div
              className={styles.tagItem}
              style={{ display: priceTagBool ? "none" : "inherit" }}
            >
              <h3>{`Price : From ${minPrice} to ${maxPrice}`}</h3>
              <i
                className="fa-solid fa-xmark"
                onClick={(event) => hideDisplay(event,  "price")}
              ></i>
            </div>
         
       
        {themes.length !== 0 ? (
          <>
            {themes.map((theme) => {
              return (
                <div className={styles.tagItem}>
                  <h3>{theme}</h3>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={(event) => hideDisplay(event,  "theme")}
                  ></i>
                </div>
              );
            })}
          </>
        ) : null}
        {ages.length !== 0 ? (
          <>
            {ages.map((age) => {
              return (
                <div className={styles.tagItem}>
                  <h3>{age}</h3>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={(event) => hideDisplay(event, "Age")}
                  ></i>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};
export default Tag;
