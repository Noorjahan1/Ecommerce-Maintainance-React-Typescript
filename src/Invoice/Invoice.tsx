import * as React from "react";
import { useCart } from "react-use-cart";
import "./Invoice.css";
function Invoice({ items }) {
  const { cartTotal } = useCart();
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="invoice">
            <h3>Invoice</h3>
            <div className="invoice-content">
              <div className="table-responsive">
                <table className="table table-invoice">
                  <tbody>
                    {items.map((item) => (
                      <>
                        <tr>
                          <td>
                            <span className="text-inverse">{item.Title}</span>
                            <br />
                          </td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-center">{item.price}</td>
                          <td className="text-right">${item.quantity*item.price}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="invoice-price">
                <div className="invoice-price-left">
               <h3>TOTAL</h3>
                </div>
                <div className="invoice-price-right">
                   <span className="f-w-600">${cartTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoice;
