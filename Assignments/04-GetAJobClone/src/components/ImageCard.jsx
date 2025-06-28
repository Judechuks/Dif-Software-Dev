const ImageCard = ({ img, title, at }) => {
  return (
    <section className="img-card">
      <div className="img-container">
        <img src={img} alt="image card" />
      </div>
      <div className="title">
        <h4>
          {title} <span>@ {at}</span>
        </h4>
      </div>
    </section>
  );
};

export default ImageCard;
