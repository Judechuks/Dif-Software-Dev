import Asterisks from "../assets/icon/asterisk-icon.png";

const Services = () => {
  return (
    <section>
      <div className="slider-wrapper">
        <div className="slider-track">
          <div className="slider-content">
            <div className="slider-item">Agriculture</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
            <div className="slider-item">Farming</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
            <div className="slider-item">Organic</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
            <div className="slider-item">Vegetables</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
          </div>
          {/* Repeat the exact same content  */}
          <div className="slider-content">
            <div className="slider-item">Agriculture</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
            <div className="slider-item">Farming</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
            <div className="slider-item">Organic</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
            <div className="slider-item">Vegetables</div>
            <div className="asterisk">
              <img src={Asterisks} alt="asterisks icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
