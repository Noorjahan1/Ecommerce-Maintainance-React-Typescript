import * as React from "react";
import { compareProducts } from "../types";
import styles from "./compareProduct.module.css";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { DataContext } from "../Context/Context";
import ContextType from "../Context/Type";
function CompareProduct() {
  const products = useContext(DataContext) as ContextType;
  const like = useRef(false); //fix
  const { addItem, inCart, removeItem } = useCart();
  const toggleLike = (event: any, product) => {
    like.current = !like.current; //useRef
    event.target.style.color = like.current ? "red" : "#5c5f6f";
    let wishItem = JSON.parse(localStorage.getItem("wishedItem")!);
    const wishItemarray = wishItem
      ? wishItem.find((item) => item.id === product.id)
        ? [...wishItem]
        : [...wishItem, product]
      : [product];
    localStorage.setItem("wishedItem", JSON.stringify(wishItemarray));
  };
  const removeFromCompare = (productId: string) => {
    products.removeFromCompare(productId);
  };
  return (
    <>
      <div className="mx-5 mt-5">
        <div className={`row ${styles.cards}  `}>
          {products.compareProducts?.map((product) => {
            return (
              <div className="col-lg-4 pb-5" key={product.id}>
                <div className={`card ${styles.carItem}`}>
                  <div className={`${styles.image} p-5`}>
                    <img src={product.image} alt="card" />
                  </div>
                  <div className={`${styles.like}`}>
                    <i
                      onClick={(event) => toggleLike(event, product)}
                      className={`fa-solid fa-heart`}
                    ></i>
                  </div>

                  <div className={styles.carText}>
                    <h3 className={styles.vendorCode}>Vendor Code :</h3>
                    <Link
                      style={{ display: "block", margin: "1rem 0" }}
                      to={`/${product.id}`}
                      key={product.id}
                    >
                      <h3 className={styles.productName}>
                        {product.name}
                        <br />
                      </h3>
                    </Link>
                    <p className={styles.price}>Price</p>
                    <h3 className={styles.dollar}>
                      {product.price} $
                      <span className={styles.strike}>{product.price}$</span>
                    </h3>
                  </div>
                  <div className={styles.AddToCompare}>
                    
                        <button
                          onClick={() => removeFromCompare(product.id)}
                          style={{ background: "green" }}
                        >
                          Remove from Compare
                        </button>
                    
                  </div>
                  <div
                    className={styles.addToCart}
                    style={{
                      background: inCart(product.id) ? "green" : "#dd2d38",
                    }}
                    onClick={() =>
                      inCart(product.id)
                        ? removeItem(product.id)
                        : addItem(product)
                    }
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CompareProduct;

