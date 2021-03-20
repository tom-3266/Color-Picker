import React, { useEffect, useState } from "react";
import "./ColorDisplay.css";

const ColorDisplay = (props) => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    for (let i = 0; i < props.value; i++) {
      let newcolor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      setArray((oldArray) => [...oldArray, newcolor]);
    }
  }, [props]);
  console.log(array);
  return (
    <div className="colors">
      {array.map((color) => {
        return (
          <div
            key={color}
            className="colorSquare"
            style={{ backgroundColor: `${color}` }}
            onClick={() => {
              props.colorPasser(color);
            }}
          >
            <p>{color}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ColorDisplay;
