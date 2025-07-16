import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import SmallSectionTitle from "../components/SmallSectionTitle";
import BlogCard from "../components/BlogCard";
import blogImg1 from "../assets/images/blog-image-01.png";
import blogImg2 from "../assets/images/blog-image-02.png";
import blogImg3 from "../assets/images/blog-image-03.png";

const LatestBlog = () => {
  return (
    <section className="latest-blog">
      <SmallSectionTitle hasImg title="Latest Blog" />
      <article className="title flex-between">
        <h2 className="section-title">Latest posts & articles</h2>
        <aside className="pagination">
          <div className="square-paginate-btn">
            <IoChevronBackOutline />
          </div>
          <div className="square-paginate-btn">
            <IoChevronForward />
          </div>
        </aside>
      </article>
      <article className="blog-list">
        <BlogCard
          img={blogImg1}
          title="What technology is used in vertical farming?"
          category="food crops"
          date="march 28, 2024"
          author="admin"
        />
        <BlogCard
          img={blogImg2}
          title="Which type of farming is more prevalent today?"
          category="organic farm"
          date="march 28, 2024"
          author="admin"
        />
        <BlogCard
          img={blogImg3}
          title="The Farmers Sentiment Darkens Hopes Fade"
          category="farming tips"
          date="march 28, 2024"
          author="admin"
        />
      </article>
    </section>
  );
};

export default LatestBlog;
