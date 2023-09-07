/**
 * add option list
 * @param {object} option
 * @returns {object} list
 */

const SetOption = ({ option }) => {
  return <option value={option.idName}>{option.name}</option>;
};

export default SetOption;
