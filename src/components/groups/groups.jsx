import { useEffect, useState, useRef } from "react";
import { GoodsList } from "../goods/goodsList";
import { ArrivalList } from "../arrival/arrivalList";
import "./groups.css";

const Groups = () => {

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const initProductsRef = useRef([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  console.log('prod', products );

  const handleClick = (id) => {
    const listProducts = initProductsRef.current.filter(el => el.order === id);
    setProducts(listProducts);
  };

  useEffect(() => {
    fetch("http://localhost:3002/orders")
    .then((respons) => respons.json())
    .then((data) => {
      setOrders(data);
      setIsLoadingOrders(false);
    });

    fetch("http://localhost:3002/products")
    .then((respons) => respons.json())
    .then((data) => {
      setProducts(data);
      setIsLoadingProducts(false);
      initProductsRef.current = data;
    });
  }, []);

  return (
    !isLoadingOrders && 
    !isLoadingProducts && (
      <div className="group-wrapper">
        <div className="group-container">
          <div className="orders">
            <ArrivalList list={orders} short={true} onClick={handleClick}/>
          </div>
          <div className="products">
          <GoodsList list={products} short={true} />
          </div>
        </div>
      </div>
    )
  );
};

export default Groups;
