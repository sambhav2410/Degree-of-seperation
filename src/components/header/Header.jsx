import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="left">
          <div className="logo">
            <img src="./images/R.png" />
          </div>
        </div>
        <div className="right">
          <Link to="/">
            <button className="btn">Add</button>
          </Link>

          <Link to="/connect">
            <button className="btn">Relationship</button>
          </Link>

          <Link to="/view">
            <button className="btn">View</button>
          </Link>
        </div>
      </header>
    </>
  );
}
