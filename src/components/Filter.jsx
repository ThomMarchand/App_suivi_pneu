import DisplayTire from "./DisplayTire";

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
