import { useState, useEffect } from "react";
import { ArrivalList } from "./arrivalList";
import "./arrival.css";

const Arrival = () => {

  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3002/orders")
    .then((respons) => respons.json())

    .then((data) => {
      setOrdersList(data);
      setIsLoading(false);
    });
}, []);

return isLoading ? (
  <h1>Loading Arrivals...</h1>
) : (
    <div className="arrival-wrapper">
      <div className="arrival-container">
        <div className="arrival-container__title">
          <h1>{`Arrivals / ${ordersList.length}`}</h1>
        </div>
        <div className="content">
          <ArrivalList list={ordersList} />
        </div>
      </div>
    </div>
  );
};

export default Arrival;
