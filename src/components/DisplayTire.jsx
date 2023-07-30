import React from "react";

/**
 * display a list of all tires of the same profile and the same life
 * @param {object} eachTires
 * @returns {object} list
 */

const DisplayTire = ({ eachTires }) => {
  return (
    <tr>
      <td>
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
      </td>
    </tr>
  );
};

export default DisplayTire;
