import React from "react";
import SetOption from "./SetOption";

const SetSelectInput = ({ optionArray, name, id }) => {
  return (
    <select name={name} id={id}>
      {optionArray.map((option, index) => (
        <SetOption key={index} option={option} />
      ))}
    </select>
  );
};

export default SetSelectInput;
