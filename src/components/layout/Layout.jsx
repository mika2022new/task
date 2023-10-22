import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        <div className="header">
          <h1>Header</h1>
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
