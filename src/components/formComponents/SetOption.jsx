/**
 * add option list
 * @param {object} option
 * @returns {object} list
 */

const SetOption = ({ option }) => {
  let optionValue = option.name;

  if (option.idName === "new" || option.idName === "retread") {
    optionValue = option.idName;
  }

  return <option value={optionValue}>{option.name}</option>;
};

export default SetOption;
