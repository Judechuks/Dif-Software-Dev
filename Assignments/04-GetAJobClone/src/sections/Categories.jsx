import IconCard from "../components/IconCard";
import shield from "../assets/icons/shield.png";
import laptop from "../assets/icons/laptop.png";
import calculator from "../assets/icons/calculator.png";
import book from "../assets/icons/book.png";
import healthcare from "../assets/icons/healthcare.png";
import artDesign from "../assets/icons/art-design.png";
import account from "../assets/icons/account.png";
import oilAndGas from "../assets/icons/oil-and-gas.png";

const Categories = () => {
  return (
    <section className="categories center-page">
      <h2>Popular Categories</h2>
      <div className="card-grid">
        <IconCard img={oilAndGas} title="Oil and Gas" number="20" />
        <IconCard img={healthcare} title="Healthcare" number="10" />
        <IconCard img={book} title="Education" number="10" />
        <IconCard img={account} title="Accounting" number="10" />
        <IconCard
          img={artDesign}
          title="Design, Art, and Multimedia"
          number="20"
        />
        <IconCard img={laptop} title="Technology" number="10" />
        <IconCard img={shield} title="Security" number="10" />
        <IconCard img={calculator} title="Data Analyst" number="10" />
      </div>
    </section>
  );
};

export default Categories;
