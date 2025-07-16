import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import SmallSectionTitle from "../components/SmallSectionTitle";
import ProductCard from "../components/ProductCard";
import cornImg from "../assets/images/shop-corn.png";
import tomatoImg from "../assets/images/shop-tomato.png";
import cabbageImg from "../assets/images/shop-cabbage.png";
import kiwiImg from "../assets/images/shop-kiwi.png";

const Products = () => {
  return (
    <section className="products">
      <SmallSectionTitle hasImg title="customer choice" />
      <article className="title flex-between">
        <h2 className="section-title">Check Our Products</h2>
        <aside className="pagination">
          <div className="square-paginate-btn">
            <IoChevronBackOutline />
          </div>
          <div className="square-paginate-btn">
            <IoChevronForward />
          </div>
        </aside>
      </article>
      <article className="product-list">
        <ProductCard img={cornImg} title="Corn" mainPrice="45.00" />
        <ProductCard
          img={tomatoImg}
          title="Tomato"
          initialPrice="18.00"
          mainPrice="16.00"
        />
        <ProductCard
          img={cabbageImg}
          title="Cabbage"
          initialPrice="18.00"
          mainPrice="16.00"
        />
        <ProductCard
          img={kiwiImg}
          title="Kiwi"
          initialPrice="18.00"
          mainPrice="16.00"
        />
      </article>
    </section>
  );
};

export default Products;
