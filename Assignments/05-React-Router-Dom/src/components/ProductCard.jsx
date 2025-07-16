import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../context/UseGlobalCart";

const ProductCard = ({ img, title, initialPrice, mainPrice }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ img, title, mainPrice });
  };
  return (
    <article className="card">
      <div className="top">
        <img src={img} alt={title} />
        <div className="star-container">
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="price-container">
        <p className="initial-price">{initialPrice && `$${initialPrice}`}</p>{" "}
        <p className="main-price">${mainPrice}</p>
        <div className="cart absolute place-center" onClick={handleAdd}>
          <MdOutlineShoppingCart />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
