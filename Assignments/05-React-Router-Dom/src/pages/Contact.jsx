import { useContext } from "react";
import UserContext from "../context/userContext";

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="">
      <h1 className="text-center">Contact Page</h1>
      <h2>Contact me using: {user.phone}</h2>
    </main>
  );
};

export default Contact;
