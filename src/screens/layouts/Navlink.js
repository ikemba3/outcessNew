import react from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <section id="navsectiondash" className="container-fluid">
      <div className="container">
        <div className="row nav-wrapper">
          <div className="col-lg-6">
            <a href="/homepage">
              <img src="/assets/Images/outcess.png" style={{ width: "30vh" }} />
            </a>
          </div>
          <div className="col-lg-3">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <div className="cover">
                  <a className="nav-link" href="#">
                    <img
                      src="/assets/images/user.svg"
                      style={{ width: "23px" }}
                      className="menu-icon"
                    />

                    <div className="dropdown">
                      <img
                        src="/assets/images/download.svg"
                        style={{ width: "10px" }}
                        className="dropbtn"
                      />
                      <div className="dropdown-content">
                        <a href="#">Log out</a>
                        <a href="#">my Application</a>
                        <a href="#">Settings</a>
                        <a href="#">Logout</a>
                      </div>
                    </div>

                    {/* <span>
                      <img
                        src="/assets/images/download.svg"
                        style={{ width: "10px" }}
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        href="#"
                        data-toggle="dropdown"
                      />
                    </span>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Log out
                        <a class="dropdown-item" href="#">
                          my Application
                        </a>
                        <a class="dropdown-item" href="#">
                          Settings
                        </a>
                        <a class="dropdown-item" href="#">
                          Logout
                        </a>
                      </a>
                    </div> */}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
