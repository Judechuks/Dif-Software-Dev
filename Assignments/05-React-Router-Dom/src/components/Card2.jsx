const Card2 = ({ img, title, initialPrice, mainPrice }) => {
  return (
    <article className="card">
      <aside className="card-img">
        <img src={img} alt="card image" />
      </aside>
      <aside>
        <h4>{title}</h4>
        <div className="price-list">
          <p className="initial-price">${initialPrice}</p>
          <p className="main-price">${mainPrice}</p>
        </div>
      </aside>
    </article>
  );
};

export default Card2;
