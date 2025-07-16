import { Link, useLocation } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../assets/images/logo.png";
import phone from "../assets/icon/phone.png";
import diagonalArrow from "../assets/icon/diagonal-arrow.svg";
import { useCart } from "../context/UseGlobalCart";

const Header = () => {
  const location = useLocation();
  const isActive = (link) => location.pathname === link;

  const { cartItems, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="agrimo logo" className="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/" className={isActive("/") ? `active` : ``}>
            Home <span className="dot"></span>
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive("/about") ? `active` : ``}>
            About <span className="dot"></span>
          </Link>
        </li>
        <li>
          <Link to="/" className={isActive("/services") ? `active` : ``}>
            Services <span className="dot"></span>
          </Link>
        </li>
        <li>
          <Link to="/" className={isActive("/portfolio") ? `active` : ``}>
            Portfolio <span className="dot"></span>
          </Link>
        </li>
        <li>
          <Link to="/" className={isActive("/blog") ? `active` : ``}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive("/contact") ? `active` : ``}>
            Contact Us
          </Link>
        </li>
      </ul>
      <nav className="side-nav">
        <div className="call">
          <img src={phone} alt="phone icon" className="phone-icon" />
          <span>
            <p>Call us Now</p>
            <p>+1(212)255-511</p>
          </span>
        </div>
        <div className="search relative" onClick={() => setIsCartOpen(true)}>
          <MdOutlineShoppingCart />
          <div className="total-items absolute">{cartItems.length}</div>
        </div>
        <div className="get-in-touch">
          <Link to="" className="link curve-btn">
            Get In Touch <img src={diagonalArrow} alt="diagonal arrow" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
