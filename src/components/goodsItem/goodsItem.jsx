import PropTypes from "prop-types";
import "./goodsItem.css";

const GoodsItem = ({ item }) => {
  const priceDefault = item.price.find((item) => item.isDefault);
  const priceNOTDefault = item.price.filter((item) => !item.isDefault);

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
      {/* <div className="arrival"></div> */}
    </div>
    );
};

export default GoodsItem;

GoodsItem.propType = {
  item: PropTypes.object,
};

