import React from "react";
import styles from "./Content.module.css";
import { useRef, useContext } from "react";
import { DataContext } from "../Context/Context";
function Content() {
  const like = useRef(false); //fix

  const toggleLike = (event: any) => {
    like.current = !like.current; //useRef
    event.target.style.color = like.current ? "red" : "#5c5f6f";
  };
  const product = useContext(DataContext);
  return (
    <>
      <div className={`row ${styles.cards} `}>
        {product.data.map((e) => {
          return (
            <div className="col-lg-4 pb-5">
              <div className={`card ${styles.carItem}`}>
                <div className={`${styles.image} p-5`}>
                  <img src={e.img} alt="card" />
                </div>
                <div className={`${styles.like}`}>
                  <i
                    onClick={(event) => toggleLike(event)}
                    className={`fa-solid fa-heart`}
                  ></i>
                </div>
                <div className={styles.carText}>
                  <h3 className={styles.vendorCode}>
                    Vendor Code :{e["Vendor Code"]}
                  </h3>
                  <h3 className={styles.productName}>
                    {e.Title}
                    <br />
                    Collection {`<<Brutal>>`}{" "}
                  </h3>
                  <p className={styles.price}>Price</p>
                  <h3 className={styles.dollar}>
                    {e.Price} $
                    <span className={styles.strike}>{e["Prev Price"]}$</span>
                  </h3>
                </div>
                <div className={styles.addToCart}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Content;
