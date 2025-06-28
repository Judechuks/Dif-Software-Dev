import JobCard from "../components/JobCard";
import paystack from "../assets/brands/paystack.png";
import google from "../assets/brands/google-icon.png";
import hr from "../assets/brands/hr.png";
import accessbank from "../assets/brands/accessbank.png";
import leftArrow from "../assets/icons/prev-arrow.png";
import rightArrow from "../assets/icons/next-arrow.png";

const Jobs = () => {
  return (
    <section className="jobs center-page">
      <h2>Recommended Jobs</h2>
      <article className="job-grid">
        <JobCard
          type="Full time"
          logo={paystack}
          company="Paystack"
          job="QA Engineer"
          location="Lagos, Nigeria"
          link=""
        />
        <JobCard
          type="Part time"
          logo={google}
          company="Google"
          job="Product Analyst"
          location="Lagos, Nigeria"
          link=""
          isActive
        />
        <JobCard
          type="Full time"
          logo={hr}
          company="Flutterwave"
          job="HR Manager"
          location="Abuja, Nigeria"
          link=""
        />
        <JobCard
          type="Full time"
          logo={accessbank}
          company="Access Bank"
          job="QA Engineer"
          location="Lagos, Nigeria"
          link=""
        />
      </article>
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
    </section>
  );
};

export default Jobs;
