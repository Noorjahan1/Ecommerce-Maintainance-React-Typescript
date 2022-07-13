import * as React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import styles from "./WishList.module.css";
function WishList() {
  const { addItem, inCart, removeItem } = useCart();
  let wishedProduct = JSON.parse(localStorage.getItem("wishedItem")!);
  return (
    <> {
    wishedProduct? <><h3>Wished Item</h3>
      <div className="m-3">
        <div className={`row ${styles.cards} `}>
          {wishedProduct.map((product) => {
            return (
              <div className="col-lg-4 pb-5" key={product.id}>
                <div className={`card ${styles.carItem}`}>
                  <div className={`${styles.image} p-5`}>
                    <img src={product.img} alt="card" />
                  </div>
                  <div className={`${styles.like}`}>
                    <i
                      className={`fa-solid fa-heart`}
                      style={{ color: "red" }}
                    ></i>
                  </div>

                  <div className={styles.carText}>
                    <h3 className={styles.vendorCode}>
                      Vendor Code :{product["Vendor Code"]}
                    </h3>
                    <Link
                      style={{ display: "block", margin: "1rem 0" }}
                      to={`/${product.id}`}
                      key={product.id}
                    >
                      <h3 className={styles.productName}>
                        {product.Title}
                        <br />
                        Collection {`<<Brutal>>`}{" "}
                      </h3>
                    </Link>
                    <p className={styles.price}>Price</p>
                    <h3 className={styles.dollar}>
                      {product.price} $
                      <span className={styles.strike}>
                        {product["Prev Price"]}$
                      </span>
                    </h3>
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
      </div></>:<>
      
       <div className="container-fluid  mt-100 pt-5">
        <div className="row p-5">
          <div className="col-md-12">
            <div className="card p-5">
              <div className="card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center">
                  <i
                    className="fas fa-shopping-cart"
                    style={{fontSize:"120px",color:"#df3238",paddingBottom:"80px" }}
                  ></i>

                  <h3>
                    <strong>Wish List is Empty</strong>
                  </h3>
                  <Link to="/main"><p style={{color:"#df3238",paddingTop:"20px"}}>Continue Shopping</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      </>

    }
     
    </>
  );
}

export default WishList;
