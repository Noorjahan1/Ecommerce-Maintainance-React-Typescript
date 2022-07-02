import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import { DataContext } from "./Context/Context";
import data from "./data";
import { TagType } from "./types";
interface Data {
  id: string;
  "Vendor Code": string;
  Title: string;
  Price: number;
  "Prev Price": number;
  img: string;
}

function App() {
  const [product, setProduct] = useState<Data[]>(data); //type mention
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
      data.filter((data) => {
        const price = data.Price;
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
      setProduct(data);

      return;
    }
    const regex = new RegExp(value, "ig");

    setProduct(
      data.filter((e) => {
        if (regex.test(e["Vendor Code"])) {
          return true;
        } else if (regex.test(e.Price.toString())) {
          return true;
        } else if (regex.test(e.Title)) {
          return true;
        } else {
          return false;
        }
      })
    );
  };
  const page = (val: number, val2: number) => {
    setitemsPerPage(val2);
    setitemOffset(val);
  };

  const endOffset = itemOffset ? itemOffset + itemsPerPage : 0 + itemsPerPage;

  return (
    <DataContext.Provider
      value={{
        data: product.slice(itemOffset, endOffset),
        search: search,
        filterApply: applyFilter,
        pageNumber: page,
        Page: Math.ceil(product.length / itemsPerPage),
      }}
    >
      <div className="container conatiner-body my-5">
        <Navbar />
        <div className={`row `}>
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-9">
            <Main
              minPrice={tags.minPrice}
              maxPrice={tags.maxPrice}
              themes={tags.Theme}
              ages={tags.Age}
            />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
