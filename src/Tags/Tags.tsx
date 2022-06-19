import  React ,{useState,useContext, useEffect}from 'react';
import styles from "./Tags.module.css"
import { DataContext } from '../Context/Context';
interface Tags{
  price:number[],
  theme:string[],
  Age:string[]
}
interface Props{
    tags:Tags
}

const Tag=(prop:Props)=>{
   
  const Ta=useContext(DataContext);
   const  {tags}=prop
   const [tag,setTag]=useState<Tags>(tags)
 
 const hideDisplay=(event:any,value:any,obj:string)=>{
   event.target.parentElement.style.display="none"
  
  
   
  
  }
  
    return(
        <>
       <div className={styles.tag} >
                 {   tags.price.length>2?(
                 <div className={styles.tagItem}  >
                   <h3>
                      {`Price : From ${tags.price[0]} to ${tags.price[1]}`}
                   </h3>
                   <i className="fa-solid fa-xmark" onClick={(event)=>hideDisplay(event, tags.price,"price")} ></i>
               </div> 
               ):null
               }
               {tags.theme.length!==0?
               (<>
                 {tags.theme.map(e=>{
                      
                      return(<div className={styles.tagItem}  >
                   <h3>
                      {e}
                   </h3>
                   <i className="fa-solid fa-xmark" onClick={(event)=>hideDisplay(event, e,"theme")} ></i>
               </div> )
                 })
}
               </>
               
               ):null
                }
               {tags.Age.length!==0?
               (<>
                 {tags.Age.map((e)=>{
                      
                      return(<div className={styles.tagItem} >
                   <h3>
                      {e}
                   </h3>
                   <i className="fa-solid fa-xmark" onClick={(event)=>hideDisplay(event, e,"Age")}></i>
               </div> )
                 })
}
               </>
               
               ):null
                }
              
           </div>
           </>
    )

}
export default Tag