import React from "react";

/**
 * display a list of all tires of the same profile and the same life
 * @param {object} eachTires
 * @returns {object} list
 */

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
