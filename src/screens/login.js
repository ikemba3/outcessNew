import react from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auto } from "@popperjs/core";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section id="loginWrap">
      <div className="Main">
        <div className="row">
          <div className="col-lg-6 loginImage">
            <img
              src="assets/images/office3.jpg"
              alt="Logo"
              id="loginSideImage"
            />
            ;
          </div>
          <div className="col-lg-6 ">
            <div className="loginform mt-5">
              <div className="logoWrap">
                <img
                  src="assets/images/outcess.png"
                  className="logo"
                  style={{ width: "35vh" }}
                />
              </div>
              <form className="formWrap">
                <div class="form-group">
                  <i class="fas fa-user icon"></i>
                  <label for="exampleInputEmail1">Email address</label>

                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <i class="fas fa-unlock icon" style={{ marginLeft: 10 }}></i>
                  <label for="exampleInputPassword1">Password</label>

                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" class="btn">
                  Submit
                </button>

                <div className="mt-2 forgotpasswordlink">
                  <a active="true" href="#">
                    Forgot Password
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
