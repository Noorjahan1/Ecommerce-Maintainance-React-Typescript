import * as React from "react";
import { useEffect, useState } from "react";
import Loading from "../Loading/loading";
import { getProducts } from "../RestAPi/restapi";
import BrandContent from "./BrandContent"
import Search from "../Search/Search"
import {Product} from "../types"
function Brand() {
  const [Data, setData] = useState<Product[]>();
  useEffect(() => {
    try {
      const products = async () => {
        let Datas = await getProducts();
        return Datas;
      };
      products().then((response) => setData(response));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <>{Data ? <div className="mt-5 mx-5">
           <Search></Search>
          <BrandContent data={Data}/>
        </div> :<div className="mt-5 mx-5">{<Loading></Loading>}</div>}</>;
}

export default Brand;
