import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import TiresCard from "../components/TiresCard";
import FormNewTire from "../components/formComponents/FormNewTire";

const StockTires = () => {
  const [stockTires, setStockTires] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/stockTire")
      .then((res) => setStockTires(res.data));
  }, []);

  return (
    <div className="main-container">
      <nav>
        <Navigation />
      </nav>
      <header>
        <div className="new-tires-container">
          <h3>Pneus Neuf</h3>
          <TiresCard stockTires={stockTires} lifeTire={"new"} />
        </div>
        <div className="retread-tires-container">
          <h3>Pneus Rechapé</h3>
          <TiresCard stockTires={stockTires} lifeTire={"retread"} />
        </div>
      </header>
      <footer>
        <h3>Créer un nouveau pneu</h3>
        <FormNewTire />
      </footer>
    </div>
  );
};
export default StockTires;
