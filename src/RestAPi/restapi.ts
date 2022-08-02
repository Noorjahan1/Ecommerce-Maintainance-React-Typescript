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

