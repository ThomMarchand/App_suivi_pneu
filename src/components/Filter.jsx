import DisplayTire from "./DisplayTire";

/**
 * to iterate through the object array and choose in which section to add the data
 * @param {string} props
 * @param {array} stockTires
 * @returns {object}
 */

const Filter = ({ props, stockTires }) => {
  return (
    <ul>
      {stockTires
        .filter((eachTires) => eachTires.life === props)
        .map((eachTires) => (
          <DisplayTire key={eachTires.id} eachTires={eachTires} />
        ))}
    </ul>
  );
};

export default Filter;
