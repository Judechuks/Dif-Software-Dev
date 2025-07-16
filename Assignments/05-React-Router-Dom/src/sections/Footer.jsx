import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer home-wrapper">
      <article className="col-1">
        <Link to="/">
          <img src={logo} alt="agrimo" />
        </Link>
        <p>
          Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
          In vitae sapien viverra est Duo ei ullum inani senserit.
        </p>
        <aside className="social-media">
          <Link to="" className="circle">
            <FaFacebookF />
          </Link>
          <Link to="" className="circle">
            <FaXTwitter />
          </Link>
          <Link to="" className="circle">
            <FaLinkedinIn />
          </Link>
          <Link to="" className="circle">
            <FaInstagram />
          </Link>
        </aside>
      </article>
      <article className="col-2">
        <h2>
          Professional & modern, a theme designed to help your business stand
          out from the rest.
        </h2>
        <div className="links">
          <aside className="col">
            <h4>Useful Link</h4>
            <ul>
              <li>
                <Link to="/">Company</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </aside>
          <aside className="col">
            <h4>Working Time</h4>
            <ul>
              <li>Mon - Fri: 9:00am - 5:00pm</li>
              <li>Saturday 10:00am - 6:00pm</li>
              <li>Sunday Closed</li>
            </ul>
          </aside>
          <aside className="col">
            <h4>Our Address</h4>
            <ul>
              <li>Old Westbury 256, New York</li>
              <li>11201, United States</li>
            </ul>
          </aside>
        </div>
        <div className="bottom flex-between">
          <div className="terms">
            <Link to="/">Terms & Conditions</Link> |{" "}
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="copyright">
            <p>Copyright &copy; 2024@Agrimo, All Rights Reserved.</p>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
