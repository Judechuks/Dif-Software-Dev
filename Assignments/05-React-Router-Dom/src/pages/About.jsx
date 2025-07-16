// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useCart } from "../context/UseGlobalCart";

import CartList from "../components/CartList";
import AfterHero from "../sections/AfterHero";
import Header from "../sections/Header";
import AboutSection from "../sections/About";
import Clients from "../sections/Clients";
import Services from "../sections/Services";
import OnSaleProducts from "../sections/OnSaleProducts";
import Testimonials from "../sections/Testimonials";
import ContactSection from "../sections/ContactSection";
import Hero from "../sections/Hero";

const About = () => {
  // const { cartItems } = useContext(CartContext);
  // const { cartItems } = useCart();

  return (
    <section className="">
      <div className="separator">
        <Header />
      </div>
      <h1 className="text-center">About Page</h1>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        cum sequi corrupti labore ipsam praesentium cupiditate pariatur
        accusantium impedit animi, iste fuga asperiores suscipit modi adipisci
        minima. Ex, expedita. Iste?
      </p>
      <CartList />
      {/* <Hero /> */}
      <div className="home-wrapper">
        <AboutSection />
      </div>
      <Services />
      <OnSaleProducts />
      <div className="home-wrapper">
        <AfterHero />
        <div className="separator">
          <Clients />
        </div>
      </div>
      <div className="home-wrapper">
        <Testimonials />
      </div>
      <ContactSection />
    </section>
  );
};

export default About;
