import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Arrival } from "./components/arrival";
import { Groups } from "./components/groups";
import { Goods } from "./components/goods";
import { Users } from "./components/users";
import { Settings } from "./components/settings";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  const isLoadingProducts = useSelector((state) => state.products.isLoading);
  const isLoadingOrders = useSelector((state) => state.orders.isLoading);


  useEffect(() => {
    fetch("http://localhost:3002/products")
    .then((respons) => respons.json())
    .then((data) => dispatch({ type: "setAllProducts",payload:data}));

    fetch("http://localhost:3002/orders")
    .then((respons) => respons.json())
    .then((data) => {
      dispatch({type:"setAllOrders",payload:data})
    });

  },[])

  return (!isLoadingOrders && ! isLoadingProducts &&
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="arrival" element={<Arrival />} />
          <Route path="groups" element={<Groups />} />
          <Route path="goods" element={<Goods />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
