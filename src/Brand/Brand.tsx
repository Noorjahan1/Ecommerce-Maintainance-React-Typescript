import * as React from "react";
import { useEffect, useState } from "react";
import Loading from "../Loading/loading";
import { getProducts } from "../RestAPi/restapi";
import BrandContent from "./BrandContent"
import Search from "../Search/Search"
interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: { hex_value: string; colour_name: string }[];
}
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
