import logo from "../assets/logo/getajob_logo.png";

const Header = () => {
  return (
    <header className="header center-page">
      <a href="">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <nav>
        <ul>
          <li>
            <a href="">Companies</a>
          </li>
          <li>
            <a href="">Candidates</a>
          </li>
          <li>
            <a href="">Assessment</a>
          </li>
          <li>
            <a href="">Post a Job</a>
          </li>
          <li>
            <a href="">Career Advice</a>
          </li>
        </ul>
      </nav>
      <div className="auth">
        <a href="signup">Sign Up</a>
        <a href="login" className="login">
          Log In
        </a>
      </div>
    </header>
  );
};

export default Header;
