import axios from "axios";
const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";
export const getProducts=async ()=>{ 
    try{
     let data=await axios.get(baseURL)    
      return data.data
    }catch(error){
        console.log(error)
    }
} 
export const getProductsByBrand=async (brand)=>{ 
    try{
     let data=await axios.get(baseURL+`?brand=${brand}`)    
      return data.data
    }catch(error){
        console.log(error)
    }
} 
export const getProductsByBrandAndProductType=async (brand,productType)=>{ 
    try{
     let data=await axios.get(baseURL+`?brand=${brand}&product_type=${productType} `)    
      return data.data
    }catch(error){
        console.log(error)
    }
} 

