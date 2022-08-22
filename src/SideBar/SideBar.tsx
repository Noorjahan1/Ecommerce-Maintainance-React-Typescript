import React, { useState, useContext, useEffect } from "react";
import styles from "./SideBar.module.css";
import { DataContext } from "../Context/Context";
import { TagType, Theme, Age } from "../types";
import Slider from "../Slider/Slider";
import { getProducts } from "../RestAPi/restapi";
import ContextType from "../Context/Type";

const themesArray = [
  { space: "Space (44)" },
  { ninja: "Ninja (44)" },
  { transport: "Transport (44)" },
  { building: "Building (44)" },
  { homes: "Homes (44)" },
];
const ageArray = [
  { "Up to a year": "Up to a year" },
  { "1year-2years": "1 year-2 years" },
  { "3 years -5 years": "3 years -5 years" },
  { "6 years -5 years": "6 years -5 years" },
  { "Older than 12 years": "Older than 12 years" },
];
function SideBar() {
  const [brands, setBrand] = useState<string[]>()
  const Tags = useContext(DataContext) as ContextType;
  const [minPrice, set_minValue] = useState(0);
  const [maxPrice, set_maxValue] = useState(1000);
  const [tags, setTags] = useState<TagType>({
    minPrice: minPrice,
    maxPrice: maxPrice,
    Theme: [],
    Age: [],
  });
  const [theme, setTheme] = useState<Theme>({
    space: false,
    ninja: false,
    transport: false,
    building: false,
    homes: false,
  });
  const [age, setAge] = useState<Age>({
    "Up to a year": false,
    "1year-2years": false,
    "3 years -5 years": false,
    "6 years -5 years": false,
    "Older than 12 years": false,
  });
  useEffect
    (() => {
      setTags((prevValue) => ({
        ...prevValue,
        minPrice: minPrice,
        maxPrice: maxPrice,
      }));
      const getBrand = async () => {
        let Datas = await getProducts();
        let brand: string[] = [];
        Datas.map(data=>brand.push(data.brand))
        
        return brand;
      };
      getBrand().then((response) => { setBrand(response) });
    },
      [minPrice, maxPrice]);
  const changePrice = (minPrice: number, maxPrice: number) => {
    set_minValue(minPrice);
    set_maxValue(maxPrice);
  };
  const changeTheme = (event: any) => {
    const { name, checked } = event.target;
    if (checked) {
      setTags((prevValue) => ({
        ...prevValue,
        Theme:
          prevValue.Theme.length === 0 ? [name] : [...prevValue.Theme, name],
      }));
    }

    setTheme((preValue) => {
      return {
        ...preValue,
        [name]: checked,
      };
    });
  };
  const changeAge = (event: any) => {
    const { name, checked } = event.target;
    if (checked) {
      setTags((prevValue) => ({
        ...prevValue,
        Age: prevValue.Age.length === 0 ? [name] : [...prevValue.Age, name],
      }));
    }
    setAge((prevValue: any) => {
      return {
        ...prevValue,
        [name]: checked,
      };
    });
  };
  const reset = () => {
    set_minValue(0);
    set_maxValue(1000);
    setTheme({
      space: false,
      ninja: false,
      transport: false,
      building: false,
      homes: false,
    });
    setAge({
      "Up to a year": false,
      "1year-2years": false,
      "3 years -5 years": false,
      "6 years -5 years": false,
      "Older than 12 years": false,
    });
    Tags.filterApply(tags);
  };
  const applyFilter = () => {
    Tags.filterApply(tags);
  };
  return (
    <>
      <div className={styles.sideMenu}>
        <div className={styles.listItems}>
          <ul>
            <li>
              <div className={styles.price}>
                <p>Price</p>
              </div>
              <div className={styles.priceValue}>
                <div className={styles.minRange}>
                  <p>
                    From <span>{minPrice}</span>$
                  </p>
                </div>
                <div className={styles.maxRange}>
                  <p>
                    Upto <span>{maxPrice}</span>$
                  </p>
                </div>
              </div>
              <div style={{ width: "100%", background: "red" }}>
                <Slider
                  min={0}
                  max={1000}
                  onChange={({ min, max }: { min: number; max: number }) =>
                    changePrice(min, max)
                  }
                />
              </div>
            </li>
            <li>
              <div className={styles.Theme}>
                <p>Theme</p>
                <i className="fa-solid fa-angle-up" />
              </div>
              <div className={styles.themeBody}>
                {themesArray.map((themeName, index) => {
                  const key = Object.keys(themeName).toString();
                  return (
                    <div key={index}>
                      <label htmlFor={key} className={styles.cont}>
                        <input
                          type="checkbox"
                          id={key}
                          name={key}
                          checked={theme[key]}
                          onChange={(event) => changeTheme(event)}
                        />
                        <span>{themeName[key]}</span>
                        <span className={styles.checkmark}></span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              <div className={styles.age}>
                <p>Age</p>
                <i className="fa-solid fa-angle-up" />
              </div>
              <div className={styles.checkAge}>
                {ageArray.map((Age, index) => {
                  const key = Object.keys(Age).toString();
                  return (
                    <div key={index}>
                      <label htmlFor={key} className={styles.cont}>
                        <input
                          type="checkbox"
                          id={key}
                          checked={age[key]}
                          name={key}
                          onChange={changeAge}
                        />
                        <span>{Age[key]}</span>
                        <span className={styles.checkmark}></span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              <select className={styles.dropDown}>
                <option value="Stockavai">Brand</option>
                {brands?.map((brand ,index)=> (<option value={brand} key={index}>{brand}</option>))}
              </select>
            </li>
            <li>
              <select className={styles.dropDown}>
                <option value="Stockavai">Characters</option>
              </select>
            </li>
            <li className={styles.noBorder}>
              <select className={styles.dropDown}>
                <option value="Stockavai">Stock Availability</option>
              </select>
            </li>
            <li>
              <div className={styles.applyFilter}>
                <button onClick={applyFilter}>Apply Filter</button>
                <i className="fa-solid fa-trash-can" onClick={reset} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default SideBar;
