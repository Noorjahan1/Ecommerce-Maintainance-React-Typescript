import * as React from "react";
import Styles from "./loading.module.css";
import loading from "../images/Loading_icon.gif";
function Loading() {
  return (
    <>
      <div className={Styles.Loading}>
        <img src={loading} alt="" />
      </div>
    </>
  );
}

export default Loading;
