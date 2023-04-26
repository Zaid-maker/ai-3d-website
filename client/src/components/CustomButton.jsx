import React from "react";
import { useSnapshot } from "valtio";

import { getContrastingColor } from "../config/helpers";
import state from "../store";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  /**
   * The function generates a style object based on the type parameter passed in.
   * @returns The function `generateStyle` returns an object with different properties depending on the
   * value of the `type` parameter. If `type` is "filled", the object will have a `backgroundColor`
   * property set to the value of `snap.color` and a `color` property set to the result of calling the
   * `getContrastingColor` function with `snap.color` as an argument. If `
   */
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
