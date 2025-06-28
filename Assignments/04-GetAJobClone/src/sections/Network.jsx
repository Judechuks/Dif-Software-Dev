import NetworkCircle from "../components/NetworkCircle";
import arrowRight from "../assets/icons/next-arrow.png";
import uber from "../assets/brands/uber.png";
import nineMobile from "../assets/brands/9mobile.png";
import zapier from "../assets/brands/zapier.png";
import google from "../assets/brands/google.png";
import airtel from "../assets/brands/airtel.png";
import accenture from "../assets/brands/accenture.png";
import mackinsey from "../assets/brands/mackinsey.png";
import hr from "../assets/brands/hr.png";

const Network = () => {
  return (
    <section className="network center-page">
      <article className="col">
        <h2>Over 1000+ jobs from top companies in our network</h2>
        <p>
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p>
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <a href="" className="link">
          Learn More <img src={arrowRight} alt="arrow right" />
        </a>
      </article>
      <article className="network-grid">
        <NetworkCircle img={uber} />
        <NetworkCircle img={zapier} />
        <NetworkCircle img={nineMobile} />
        <NetworkCircle img={google} />
        <NetworkCircle img={accenture} />
        <NetworkCircle img={airtel} />
        <NetworkCircle img={hr} />
        <NetworkCircle img={mackinsey} />
      </article>
    </section>
  );
};

export default Network;
