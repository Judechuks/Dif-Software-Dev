import SmallSectionTitle from "../components/SmallSectionTitle";
import Card2 from "../components/Card2";
import cabbage from "../assets/images/cabbage.png";
import tomato from "../assets/images/tomato.png";
import carrot from "../assets/images/carrot.png";
import kiwi from "../assets/images/kiwi.png";
import purpleCabbage from "../assets/images/purple-cabbage.png";
import brinjal from "../assets/images/brinjal.png";
import orange from "../assets/images/orange.png";
import banana from "../assets/images/banana.png";
import watermelon from "../assets/images/water-melon.png";
import { useState } from "react";

const OnSaleProducts = () => {
  const categories = [
    "On Sale Product",
    "Fresh Organic Fruits",
    "Featured Product",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="on-sale">
      <article className="home-wrapper">
        <header>
          <SmallSectionTitle hasImg title="our products" />
          <h2 className="section-title text-center">
            Products Delivered to Home
          </h2>
        </header>
        <div className="category-btns">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="on-sale-products">
          <Card2
            img={cabbage}
            title="cabbage"
            initialPrice="20.00"
            mainPrice="18.00"
          />
          <Card2
            img={tomato}
            title="tomato"
            initialPrice="18.00"
            mainPrice="16.00"
          />
          <Card2
            img={carrot}
            title="carrot"
            initialPrice="11.05"
            mainPrice="10.00"
          />
          <Card2 img={kiwi} title="kiwi" initialPrice="3.00" mainPrice="2.00" />
          <Card2
            img={purpleCabbage}
            title="Purple Cabbage"
            initialPrice="65.00"
            mainPrice="55.00"
          />
          <Card2
            img={brinjal}
            title="brinjal"
            initialPrice="18.00"
            mainPrice="16.00"
          />
          <Card2
            img={orange}
            title="orange"
            initialPrice="45.00"
            mainPrice="35.00"
          />
          <Card2
            img={banana}
            title="banana"
            initialPrice="45.00"
            mainPrice="40.00"
          />
          <Card2
            img={watermelon}
            title="watermelon"
            initialPrice="30.00"
            mainPrice="25.00"
          />
        </div>
      </article>
    </section>
  );
};

export default OnSaleProducts;
