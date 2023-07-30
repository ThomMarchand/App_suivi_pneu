import React from "react";
import { useState } from "react";
import InventorySummary from "./InventorySummary";
import Filter from "./Filter";

/**
 * show or hide on click all the tires of the same profile and the same life
 * @param {array} stockTires
 * @param {stirng} lifeTire
 * @returns {object} title and list
 */

const TiresCard = ({ stockTires, lifeTire }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="inventory-summary"
      onClick={() => setIsOpen((wasOpen) => !wasOpen)}
    >
      <InventorySummary stockTires={stockTires} lifeTire={lifeTire} />
      {isOpen && (
        <div className="display-tires">
          <Filter stockTires={stockTires} lifeTire={lifeTire} />
        </div>
      )}
    </div>
  );
};

export default TiresCard;
