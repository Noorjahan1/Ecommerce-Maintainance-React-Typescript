import * as React from "react";
import Styles from "./Cart.module.css";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <>
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
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <Link to="/main"><p style={{color:"#df3238",paddingTop:"20px"}}>Continue Shopping</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
