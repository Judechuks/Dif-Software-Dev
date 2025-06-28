import Header from "./Header";
import searchIcon from "../assets/icons/search.png";
import mapPin from "../assets/icons/map-pin.png";
import paystackLogo from "../assets/brands/paystack.svg";
import googleLogo from "../assets/brands/google.svg";
import kpmgLogo from "../assets/brands/kpmg.svg";
import heroImage from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="wrapper">
      <svg
        width="930"
        height="976"
        viewBox="0 0 930 976"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 30C0 13.4314 13.4315 0 30 0L900 0C916.569 0 930 13.4315 930 30V945.625C930 963.807 913.956 977.809 895.941 975.349L25.9409 856.542C11.0789 854.513 0 841.818 0 826.818L0 30Z"
          fill="#06942A"
          fill-opacity="0.05"
        />
      </svg>
      <section className="hero center-page">
        <Header />
        <div className="hero-section">
          <div className="col">
            <h1>
              Find a <span>job</span> easily
            </h1>
            <p>
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </p>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter keywords, skill, interest"
              />
              <div className="vertical-divider">
                <img src={mapPin} alt="map icon" />
              </div>
              <input type="text" placeholder="Location" />
              <button type="submit">
                <img src={searchIcon} alt="search icon" />
              </button>
            </div>
            <aside>
              <h4>Trusted by:</h4>
              <div className="hero-brands">
                <img src={paystackLogo} alt="paystack" />
                <img src={googleLogo} alt="google" />
                <img src={kpmgLogo} alt="kpmg" />
              </div>
            </aside>
          </div>
          <article className="col">
            <div className="img">
              <img src={heroImage} alt="hero image" />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Hero;
