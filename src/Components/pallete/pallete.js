import React, { useState } from "react";
import ColorDisplay from "../ColorDisplay/ColorDisplay";
import "./pallete.css";

const Pallete = () => {
  const [value, setValue] = useState(0);
  const [values, setValues] = useState(0);
  const [color, setColor] = useState(null);
  const [display, setDisplay] = useState(false);
  const [palleteDisplay, setPalleteDisplay] = useState(false);
  const hanldeClick = (e) => {
    e.preventDefault();
    setPalleteDisplay(true);
    setValues(value);
  };
  const handleChange = (e) => {
    setPalleteDisplay(false);
    setValue(e.target.value);
  };
  const hanldeColor = (e) => {
    e.preventDefault();
    setDisplay(true);
  };
  const colorPasser = (val) => {
    setColor(val);
    setDisplay(true);
    setValues(0);
  };
  return (
    <main className="main">
      <div className="color-pallete">
        {palleteDisplay && (
          <ColorDisplay value={values} colorPasser={colorPasser} />
        )}
      </div>
      <div className="input-form">
        <form>
          <div className="form-control">
            <label htmlFor="cells">Number of colors </label>
            <input
              type="number"
              value={value}
              placeholder="0"
              onChange={(e) => handleChange(e)}
            />
            <button
              className="btn"
              onClick={(e) => {
                hanldeClick(e);
              }}
            >
              Generate
            </button>
          </div>
          <div className="form-control">
            <label htmlFor="color">Search Color</label>
            <input
              type="text"
              placeholder="#ffffff"
              onChange={(e) => setColor(e.target.value)}
            />
            <button
              className="btn"
              onClick={(event) => {
                hanldeColor(event);
              }}
            >
              Search
            </button>
          </div>
        </form>
        <div>
          {display && (
            <div className="result">
              <div>Result : </div>
              <div
                className="figure"
                style={{ backgroundColor: `${color}` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export { Pallete };
