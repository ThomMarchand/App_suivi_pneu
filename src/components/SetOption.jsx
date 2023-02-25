import React from "react";

const SetOption = ({ option }) => {
  return <option value={option.idName}>{option.name}</option>;
};

export default SetOption;
