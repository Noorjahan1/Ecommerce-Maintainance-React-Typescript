import React, { useEffect } from "react";
import styles from "./Content.module.css"
import { useState ,useContext} from "react";
import { DataContext } from '../Context/Context';
// import { useParams } from "react-router-dom";

export default function Content(){
    const [like,setLike]=useState(false)
    
    
 
//     let params = useParams();
//    let page=params.pageNumber
    // console.log(page)
     const toggleLike= async (event:any)=>{
          await setLike(prev=>!prev)
           event.target.style.color=like?"red":"#5c5f6f"
        
     }
    const product=useContext(DataContext);
    
    const column=product.data.map(e=>{
            if(product.data.length<3){
                 return(
                <div className={product.data.length===1||product.data.length===2?"col-lg-6":"col"}>
                   <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image}`}>
                           <img src={e.img} alt="card"  />
                       </div>
                       <div className={`${styles.like}`}>
                           <i  onClick={toggleLike} className={`fa-solid fa-heart`} ></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :{e["Vendor Code"]}</h3>
                           <h3 className={styles.productName}>{e.Title}<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>{e.Price} $<span className={styles.strike}>{e["Prev Price"]}$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i  className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
            )
            }
            return(
                <div className="col-lg-4">
                   <div className={`card ${styles.carItem}`}>
                       <div className={`${styles.image} p-5`}>
                           <img src={e.img} alt="card" />
                       </div>
                       <div className={`${styles.like}`}>
                           <i  onClick={toggleLike} className={`fa-solid fa-heart`} ></i>
                       </div>
                       <div className={styles.carText}>
                           <h3 className={styles.vendorCode}>Vendor Code :{e["Vendor Code"]}</h3>
                           <h3 className={styles.productName}>{e.Title}<br/>Collection {`<<Brutal>>`} </h3>
                            <p className={styles.price}>Price</p>
                            <h3 className={styles.dollar}>{e.Price} $<span className={styles.strike}>{e["Prev Price"]}$</span></h3>
                       </div>
                       <div className={styles.addToCart}>
                           <i  className="fa-solid fa-cart-shopping"></i>
                       </div>
                   </div>
               </div>
            )
        }
    )
     
 
  //firstIndex=0,lastIndex=3
  //firstIndex=lastIndex,lastIndex=firstIndex+3//6.

let firstIndex
let lastIndex
  const row:any[]=[]
  const newArr:any[]=[]
    for(let i=1;i<=Math.ceil(column.length/3);i++){
        firstIndex=i!=1?lastIndex:0
        lastIndex=firstIndex+3
        newArr.push(column.slice(firstIndex,lastIndex))
        
      
    }
    
    for (let i=0;i<newArr.length;i++){
         
    row.push(<div className={`row ${styles.cards} pb-5`}>
              
             {
                newArr[i]
             }
           

           </div>)
    }

    return(
    <>    
           {row}
        
         
    </>)
}