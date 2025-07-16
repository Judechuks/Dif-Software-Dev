import { LiaCalendar } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import diagonalArrow from "../assets/icon/diagonal-arrow.svg";

const BlogCard = ({ img, title, category, date, author }) => {
  return (
    <article className="card">
      <div className="top relative">
        <img src={img} alt={title} />
        <aside className="category absolute">{category}</aside>
        <aside className="circle absolute">
          <img src={diagonalArrow} alt="diagonal arrow" />
        </aside>
      </div>
      <div className="bottom">
        <div className="info">
          <span className="date">
            <LiaCalendar />
            <p>{date}</p>
          </span>{" "}
          <span className="author">
            <CiUser />
            <p>{author}</p>
          </span>
        </div>
        <h3 className="title">{title}</h3>
      </div>
    </article>
  );
};

export default BlogCard;
