import { NavLink } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";
import "../App.css";
import "../NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-[100px] bg-red-600 pe-11 relative">
        <div className="logo">
          <img className="w-[128px]" src={BurgerLogo} />
        </div>
        <ul className="flex items-center gap-3 p-4">
          <li>
            <NavLink className="text-white" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white" to="menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white" to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;