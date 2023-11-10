import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to="/basket">Basket</NavLink>
    </nav>
  );
};

export default Header;
