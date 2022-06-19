import React ,{useState} from 'react';
import Navbar from "./Navbar/Navbar"
import "./App.css"
import SideBar from "./SideBar/SideBar"
import Main from "./Main/Main"
import {DataContext,data} from "./Context/Context"


interface Tags{
  price:number[],
  theme:string[],
  Age:string[]
}

function App() {
  const [product,setProduct]=useState(data)
  const [tags,setPriceFilter]=useState<Tags>({price:[],theme:[],Age:[]});
  const [filterApply,setFilterApply]=useState(false)
  const [itemsPerPage,setitemsPerPage]=useState(6)
  const [itemOffset,setitemOffset]=useState<number>(0)
  const applyFilter=(value:Tags)=>{
      setFilterApply(true)
      setPriceFilter(value)
      
  }
   if(filterApply){
    setFilterApply(false)
    setProduct(data.filter(e=>{
      const price=e.Price
      const priceRange=tags.price
       if(priceRange[0]<price&&price<priceRange[1]){
        return true
       }
    }))
   }

   const search=(value:string)=>{
    setitemOffset(0)
    if(value===""){
      setProduct(data)
      
      return
    }
    const regex=new RegExp(value, 'ig')
    
     setProduct(data.filter(e=>{
      if(regex.test(e["Vendor Code"])){
        return true
      }else if(regex.test(e.Price.toString())){
        return true
      }else if(regex.test(e.Title)){
        return true
      }
     }))
    
   }
  const page=(val:number,val2:number)=>{
    
    setitemsPerPage(val2)
    setitemOffset(val)
    
    
    
  }

    const endOffset = itemOffset?itemOffset + itemsPerPage:0+itemsPerPage;
  
  return (
      <DataContext.Provider value={{data:product.slice(itemOffset, endOffset),search:search,filterApply:applyFilter,pageNumber:page,Page:Math.ceil(product.length/itemsPerPage)}}>
        <div className='container conatiner-body my-5'>
     <Navbar/>
          <div className={`row ` }>
        <div className="col-lg-3">
           <SideBar />
        </div>
         <div className="col-lg-9">
        
         
      < Main tags={tags}/>
       
         
         </div>
       
        </div>
    </div>
    </DataContext.Provider>
  
  );
}

export default App;
