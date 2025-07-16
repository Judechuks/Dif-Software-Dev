import Card1 from "../components/Card1";
import memberIcon from "../assets/icon/member-icon.png";
import returnIcon from "../assets/icon/return-icon.png";
import shippingIcon from "../assets/icon/shipping-icon.png";
import supportIcon from "../assets/icon/support-icon.png";

const AfterHero = () => {
  return (
    <section className="after-hero">
      <Card1
        img={memberIcon}
        title="Member Discount"
        desc="Back guarantee under 7 days"
      />
      <Card1
        img={returnIcon}
        title="Money Return"
        desc="Support online 24 hours a day"
      />
      <Card1
        img={shippingIcon}
        title="Free Shipping"
        desc="Free shipping on all order"
      />
      <Card1
        img={supportIcon}
        title="Online Support"
        desc="Online support 24/7"
      />
    </section>
  );
};

export default AfterHero;
