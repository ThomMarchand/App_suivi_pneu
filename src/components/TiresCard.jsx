import React from "react";
import { useState } from "react";
import InventorySummary from "./InventorySummary";
import Filter from "./Filter";

const TiresCard = ({ stockTires, props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="inventory-summary"
      onClick={() => setIsOpen((wasOpened) => !wasOpened)}
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
