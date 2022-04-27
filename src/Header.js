import "./header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <a href="#" className="logo">
        {" "}
        Bluebis
      </a>
      <input
        type="text"
        name="search"
        placeholder="Search service provider & service you need"
      />
      <div className="header-right">
        <a href="#">services</a>
        <a href="#">post a task </a>
        <a href="#">login / signup</a>
      </div>

      <div>
        <button className="btn"> become a provider</button>
      </div>
    </div>
  );
};
export default Header;
