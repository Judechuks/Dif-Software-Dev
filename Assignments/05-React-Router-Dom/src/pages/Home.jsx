import Header from "../sections/Header";
import Hero from "../sections/Hero";
import AfterHero from "../sections/AfterHero";
import Products from "../sections/Products";
import Services from "../sections/Services";
import About from "../sections/About";
import OnSaleProducts from "../sections/OnSaleProducts";
import Testimonials from "../sections/Testimonials";
import Clients from "../sections/Clients";
import FreeQuote from "../sections/FreeQuote";
import LatestBlog from "../sections/LatestBlog";
import ContactSection from "../sections/ContactSection";
import CartList from "../components/CartList";

const Home = () => {
  return (
    <section className="">
      <div className="separator">
        <Header />
      </div>
      <CartList />
      <Hero />
      <div className="home-wrapper">
        <AfterHero />
        <Products />
      </div>
      <Services />
      <div className="home-wrapper">
        <About />
      </div>
      <OnSaleProducts />
      <div className="home-wrapper">
        <Testimonials />
        <Clients />
        <FreeQuote />
        <LatestBlog />
      </div>
      <ContactSection />
    </section>
  );
};

export default Home;
