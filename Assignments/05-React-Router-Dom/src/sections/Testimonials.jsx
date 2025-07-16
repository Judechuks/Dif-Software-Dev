import { FaStar } from "react-icons/fa6";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import SmallSectionTitle from "../components/SmallSectionTitle";
import clientImg from "../assets/images/testimonial-01.png";
import quoteIcon from "../assets/icon/left-quote-icon.svg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <article className="col-1">
        <SmallSectionTitle hasImg title="Testimonials" />
        <article className="title">
          <h2 className="section-title">What our clients say about us</h2>
          <aside className="pagination">
            <div className="square-paginate-btn">
              <IoChevronBackOutline />
            </div>
            <div className="square-paginate-btn">
              <IoChevronForward />
            </div>
          </aside>
        </article>
      </article>
      <article className="col-2">
        <div className="star-container">
          <span className="filled">
            <FaStar />
          </span>
          <span className="filled">
            <FaStar />
          </span>
          <span className="filled">
            <FaStar />
          </span>
          <span className="filled">
            <FaStar />
          </span>
          <span className="light">
            <FaStar />
          </span>
        </div>
        <p className="text">
          “I would recommend practitioners at this center to everyone! They are
          great to work with and are excellent trainers. Thank you all!”
        </p>
        <div className="flex-between">
          <div className="client-info">
            <figure className="relative">
              <img src={clientImg} alt="client" />
              <div className="quote absolute">
                <img src={quoteIcon} alt="quote" />
              </div>
            </figure>
            <aside>
              <h4>Stephen Welch</h4>
              <p>WORKER</p>
            </aside>
          </div>
          <nav className="dot-container">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </nav>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
