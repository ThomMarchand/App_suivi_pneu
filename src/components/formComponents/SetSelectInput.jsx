import SetOption from "./SetOption";

/**
 * add option list
 * @param {array} optionArray
 * @param {string} name
 * @param {string} id
 * @returns {object}
 */

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
