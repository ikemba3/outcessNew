import React from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./layouts/SideNav";
import Header from "./layouts/Header";
import { Link } from "react-router-dom";

function EducationInfo() {
  return (
    <section id="maindashcontent" className="App">
      <div className="row">
        <Sidenav />
        <div className="col-lg-10">
          <Header />
          <div className="profileForm">
            <div className="row">
              <div className="col xxx ">
                <nav class="navbar navbar-expand-lg navbar-light profileNavbar mt-1">
                  <Link to="/profile">
                    <a class="navbar-brand navbar-bg-light " href="#">
                      Personal Details
                    </a>
                  </Link>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav">
                      <Link to="/bioinfo">
                        <li class="nav-item ">
                          <a class="nav-link" href="#">
                            Bio <span class="sr-only">(current)</span>
                          </a>
                        </li>
                      </Link>
                      <Link to="/nextofkin">
                        <li class="nav-item">
                          <a class="nav-link " href="#">
                            Next of Kin
                          </a>
                        </li>
                      </Link>
                      <Link to="/education">
                        <li class="nav-item">
                          <a class="nav-link educationNav" href="#">
                            Education
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </nav>
                <hr className="horizontalLine" />
              </div>
            </div>
            <div className="row details">
              <div className="col">
                <form class="needs-validation" novalidate>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">
                        Institution Attended
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="Name of School"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">Course of Study</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="last name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">
                        Professional Certification
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="enter email"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">
                        Year of Graduation
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="enter phone number"
                        required
                      />
                      <div class="invalid-tooltip">
                        Please provide a valid state.
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <button class="btn " type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EducationInfo;
