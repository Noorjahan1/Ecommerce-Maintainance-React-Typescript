import * as React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { CartProvider} from "react-use-cart";
function Layout() {
  return (
    <>
      <CartProvider>
        <div className=" conatiner-body my-5 mx-5 ">
          <Navbar />
          <div className="row">
            <div className="col-lg-3">
              <SideBar />
            </div>
            <div className="col-lg-9">
              <Outlet />
            </div>
          </div>
        </div>
      </CartProvider>
    </>
  );
}
export default Layout;
