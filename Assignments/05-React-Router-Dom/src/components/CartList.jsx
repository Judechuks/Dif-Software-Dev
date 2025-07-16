import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { useCart } from "../context/UseGlobalCart";
import "../styles/cart.css";

const CartList = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <section className={`cart-panel ${isCartOpen ? "active" : ""}`}>
      <header className="cart-header">
        <h3>Your Cart</h3>
        <button className="icon-btn" onClick={() => setIsCartOpen(false)}>
          <IoMdClose />
        </button>
      </header>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <article className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.title}>
              <img src={item.img} alt={item.title} className="cart-img" />
              <span className="cart-title">{item.title}</span>
              <span className="cart-price">${item.mainPrice}</span>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(item.title)}>
                  <IoMdRemove />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.title)}>
                  <IoMdAdd />
                </button>
              </div>
            </div>
          ))}
        </article>
      )}

      <footer className="cart-actions flex-between">
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="proceed-btn">Proceed to Payment</button>
      </footer>
    </section>
  );
};

export default CartList;
