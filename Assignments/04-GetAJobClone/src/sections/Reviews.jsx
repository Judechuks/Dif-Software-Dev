import customer from "../assets/images/man.png";
import leftArrow from "../assets/icons/prev-arrow.png";
import rightArrow from "../assets/icons/next-arrow.png";

const Reviews = () => {
  return (
    <section className="reviews center-page">
      <h2>What are our customers saying?</h2>
      <div className="reviews-container">
        <article className="img-container">
          <img src={customer} alt="hero image" />
        </article>
        <article className="col">
          <nav>
            <div className="pagination">
              <span>
                <img src={leftArrow} alt="left arrow" />
              </span>
              <span>
                <img src={rightArrow} alt="right arrow" />
              </span>
            </div>
          </nav>
          <aside>
            <p>
              The platform is really convenient to reach out to companies & I
              have managed to secure 2 interviews already! I can also track my
              application status instead of wondering whether the company has
              seen or shortlisted me
            </p>
          </aside>
          <div className="customer-info">
            <h3>Irma Black</h3>
            <h4 className="occupation">HR Manager at MasterCard</h4>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Reviews;
