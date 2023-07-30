import DisplayTire from "./DisplayTire";

/**
 * to iterate through the object array and choose in which section to add the data
 * @param {string} lifeTire
 * @param {array} stockTires
 * @returns {object}
 */

const Filter = ({ lifeTire, stockTires }) => {
  return (
    <table border={2}>
      <tbody>
        {stockTires
          .filter((eachTires) => eachTires.life === lifeTire)
          .map((eachTires) => (
            <DisplayTire key={eachTires.id} eachTires={eachTires} />
          ))}
      </tbody>
    </table>
  );
};

export default Filter;
