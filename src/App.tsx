import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./Main/Main";
import { DataContext } from "./Context/Context";
//  import data from "./data";
import Loading from "./Lodaing/loading";
import { TagType } from "./types";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Cart from "./Cart/Cart";
import Product from "./ProductDetail/ProductDetail";
import Checkout from "./Checkout/Checkout";
import Toys from "./Toys/toys";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import WishList from "./WishList/WishList";
import { useQuery, gql } from "@apollo/client";
interface Data {
  id: string;
  name: string;
  price: number;
  image: string;
}
const GET_LOCATIONS = gql`
  {
    products(first: 100, channel: "default-channel") {
      edges {
        node {
          id
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
`;
function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [finalProduct,setFinalProduct]=useState<Data[]>(
    //  finalProducts
    []
  );
  const [product, setProduct] = useState<Data[]>(
    //  finalProducts
    []
  ); //type mention
  useEffect(() => {
    if (data) {
      setProduct(
        data.products.edges.map((product) => {
          return {
            id: product.node.id,
            name: product.node.name,
            price: product.node.pricing.priceRange.start.gross.amount,
            image: product.node.thumbnail.url,
          };
        })
      );
      setFinalProduct(data.products.edges.map((product) => {
          return {
            id: product.node.id,
            name: product.node.name,
            price: product.node.pricing.priceRange.start.gross.amount,
            image: product.node.thumbnail.url,
          };
        }))
    }
  }, [data]);

  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
      },
    ],
  };

  const [tags, setTagFilter] = useState<TagType>({
    minPrice: 0,
    maxPrice: 0,
    Theme: [],
    Age: [],
  });
  const [filterApply, setFilterApply] = useState<boolean>(false);
  const [itemsPerPage, setitemsPerPage] = useState<number>(6);
  const [itemOffset, setitemOffset] = useState<number>(0);
  const applyFilter = (value: TagType) => {
    setFilterApply(true);
    setTagFilter(value);
  };

  if (filterApply) {
    setFilterApply(false);
    setProduct(
      finalProduct.filter((data) => {
        const price = data.price;
        const minPrice = tags.minPrice;
        const maxPrice = tags.maxPrice;
        if (minPrice < price && price < maxPrice) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  const search = (value: string) => {
    setitemOffset(0);
    if (value === "") {
       setProduct(
        data.products.edges.map((product) => {
          return {
            id: product.node.id,
            name: product.node.name,
            price: product.node.pricing.priceRange.start.gross.amount,
            image: product.node.thumbnail.url,
          };
        })
      );

      return;
    }
    const regex = new RegExp(value, "ig");

    setProduct(
      finalProduct.filter((e) => {
        if (regex.test(e.name)) {
          return true;
        }
      })
    );
  };
  const page = (val: number, val2: number) => {
    setitemsPerPage(val2);
    setitemOffset(val);
  };

  const endOffset = itemOffset ? itemOffset + itemsPerPage : 0 + itemsPerPage;

  return loading ? (
    <Loading />
  ) : (
    <DataContext.Provider
      value={{
        data: product.slice(itemOffset, endOffset),
        search: search,
        filterApply: applyFilter,
        pageNumber: page,
        Page: Math.ceil(product.length / itemsPerPage),
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Main
                minPrice={tags.minPrice}
                maxPrice={tags.maxPrice}
                themes={tags.Theme}
                ages={tags.Age}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                minPrice={tags.minPrice}
                maxPrice={tags.maxPrice}
                themes={tags.Theme}
                ages={tags.Age}
              />
            }
          />
          <Route path="/:productId" element={<Product />} />
          <Route path="/shoppingCart" element={<Cart />} />
          <Route
            path="/brand"
            element={
              <Main
                minPrice={tags.minPrice}
                maxPrice={tags.maxPrice}
                themes={tags.Theme}
                ages={tags.Age}
              />
            }
          />
          <Route path="/toys" element={<Toys />} />
          <Route
            path="/Checkout"
            element={
              <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <Checkout />
              </Elements>
            }
          />
          <Route path="/wishList" element={<WishList />} />
        </Route>
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
