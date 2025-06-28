import mapPin from "../assets/icons/map-pin.png";

const JobCard = ({ type, logo, company, job, location, link, isActive }) => {
  return (
    <div className="card">
      <header className="card-header">
        <aside className="type">{type}</aside>
        <div className="brand">
          <img src={logo} alt={company} />
          <h3>{job}</h3>
        </div>
      </header>
      <footer className="card-footer">
        <h4>{company}</h4>
        <div className="location">
          <div className="flex items-center place">
            <img src={mapPin} alt="map icon" />
            <span className="address">{location}</span>
          </div>
          <aside className={isActive ? "apply active" : "apply"}>
            <a href={link}>Apply now</a>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default JobCard;
