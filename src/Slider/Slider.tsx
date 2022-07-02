import React, { useEffect, useState } from "react";
import Styles from "./Slider.module.css";
interface Props {
  min: number;
  max: number;
  step: number;
  minRange: number;
  onchange: Function;
}
interface StateTypes {
  min: number;
  max: number;
  minElement: HTMLInputElement | null;
  maxElement: HTMLInputElement | null;
  minRange: number;
}
function Slider({ min, max, step, minRange, onchange }: Props) {
  const [inputProp, setinputProp] = useState<StateTypes>({
    min: min,
    max: max,
    minElement: null,
    maxElement: null,
    minRange: minRange || 500,
  });

  useEffect(() => {
    if (inputProp.minElement !== null) {
      inputProp.minElement.value = "0";
    }
    if (inputProp.maxElement) {
      inputProp.maxElement.value = "0";
    }
    setinputProp((prevValue) => ({ ...prevValue, min: min, max: max }));
  }, []);

  const handleMinChange = (ev: any) => {
    if (ev.target.value < inputProp.max - inputProp.minRange) {
      setinputProp((prevValue) => ({
        ...prevValue,
        min: parseInt(ev.target.value),
      }));
     
    } else {
      if (inputProp.minElement) {
        inputProp.minElement.value = inputProp.min.toString();
      }
      setinputProp((prevValue) => ({ ...prevValue, min: inputProp.min }));
      
    }
    onchange(inputProp.min,inputProp.max);
  };
  const handleMaxChange = (ev: any) => {
    if (ev.target.value > inputProp.max - inputProp.minRange) {
      setinputProp((prevValue) => ({
        ...prevValue,
        max: parseInt(ev.target.value),
      }));
    } else {
      if (inputProp.maxElement) {
        inputProp.maxElement.value = inputProp.min.toString();
      }
      setinputProp((prevValue) => ({ ...prevValue, max: inputProp.min }));
    }
     onchange(inputProp.min,inputProp.max);
  };
  const trackWidth = () => {
    if (inputProp.minElement != null && inputProp.maxElement != null) {
      if (
        inputProp.minElement.value === "0" &&
        inputProp.maxElement.value === "0"
      ) {
        return 0 + "%";
      }
    }
    return (
      100 -
      ((inputProp.min - min + max - inputProp.max) / (max - min)) * 100 +
      "%"
    );
  };

  return (
    <>
      <div className={Styles.priceRange}>
        <div
          style={{
            position: "absolute",
            zIndex: "44",
            top: "15px",
            marginLeft: ((inputProp.min - min) / (max - min)) * 100 + "%",
            width: trackWidth(),
            borderRadius: "5px",
            height: "6px",
            background: "#dd2c38",
          }}
        ></div>
        <input
          onChange={(ev) => {
            handleMinChange(ev);
          }}
          type="range"
          min={min}
          max={max}
          step={step}
          ref={(el) => {
            inputProp.minElement = el;
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={(ev) => {
            handleMaxChange(ev);
          }}
          ref={(el) => {
            inputProp.maxElement = el;
          }}
        />
      </div>
    </>
  );
}

export default Slider;
