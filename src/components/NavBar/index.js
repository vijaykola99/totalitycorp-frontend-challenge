import { useState } from "react";
import "./index.css";

const headerText = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Solar Roof",
  "Solar Panels",
];

const sideBarList = [
  "Used Inventory",
  "Trade-In",
  "Test Drive",
  "Insurance",
  "Cybertruck",
  "Roadster",
  "Semi",
  "Charging",
  "Powerwall",
  "Commercial Energy",
  "Utilities",
  "Find Us",
  "Support",
  "Investor Relations",
];
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const onSetMenuStatus = () => {
    setMenu((prevSetMenu) => !prevSetMenu);
  };
  const menuBar = () => (
    <ul className="menu-bar">
      <p onClick={onSetMenuStatus} className="close-icon">
        X
      </p>
      {sideBarList.map((sidebarElement) => (
        <li key={sidebarElement} className="list-item">
          <a className="link" href="#">
            {sidebarElement}
          </a>
        </li>
      ))}
      <li className="list-item-icon">
        <p>United States</p>
        <p>English</p>
      </li>
    </ul>
  );

  return (
    <nav className="navbar-background">
      <img
        src="https://res.cloudinary.com/dijmpdww2/image/upload/v1666157393/Tesla-logo_hx0s4c.png"
        alt="logo"
        className="logo"
      />
      <div className="model-names-container">
        {headerText.map((eachItem) => (
          <p key={eachItem} className="header-text">
            {eachItem}
          </p>
        ))}
      </div>
      <div className="account-section">
        <p className="header-text">Shop</p>
        <p className="header-text">Account</p>
        <button onClick={onSetMenuStatus} type="button" className="menu-button">
          Menu
        </button>
      </div>
      {menu && menuBar()}
    </nav>
  );
};
export default NavBar;
