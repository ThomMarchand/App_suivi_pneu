import React from "react";

/**
 * display an overview of all tires of the same profile and the same life
 * @param {array} stockTires
 * @param {stirng} props
 * @returns {object} title
 */

const InventorySummary = ({ stockTires, props }) => {
  let quantity = 0;
  let brand = "";
  let size = "";
  let profile = "";

  for (let i = 0; i < stockTires.length; i++) {
    if (stockTires[i].life === props) {
      quantity += [i].length;
      brand = stockTires[i].brand;
      size = stockTires[i].size;
      profile = stockTires[i].profile;
    }
  }

  return (
    <h4 id={profile}>{quantity + " " + brand + " " + size + " " + profile}</h4>
  );
};

export default InventorySummary;
