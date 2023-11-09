import { useState, useEffect, useRef } from "react";
import { GoodsList } from "../goodsList";

import "./goods.css";

const Goods = () => {

  const [goods, setGoods] = useState(null);

  const initGoodsRef = useRef(null);

  const [typesGoods, setTypesGoods] = useState(null);

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3002/products")
    .then((respons) => respons.json())

    .then((data) => {
      const typesList = data.map((item) => item.type);
      const setType = new Set(typesList);

      setGoods(data);
      setTypesGoods([...setType]);

      initGoodsRef.current = data;
      setisLoading(false);  

    });

  }, []);
  
  const handleChangeSelectType = (e) =>  {

    const { value } = e.target;

    if(value === "all") {
      setGoods(initGoodsRef.current);
    } else {
      setGoods(initGoodsRef.current.filter(item => item.type === e.target.value));
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ): (
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

// 11.44
