import logo from "../assets/logo/getajob.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer center-page">
      <div className="footer-container">
        <article>
          <a href="">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <p>
            Getajobng provides a full online service for anyone looking for a
            new job. We're not a recruitment agency, we're a job site.
          </p>
        </article>
        <article>
          <h3>Information</h3>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Terms & Condition</a>
            </li>
          </ul>
        </article>
        <article>
          <h3>Job Seekers</h3>
          <ul>
            <li>
              <a href="">Create Account</a>
            </li>
            <li>
              <a href="">Job List</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </article>
        <article>
          <h3>Employers</h3>
          <ul>
            <li>
              <a href="">Create Account</a>
            </li>
            <li>
              <a href="">Post a Job</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </article>
        <article className="socials">
          <h3>Social Media:</h3>
          <ul>
            <li>
              <a href="">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="footer-divider">
        &copy; Copyright Get-A-Job RMS 2019, All right reserved
      </div>
    </footer>
  );
};

export default Footer;
