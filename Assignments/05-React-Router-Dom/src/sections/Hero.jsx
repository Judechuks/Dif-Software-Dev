import { Link } from "react-router-dom";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import diagonalArrow from "../assets/icon/diagonal-arrow.svg";
import heroImg from "../assets/images/hero-img.png";
import stamp from "../assets/icon/hero-stamp.png";

const Hero = () => {
  return (
    <section className="hero">
      <article className="col col-1">
        <div className="flex-between">
          <span className="tiny-header">let's eat healthier</span>
          <img src={stamp} alt="stamp" className="stamp" />
        </div>
        <h1>
          Respect Nature, <div className="bold">Gain Benefits</div>
        </h1>
        <Link to="/" className="curve-btn">
          Contact Us <img src={diagonalArrow} alt="diagonal arrow" />
        </Link>
      </article>
      <article className="col col-2 relative">
        <img src={heroImg} alt="hero image" />
        <div className="pagination-btn absolute">
          <div className="circle">
            <IoChevronForward />
          </div>
          <div className="circle">
            <IoChevronBackOutline />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
