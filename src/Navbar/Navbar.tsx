import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.jpg";
import hearIcon from "../images/heartIcon.jpg";
import products from "../images/products.jpg";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
export default function Logo() {
  const { totalUniqueItems, cartTotal } = useCart();
  return (
    <>
      <div className={`${styles.firstNavContainer} `}>
        <div className="row">
          <div className="col-lg-3">
            <div className={` p-2 ${styles.logo}`}>
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`${styles.otherMenu} row`}>
              <div className="col-lg-2">
                <div className={`${styles.otherItems}`}>
                  <div className={`${styles.otherItemText}`}>
                    <Link to="/toys">
                      <h3>Toys</h3>
                    </Link>
                    <div className={`${styles.toolTip}`}>
                      <div className={`${styles.rectangle}`}>
                        <h3>Hot</h3>
                        <div className={`${styles.triangle}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={`${styles.otherItems}`}>
                  <div className={`${styles.otherItemText}`}>
                    <Link to="/main">
                      <h3>
                        <i className="fa-solid fa-border-all" /> Catalog
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={`${styles.otherItems}`}>
                  <div className={`${styles.otherItemText}`}>
                    <h3>Characters</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={`${styles.otherItems}`}>
                  <Link to="/brand">
                    <div className={`${styles.otherItemText}`}>
                      <h3>Brand</h3>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={`${styles.otherItems}`}>
                  <div className={`${styles.otherItemText}`}>
                    <h3>
                      <i className="fa-solid fa-globe p-2" />
                      Eng
                      <i className="fa-solid fa-angle-down p-2" />
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={[styles.otherItems, styles.noBorder].join(" ")}>
                  <div className={`${styles.otherItemText}`}>
                    <h3>
                      <i className={` ${styles.avater} fa-solid fa-user p-2`} />
                      Alexander
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondNav}>
        <div className="row">
          <div className="col-lg-3">
            <div className={`${styles.secondNavItem}`}>
              <Link to="/main">
                <h3>
                  <i className="fa-solid fa-house p-2" />
                  Main Page
                  <i className="fa-solid fa-angle-right p-2" />
                  <span className={styles.catalog}> Catalog</span>
                </h3>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${styles.secondNavItem}`}>
              <h3>
                <i
                  className={`fa-solid fa-screwdriver-wrench p-2 ${styles.settings}`}
                />
                Compare Products
                <i
                  className={`fa-solid fa-arrow-right ${styles.arrowRight}`}
                ></i>
              </h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${styles.secondNavItem}`}>
              <Link to="/wishList">
                <h3>
                  <img
                    src={hearIcon}
                    alt="heart"
                    className={styles.heartIcon}
                  />
                  Wish List {!localStorage.getItem("wishedItem")?"-Empty":""}
                  <i
                    className={`fa-solid fa-arrow-right ${styles.arrowRight}`}
                  />
                </h3>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${styles.secondNavItem}`}>
              <Link to="/shoppingCart">
                <h3>
                  <img
                    src={products}
                    alt="heart"
                    className={styles.heartIcon}
                  />
                  {totalUniqueItems}Product(s)-${cartTotal}
                  <i
                    className={`fa-solid fa-arrow-right ${styles.arrowRight}`}
                  ></i>
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
