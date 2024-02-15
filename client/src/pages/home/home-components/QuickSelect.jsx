import { Link } from "react-router-dom";
import "./QuickSelect.css";

export default function QuickSelect(prop) {
  const { info, source, routeTo } = prop;
  return (
    <div className="home-component-quick-select-container">
      <Link to={routeTo}>
        <div className="home-component-quick-select">
          <img
            className="home-component-quick-select-img"
            src={source}
            alt={info}
          ></img>
        </div>
      </Link>
      <div className="home-component-quick-select-info">{info}</div>
    </div>
  );
}
