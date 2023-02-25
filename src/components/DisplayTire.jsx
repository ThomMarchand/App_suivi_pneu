import React from "react";

const DisplayTire = ({ eachTires }) => {
  return (
    <li>
      {eachTires.brand +
        " " +
        eachTires.size +
        " " +
        eachTires.profile +
        ", " +
        "matricule : " +
        eachTires.id +
        ", " +
        "profondeur : " +
        eachTires.depth}
    </li>
  );
};

export default DisplayTire;
