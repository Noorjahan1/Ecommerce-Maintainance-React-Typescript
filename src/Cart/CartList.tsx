import * as React from "react";
import Styles from "./Cart.module.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Invoice from "../Invoice/Invoice";
function CartList() {
  const { items, updateItemQuantity, removeItem } = useCart();
  return (
    <>
      <div className={Styles["shopping-cart"]}>
        <div className="title">Shopping Bag</div>

        {items.map((item) => {
          return (
            <>
              <div className={Styles.item}>
                <div className={Styles.buttons}>
                  <span
                    className={Styles["delete-btn"]}
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="fa-solid fa-x"></i>
                  </span>
                </div>

                <div className={Styles.image}>
                  <img src={`${item.img}`} alt="" />
                </div>

                <div className={Styles.description}>
                  <span>{item.Title}</span>
                  <span>{item["Vendor Code"]}</span>
                </div>

                <div className={Styles.quantity}>
                  <button
                    className={Styles["plus-btn"]}
                    type="button"
                    name="button"
                    onClick={() =>
                      updateItemQuantity(
                        item.id,
                        item.quantity ? item.quantity + 1 : 0
                      )
                    }
                  >
                    +
                  </button>
                  <span className={Styles.itemQuantity}>{item.quantity}</span>
                  <button
                    className={Styles["minus-btn"]}
                    type="button"
                    name="button"
                    onClick={() =>
                      updateItemQuantity(
                        item.id,
                        item.quantity ? item.quantity - 1 : 0
                      )
                    }
                  >
                    -
                  </button>
                </div>

                <div className={Styles["total-price"]}>
                  ${item.quantity ? item.quantity * item.price : 0}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Invoice items={items}/>
      <div className={`container  ${Styles.summary}`}>
        <Link to="/Checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
}

export default CartList;
