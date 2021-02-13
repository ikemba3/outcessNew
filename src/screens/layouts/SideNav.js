import react from "react";
import { Button, form } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="col-lg-2 sidenav ">
      <div className="employeeId">
        <div className=" user-business-details">
          <p>Employee</p>
          <p style={{ fontWeight: 100 }} className="emailId">
            paschal@gmail.com
          </p>
        </div>
      </div>
      <div className="navbar-collapse mt-4" id="navbarTogglerDemo03 ">
        <ul className="nav flex-column">
          <Link to="/homepage">
            <li className="nav-item">
              <a className="nav-link active" href="">
                <i className="fa fa-home" aria-hidden="true"></i>&nbsp; Home{" "}
                <span className="ordersnotification" aria-hidden="true"></span>
              </a>
            </li>
          </Link>
          <Link to="/profile">
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="fa fa-cog" aria-hidden="true"></i>&nbsp; Settings
              </a>
            </li>
          </Link>
          <Link>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i class="fa fa-question" aria-hidden="true"></i>&nbsp; Support
              </a>
            </li>
          </Link>
          <Link>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                <i class="fa fa-question" aria-hidden="true"></i>&nbsp; Apply
                for leave
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
