import PropTypes from "prop-types";
import { deleteProductByID } from "../../../store/old_reducerProducts";
import ButtonDelete from "../../buttonDelete/buttonDelete";
import "./goodsItem.css";

import { useDispatch } from "react-redux";



function getLongItem(item, priceNOTDefault, priceDefault, handleClickDelete) {
  return (
    <div className="item">
      <div className="name">{item.title}</div>
      <div className="type">{item.type}</div>
      <div className="guarantee">
        <div className="guarantee__start">{item.guarantee.start}</div>
        <div className="guarantee__end">{item.guarantee.end}</div>
      </div>
      <div className="price">
        {priceNOTDefault.map((el) => (
          <div key={el.symbol} className="price__curency">{`${el.value} ${el.symbol}`}</div>
        ))}
        {priceDefault && <div className="price__curency">{`${priceDefault.value} ${priceDefault.symbol}`}</div>}
      </div>

      <ButtonDelete onClick={() => handleClickDelete(item.id)} />

    </div>
    );
}

// function getShortItem(title) {
function getShortItem({title, id}, handleClickDelete) {

  // const handleClickDelete = (id) => {
  //   console.log("id", id);
  //   deleteProductByID(id);
  // };

  return (
    <div className="item">
      <div className="name">{title}</div>

      <h4>Free</h4>
      {/* <h4>Del</h4> */}

      <ButtonDelete onClick={() => handleClickDelete(id)} />

    </div>
    );
}

const GoodsItem = ({ item, short = false }) => {

  const dispatch = useDispatch();

  const priceDefault = item.price.find((item) => item.isDefault);
  const priceNOTDefault = item.price.filter((item) => !item.isDefault);
  
  const handleClickDelete = (id) => {
    // console.log("id", id);
    dispatch(deleteProductByID(id));
  };

  return short ? getShortItem(item, handleClickDelete) : getLongItem(item, priceNOTDefault, priceDefault, handleClickDelete);
};

export default GoodsItem;

GoodsItem.propType = {
  item: PropTypes.object,
  short: PropTypes.bool,
};


// 48.00
