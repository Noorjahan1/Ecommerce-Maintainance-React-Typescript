import React, { useState, useContext } from "react";
import styles from "./SideBar.module.css";
import { DataContext } from "../Context/Context";
import { TagType, Theme, Age } from "../types";
import Slider from "../Slider/Slider";
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
  const Tags = useContext(DataContext);
  const [minPrice, set_minValue] = useState(0);
  const [maxPrice, set_maxValue] = useState(0);
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
  const changePrice = (minPrice: number, maxPrice: number) => {
    set_minValue(minPrice);
    set_maxValue(maxPrice);
    setTags(prevValue=>({...prevValue,minPrice:minPrice,maxPrice:maxPrice}))
  };
  const changeTheme = (event: any) => {
    const { name, checked } = event.target;
    if (checked) {
      setTags((prevValue) => ({
        ...prevValue,
        theme:
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
    applyFilter();
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
                  max={10000}
                  step={1}
                  minRange={100}
                  onchange={changePrice}
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
