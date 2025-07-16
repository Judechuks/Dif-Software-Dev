import { Link } from "react-router-dom";
import { PiPhoneCallThin, PiEnvelopeThin } from "react-icons/pi";

const ContactSection = () => {
  return (
    <section className="contact-info">
      <div className="home-wrapper flex-between">
        <article className="col-1">
          <div className="link-container">
            <Link to="" className="link">
              farmers
            </Link>
            <Link to="" className="link">
              organic
            </Link>
            <Link to="" className="link">
              foods
            </Link>
            <Link to="" className="link">
              product
            </Link>
          </div>
        </article>
        <article className="col-2">
          <div className="phone">
            <div className="circle">
              <PiPhoneCallThin />
            </div>{" "}
            <p>+1(212) 255-511</p>
          </div>
          <div className="email">
            <div className="circle">
              <PiEnvelopeThin />
            </div>{" "}
            <p>noreply@pbminfotech.com</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactSection;
