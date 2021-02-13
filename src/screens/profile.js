import React from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "./layouts/SideNav";
import Header from "./layouts/Header";
import { Link } from "react-router-dom";

function Profile() {
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
                  <a class="navbar-brand personalDetailsLink" href="#">
                    Personal Details <span class="sr-only">(current)</span>
                  </a>
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
                            Bio
                          </a>
                        </li>
                      </Link>
                      <Link to="/nextofkin">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Next of Kin
                          </a>
                        </li>
                      </Link>
                      <Link to="/education">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
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
                    <div class="col-md-2 mb-3">
                      <label for="validationTooltip01">First name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip01"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div class="col-md-2 mb-3">
                      <label for="validationTooltip02">Middle Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip02"
                        placeholder="Middle name"
                        required
                      />
                    </div>
                    <div class="col-md-2 mb-3">
                      <label for="validationTooltip02">Last name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip02"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">Department</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="Select department"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">Employee Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="Employee code"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">New Password</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="Enter new password"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">Confirm Password</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="Confirm new password"
                        required
                      />
                      <div class="invalid-tooltip">
                        Please provide a valid state.
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip03">Date of Birth</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        placeholder="mm/dd/yyyy"
                        required
                      />
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04"> Email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="Enter valid email"
                        required
                      />
                      <div class="invalid-tooltip">
                        Please provide a valid state.
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04"> mobile Number</label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationTooltip04"
                        placeholder="Enter phone number"
                        required
                      />
                      <div class="invalid-tooltip">
                        Please provide a valid state.
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <button class="btn" type="submit">
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
export default Profile;
