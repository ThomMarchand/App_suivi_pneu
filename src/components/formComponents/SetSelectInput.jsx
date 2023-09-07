import { useState } from "react";
import SetOption from "./SetOption";

/**
 * add option list
 * @param {array} optionArray
 * @param {string} name
 * @param {string} id
 * @returns {object}
 */

const SetSelectInput = ({ optionArray, name, id }) => {
  const [defaultValue, setDefaultValue] = useState("Choisir");
  return (
    <select name={name} id={id}>
      <option>{defaultValue}</option>
      {optionArray.map((option, index) => (
        <SetOption key={id + index} option={option} />
      ))}
    </select>
  );
};

export default SetSelectInput;
