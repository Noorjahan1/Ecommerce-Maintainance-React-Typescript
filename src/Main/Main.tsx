import  React from 'react';
import styles from "./Main.module.css"
import Search from "../Search/Search"
import Popular from "../Popular/Popular"
import Content from "../Content/Content"
import Tag from "../Tags/Tags"

import Pagination from "../Pagination/Pagination"
 
interface Tags{
  price:number[],
  theme:string[],
  Age:string[]
}
interface Props{
    tags:Tags
}
export default function Main(props:Props){
    const {tags}=props
    return(
        <>
            <div className={styles.main}>
                <div className={styles.mainText}>
               <h1>
                   Catalog
               </h1>
           </div>
                <div className={styles.formData}>
    
                    <Search />
                    
                    <Popular />
                   
                 </div>
                   {(tags.price.length!==0||tags.theme.length!==0||tags.Age.length!==0)?
                     <Tag tags={tags}/>
                     :null
                   
                   }
                 
                  <div className='mt-5'>
                    <Content/>
                  </div>
                
            </div>
              <Pagination totalPage={6} />
        </>
    )
}

