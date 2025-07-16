import { Link } from "react-router-dom";
import AboutImg from "../assets/images/about-img.png";
import SmallSectionTitle from "../components/SmallSectionTitle";
import diagonalArrow from "../assets/icon/diagonal-arrow.svg";

const About = () => {
  return (
    <section className="about">
      <article className="col col-1">
        <img src={AboutImg} alt="About" />
      </article>
      <article className="col col-2">
        <SmallSectionTitle hasImg title="about us" />
        <aside className="title">
          <h2 className="section-title">
            We’re Best Agriculture & Organic Farms
          </h2>
          <p className="desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <ul className="service-list">
            <li>Garlic Farming</li>
            <li>Fertilizer Distribution</li>
            <li>Lavender Farming</li>
            <li>Poultry Farming</li>
            <li>Gourmet Mushrooms</li>
            <li>Organic Fertilizer</li>
          </ul>
          <Link to="/about" className="curve-btn">
            Know More <img src={diagonalArrow} alt="diagonal arrow" />
          </Link>
        </aside>
      </article>
    </section>
  );
};

export default About;
