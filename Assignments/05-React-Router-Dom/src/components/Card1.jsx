const Card1 = ({ img, title, desc }) => {
  return (
    <article className="card">
      <aside className="circle">
        <img src={img} alt="card image" />
      </aside>
      <aside>
        <h4>{title}</h4>
        <p>{desc}</p>
      </aside>
    </article>
  );
};

export default Card1;
