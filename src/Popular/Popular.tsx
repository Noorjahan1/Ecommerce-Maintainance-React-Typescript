import  React from 'react';
import styles from "./Popular.module.css"
export default function Popular(){
    return(
        <>
         <div className={styles.popularText}>
                     <div className={`${styles.popular}`}>
                      <i className={`fa-solid fa-wifi ${styles.optionIcon}`}></i>
                     </div>
                     <select className={styles.options} id="Popular">
                         <option value="popular">Popular</option>
                     </select>
                 </div>
        </>
    )
}
