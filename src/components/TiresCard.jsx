import React from "react";
import { useState } from "react";
import InventorySummary from "./InventorySummary";
import Filter from "./Filter";

/**
 * show or hide on click all the tires of the same profile and the same life
 * @param {array} stockTires
 * @param {stirng} props
 * @returns {object} title and list
 */

const TiresCard = ({ stockTires, props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="inventory-summary"
      onClick={() => setIsOpen((wasOpen) => !wasOpen)}
    >
      <InventorySummary stockTires={stockTires} props={props} />
      {isOpen && (
        <div className="display-tires">
          <Filter stockTires={stockTires} props={props} />
        </div>
      )}
    </div>
  );
};

export default TiresCard;
