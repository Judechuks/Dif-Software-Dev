import { Link } from "react-router-dom";
import SmallSectionTitle from "../components/SmallSectionTitle";
import diagonalArrow from "../assets/icon/diagonal-arrow.svg";
import quoteImg from "../assets/images/quote-img.png";

const FreeQuote = () => {
  return (
    <section className="free-quote">
      <article className="col-1">
        <img src={quoteImg} alt="Vegetables" />
      </article>
      <article className="col-2">
        <SmallSectionTitle hasImg title="Free Quote" />
        <aside className="title">
          <h2 className="section-title">Organic Vegetables in Our Store</h2>
          <p className="desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration look even.
          </p>
          <Link to="/about" className="curve-btn">
            Buy Now <img src={diagonalArrow} alt="diagonal arrow" />
          </Link>
        </aside>
      </article>
    </section>
  );
};

export default FreeQuote;
