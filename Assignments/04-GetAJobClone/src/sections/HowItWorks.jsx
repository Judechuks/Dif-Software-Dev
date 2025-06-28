import ImageCard from "../components/ImageCard";
import Employee1 from "../assets/images/team-1.png";
import Employee2 from "../assets/images/team-2.png";
import Employee3 from "../assets/images/team-3.png";
import checkmark from "../assets/icons/checkmark.png";

const HowItWorks = () => {
  return (
    <section className="center-page how-it-works">
      <article className="employee-grid">
        <ImageCard img={Employee1} title="Product Analyst" at="Paystack" />
        <ImageCard img={Employee2} title="HR Manager" at="Paystack" />
        <ImageCard img={Employee3} title="Securities Trader" at="Mckinnesy" />
      </article>
      <article className="col">
        <h3>How it works</h3>
        <p>
          Getajob helps you find the right job easily. Getajob helps you find
          the right job easily. Getajob helps you find the right job easily.
        </p>
        <div className="step">
          <aside>
            <img src={checkmark} alt="icon" />
            <h4>Search Jobs</h4>
          </aside>
          <p>
            We have jobs in the most popular industries and with top companies.
            Plus, you can create alerts so you never miss a job opportunity.
          </p>
        </div>
        <div className="step">
          <aside>
            <img src={checkmark} alt="icon" />
            <h4>Create a Profile and Get Noticed</h4>
          </aside>
          <p>
            Create a profile to showcase your skills and experience so
            recruiters can find you. Upload your CV so you can apply for jobs
            quickly and easily.
          </p>
        </div>
        <div className="step">
          <aside>
            <img src={checkmark} alt="icon" />
            <h4>Apply for jobs</h4>
          </aside>
          <p>
            Find the training you need to improve your skills, or visit our
            Career Center for tips and advice to build your career.
          </p>
        </div>
      </article>
    </section>
  );
};

export default HowItWorks;
