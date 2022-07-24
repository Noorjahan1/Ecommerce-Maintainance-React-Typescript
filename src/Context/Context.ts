// import Data from "../data"
import { createContext } from "react"
import {TagType} from "../types"
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://demo.saleor.io/graphql/",
  cache: new InMemoryCache(),

});

let Data
(async function Product(){
  try{
const product=await client
  .query({
    query: gql`
  {products(first: 100, channel: "default-channel") {
      edges {
        node {
          name
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
              stop {
                gross {
                  amount
                }
              }
            }
          }
          thumbnail {
            url
            alt
          }
        }
      }
    }
  }
    `,
  })

 const finalProducts=product.data.products.edges.map(product=>{
  return {
    name:product.node.name,
    price:product.node.pricing.priceRange.start.gross.amount,
    image:product.node.thumbnail.url
  }
 })
   
  return finalProducts
  }catch(error){
    console.log(error)
  }
 
  
})().then((response=>{
  Data=response
})
)

export const DataContext = createContext(
  {
    data: Data, search: (val: string) => { },
    filterApply: (tags: TagType) => { },
    pageNumber: (itemOffset: number, itemsPerPage: number) => { },
    Page: 0
  }
)