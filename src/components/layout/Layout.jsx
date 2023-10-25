import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import "./layout.css";
import { useRef } from "react";

const Layout = () => {
  const [count, setCount] = useState(0);
  const socket = io("http://localhost:3001");

  useEffect(() => {
    const connectFn = () => {
      const id = Date.now();
      socket.emit("startApp", id);
    };

    const countConactions = (data) => {
      setCount(data.count);
    };

    socket.on("connect", connectFn);
    socket.on("countConactions", countConactions);

    return () => {
      socket.off("connect", connectFn);
      socket.off("countConactions", countConactions);
    };
  }, []);

  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        <div className="header">
          <h1>{`Header (connections - ${count})`}</h1>
        </div>
        <div className="body">
          <ul className="menu">
            <li className="menu__avatar">
              <img src="image/avatar.png" alt="avatar" />
            </li>
            <li className="menu__item">
              <Link to="/arrival">ПРИХОД</Link>
            </li>
            <li className="menu__item">
              <Link to="/groups">ГРУППЫ</Link>
            </li>
            <li className="menu__item">
              <Link to="/goods">ПРОДУКТЫ</Link>
            </li>
            <li className="menu__item">
              <Link to="/users">ПОЛЬЗОВАТЕЛИ</Link>
            </li>
            <li className="menu__item">
              <Link to="/settings">НАСТРОЙКИ</Link>
            </li>
          </ul>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
