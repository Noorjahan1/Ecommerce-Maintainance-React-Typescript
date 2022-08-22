import React, { ContextType, MouseEventHandler, useState } from "react";
import styles from "./Content.module.css";
import { useRef, useContext } from "react";
import { DataContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import ContType from "../Context/Type";
function Content() {
  const like = useRef(false); //fix
  const { addItem, inCart, removeItem } = useCart();
  const toggleLike = (event: any, product) => {
    like.current = !like.current; //useRef
    event.target.style.color = like.current ? "red" : "#5c5f6f";
    let wishItem = JSON.parse(localStorage.getItem("wishedItem")!);
    const wishItemarray = wishItem ? wishItem.find((item)=>item.id===product.id)?[...wishItem] :[...wishItem,product]: [product];
    localStorage.setItem("wishedItem", JSON.stringify(wishItemarray));
  };
  const products = useContext(DataContext) as ContType;
  const CompareProducts=(product)=>{
    products.Compare(product)
  }
  return (
    <>
      <div className={`row ${styles.cards} `}>
        {products.data.map((product) => {
          return (
            <div className="col-lg-4 pb-5" key={product.id}>
              <div className={`card ${styles.carItem}`}>
                <div className={`${styles.image} p-2`}>
                  <img src={product.image} alt="card" />
                </div>
                <div className={`${styles.like}`}>
                  <i
                    onClick={(event) => toggleLike(event, product)}
                    className={`fa-solid fa-heart`}
                  ></i>
                </div>

                <div className={styles.carText}>
                  <h3 className={styles.vendorCode}>
                    Vendor Code :
                  </h3>
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
                    <span className={styles.strike}>
                      {product.price}$
                    </span>
                  </h3>
                </div>
                <div className={styles.AddToCompare}>
                  <button onClick={()=>CompareProducts(product)} style={{background:products.compareProducts?.find(comparedProduct=>comparedProduct.id===product.id)&&"green"}}>{products.compareProducts?.find(comparedProduct=>comparedProduct.id===product.id)?"Added to Compare":"Add to Compare"}</button>
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
    </>
  );
}
export default Content;
