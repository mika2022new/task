// import { useEffect, useState } from "react";
import { useState, useRef } from "react";

import { GoodsList } from "../goods/goodsList";
import { ArrivalList } from "../arrival/arrivalList";
import "./groups.css";
import { useSelector } from "react-redux";

const Groups = () => {

  // const [orders, setOrders] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  // const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const orders = useSelector((state) => state.orders.ordersList);
  const products = useSelector((state) => state.products.productsList);
  const isLoadingOrders = useSelector((state) => state.orders.isLoading);
  const isLoadingProducts = useSelector((state) => state.products.isLoading);
  
  const initProductsRef = useRef([]);

  const [listProducts, setListProducts] = useState(products);

  const handleClick = (id) => {
    const newListProducts = products.filter(el => el.order === id);
    setListProducts(newListProducts);
  };

  // const handleClick = (id) => {
  //   const listProducts = initProductsRef.current.filter(el => el.order === id);
  //   setProducts(listProducts);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:3002/orders")
  //   .then((respons) => respons.json())
  //   .then((data) => {
  //     setOrders(data);
  //     setIsLoadingOrders(false);
  //   });

  //   fetch("http://localhost:3002/products")
  //   .then((respons) => respons.json())
  //   .then((data) => {
  //     setProducts(data);
  //     setIsLoadingProducts(false);
  //     initProductsRef.current = data;
  //   });
  // }, []);

  return (
    !isLoadingOrders && 
    !isLoadingProducts && (
      <div className="group-wrapper">
        <div className="group-container">
          <div className="orders">
            <ArrivalList list={orders} short={true} onClick={handleClick}/>
          </div>
          <div className="products">
          <GoodsList list={listProducts} short={true} />
          </div>
        </div>
      </div>
    )
  );
};

export default Groups;
