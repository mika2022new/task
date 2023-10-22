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
            <li className="item">
              <Link to="/arrival">Приход</Link>
            </li>
            <li className="item">
              <Link to="/groups">Группы</Link>
            </li>
            <li className="item">
              <Link to="/goods">Продукты</Link>
            </li>
            <li className="item">
              <Link to="/users">Пользователи</Link>
            </li>
            <li className="item">
              <Link to="/settings">Настройки</Link>
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
