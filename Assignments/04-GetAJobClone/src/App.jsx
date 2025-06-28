import Jobs from "./sections/Jobs";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import HowItWorks from "./sections/HowItWorks";
import Categories from "./sections/Categories";
import Network from "./sections/Network";
import Reviews from "./sections/Reviews";
import JobBanner from "./sections/JobBanner";

function App() {
  return (
    <main>
      <Hero />
      <Jobs />
      <HowItWorks />
      <Categories />
      <Network />
      <Reviews />
      <JobBanner />
      <Footer />
    </main>
  );
}

export default App;
