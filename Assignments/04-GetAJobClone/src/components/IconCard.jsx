const IconCard = ({ img, title, number }) => {
  return (
    <article className="card">
      <div className="circle">
        <img src={img} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>({number} new jobs)</p>
    </article>
  );
};

export default IconCard;
