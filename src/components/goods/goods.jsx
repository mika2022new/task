import { useState } from "react";
import { GoodsList } from "./goodsList";
import "./goods.css";
import { useSelector } from "react-redux";

const Goods = () => {

  const goodsInit = useSelector((state) => state.products.productsList);
  const typesGoods = useSelector((state) => state.products.types);

  const [goods, setGoods] = useState(goodsInit);

  const handleChangeSelectType = (e) =>  {
    const { value } = e.target;

    if(value === "all") {
      setGoods(goodsInit);
    } else {
      setGoods(goodsInit.filter(item => item.type === e.target.value));
    }
  };

  return (
  <>
      <div className="goods-wrapper">
        <div className="goods-container">
          <div className="goods-title">
            {`Products / ${goods.length}`}

            <select className="goods-title__search" onChange={handleChangeSelectType}>
              {typesGoods.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                  </option>
              ))}
              <option key="all" value="all">
                All
              </option>
            </select>
          </div>
          <GoodsList list={goods} />
        </div>
      </div>
    </>
  );
};

export default Goods;
