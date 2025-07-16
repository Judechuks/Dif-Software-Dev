import client1 from "../assets/images/client-logo-01.png";
import client2 from "../assets/images/client-logo-02.png";
import client3 from "../assets/images/client-logo-03.png";
import client4 from "../assets/images/client-logo-04.png";
import client5 from "../assets/images/client-logo-05.png";
import client6 from "../assets/images/client-logo-06.png";

const Clients = () => {
  return (
    <section className="clients flex-between">
      <img src={client1} alt="client 1" />
      <img src={client2} alt="client 2" />
      <img src={client3} alt="client 3" />
      <img src={client4} alt="client 4" />
      <img src={client5} alt="client 5" />
      <img src={client6} alt="client 6" />
    </section>
  );
};

export default Clients;
