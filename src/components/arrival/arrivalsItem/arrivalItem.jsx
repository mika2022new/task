import React from "react";
import PropTypes from "prop-types";
import "./arrivalItem.css";

function getLongItem(title, length, date, value, symbol) {
  return (
  <div className="item-content">
    <div className="item-content__title">{title}</div>

    <div className="item-count-info">
      <div className="item-count">{length}</div>
      <div className="item-text">{`products`}</div>
    </div>

      <div className="item-content__time">{date}</div>
      <div className="price">
        {/* {priceNOTDefault.map(el) => {
          <div key={el.symbol} className="price__curency">{`${el.value} ${el.symbol}`}</div>
        ))}
        */}
      <div className="price__curency">{`${value} ${symbol}`}</div>
    </div>
</div>

)};

function getShortItem(item, onClick) {
  return (
    <div className="item-content" onClick={() => onClick(item.id)}>

      <div className="item-count-info">
      <div className="item-count">{item.length}</div>
      <div className="item-text">{`products`}</div>
    </div>

      <div className="item-content__time">{item.date}</div>
    </div>
  );
}

const ArrivalItem = ({ item, short = false, onClick }) => {

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

  // console.log("totalPriceDefault", item.title, totalPriceDefault);

  return short ? getShortItem(item, onClick) : getLongItem(item.title, item.products.length, item.date, totalPriceDefault.value, totalPriceDefault.symbol);
};

// ArrivalItem.defaultProps = {
//   short: false,
// };

ArrivalItem.propType = {
  item: PropTypes.object,
  short: PropTypes.bool,
  onClick: PropTypes.func,
};


export default ArrivalItem;
