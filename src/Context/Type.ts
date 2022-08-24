import {TagType} from "../types"
 interface Data {
    id: string;
    name: string;
    price: number;
    image: string;
 }
  
  
   export default interface ContextType{
    data:Data[],
    search: (val: string) =>void,
    filterApply: (tags: TagType)=> void,
    pageNumber: (itemOffset: number, itemsPerPage: number) => void,
    Page:number,
    userInfo:string,
    compareProducts:Data[]|null,
    Compare:Function,
   //  signOut:()=>void
   }
   export interface Datatype{
    data:Data[]
   }