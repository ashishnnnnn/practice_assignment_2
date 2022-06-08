import "./Home.css";

import myJson from "../../data/data.json";
import { Card } from "../../Components";

export const Home = () => {
  const products = myJson.products;
  return (
    <div className="grid-container">
      {products.map((ele) => (
        <Card key={ele.id} product={ele} />
      ))}
    </div>
  );
};
