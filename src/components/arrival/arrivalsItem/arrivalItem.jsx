import React from "react";
import PropTypes from "prop-types";
import "./arrivalItem.css";

const ArrivalItem = ({ item }) => {
  const priceListDefault = item.products.reduce((acc, el) => {
    acc = [...acc, ...el.price];
    return acc;
  }, []);

  const totalPriceDefault = priceListDefault.reduce(
    (acc, el) => {
      if (el.isDefault === 1) {
        const value = acc.value + el.value;
        const symbol = el.symbol;

        acc = {value, symbol};
      }
      return acc;
    },
    {value: 0, symbol: ""}
  );

  console.log("totalPriceDefault", item.title, totalPriceDefault);

  return (
    <div className="item-content">
      <div className="item-content__title">{item.title}</div>
      <div className="item-content__count">{`${item.products.length} products`}</div>
      <div className="item-content__time">{item.time}</div>
      <div className="price">
        {/* {priceNOTDefault.map(el) => {
          <div key={el.symbol} className="price__curency">{`${el.value} ${el.symbol}`}</div>
        ))}
        */}
        <div className="price__curency">{`${totalPriceDefault.value} ${totalPriceDefault.symbol}`}</div>
      </div>
    </div>
    );
};

ArrivalItem.propType = {
  item: PropTypes.object,
};


export default ArrivalItem;
