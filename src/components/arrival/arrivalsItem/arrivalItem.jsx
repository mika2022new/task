import React from "react";
import PropTypes from "prop-types";
import "./arrivalItem.css";

import { useDispatch} from "react-redux";
import { deleteOrderByID } from "../../../store/old_reducerOrders";

import ButtonDelete from "../../buttonDelete/buttonDelete";


// function getLongItem(title, length, date, value, symbol) {
function getLongItem(item, value, symbol, handleClickDelete) {

  const {title, length, date, id} = item;

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

    <ButtonDelete onClick={() => handleClickDelete(id)} />
  

</div>

)};

function getShortItem(item, onClick) {
  return (
    <div className="item-content" onClick={() => onClick(item.id)}>

      <div className="item-count-info">
      <div className="item-count">{item.length}</div>
      <div className="item-text">{item.title}</div>
    </div>

      <div className="item-content__time">{item.date}</div>
    </div>
  );
}

const ArrivalItem = ({ item, short = false, onClick }) => {

  const dispatch = useDispatch();

  const priceListDefault = item.products.reduce((acc, el) => {
    acc = [...acc, ...el.price];
    return acc;
  }, []);


  const handleClickDelete = (id) => {
    dispatch(deleteOrderByID(id));

  }
  

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

  // return short ? getShortItem(item, onClick) : getLongItem(item.title, item.products.length, item.date, totalPriceDefault.value, totalPriceDefault.symbol);
  return short ? getShortItem(item, onClick) : getLongItem(item, totalPriceDefault.value, totalPriceDefault.symbol, handleClickDelete);

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
