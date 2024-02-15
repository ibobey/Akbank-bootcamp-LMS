import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-left">
        <div className="navbar-left-icons">
          <i className="fa-solid fa-phone" id="navbar-left-icon-phone"></i>
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="navbar-center">
        <i className="fa-solid fa-house"></i>
      </div>
      <div className="navbar-right">
        <i className="fa-solid fa-user"></i>
      </div>
    </nav>
  );
}
