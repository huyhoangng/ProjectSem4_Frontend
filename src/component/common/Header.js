import React from 'react';
import '../../assest/css/bootstrap.min.css';


const Header = () => {
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        {/* Logo Section */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="index.html"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 display-4 text-primary text-uppercase">For Health</h1>
          </a>
        </div>

        {/* Header Info and Navigation */}
        <div className="col-lg-9">
          {/* Contact and Social Media */}
          <div className="row gx-0 bg-secondary d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <h6 className="mb-0">info@example.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <h6 className="mb-0">0989000568</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle me-2" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  About
                </a>
                <a href="/class" className="nav-item nav-link">
                  Classes
                </a>
                <a href="/trainer" className="nav-item nav-link">
                  Trainers
                </a>
                <a href="/blog" className="nav-item nav-link">
                  Blog Grid
                </a>
                {/* <a href="/detail" className="nav-item nav-link">
                   Blog Detail
                </a> */}
                <a href="/rank" className="nav-item nav-link">
                  Your Rank
                </a>
                <a href="/subscription" className="nav-item nav-link">
                  Subscription
                </a>
              </div>
              <a href="/login" className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">
                Join Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
