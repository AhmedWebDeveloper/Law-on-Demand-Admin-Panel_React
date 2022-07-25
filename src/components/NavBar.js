import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import Swal from "sweetalert2";

const NavBar = () => {
  const [dashboardview, setdashboardview] = useState(false);

  const dashboardsett = () => {
    setdashboardview(!dashboardview);
  };

  const logoutfun = async () => {
    Swal.fire({
      title: "Are you sure to logout ?",
      icon: "question",
      showCancelButton: true,
    }).then((val) => {
      if (val.isConfirmed) {
        window.location.href = "/login";
      }
    });
  };
  return (
    <>
      <div
        className="left-d-menu-after position-fixed w-100 h-100"
        onClick={dashboardsett}
      ></div>

      <div className="navigation-plus-toogle-header px-2 py-2  justify-content-between align-items-center  bg-white d-none">
        <img src={Logo} alt="" className="dashboard-logo " />
        <div className="" onClick={dashboardsett}>
          <svg
            className="w-100 h-100 bi"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="d-left-parent  d-flex flex-column justify-content-between align-items-start py-3  rounded">
        <div className="d-flex flex-column align-items-center w-100 ">
          <div className="logo-plus-cross-btn d-flex justify-content-between w-100 px-2">
            <img src={Logo} alt="" className="dashboard-logo2 " />
            <div className="cross-icon d-none" onClick={dashboardsett}></div>
          </div>

          <div className="left-menu-bottom-border    my-2 border-bottom pt-2"></div>

          <div className="d-left-nav-links d-flex flex-column h-50 justify-content-start align-items-start pt-3 w-100">
            <NavLink
              exact
              activeClassName="common"
              to="/users"
              className="btn d-left-nav-link-user text-decoration-none w-100 text-start active"
            >
              Users
            </NavLink>

            <NavLink
              exact
              activeClassName="common"
              to="/videos"
              className="d-left-nav-link-video  text-decoration-none btn w-100 text-start"
            >
              Videos
            </NavLink>
            <NavLink
              exact
              activeClassName="common"
              to="/contacts"
              href="#"
              className="d-left-nav-link-contact  text-decoration-none btn w-100 text-start"
            >
              Contacts
            </NavLink>
          </div>
        </div>

        <button
          type="button"
          className="logout-btn btn mt-5 text-white fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={logoutfun}
        >
          Logout
        </button>
      </div>

      <style global jsx>
        {`
          .left-d-menu-after {
            display: ${dashboardview ? "block !important" : "none"};
          }

          .d-left-parent {
            left: ${dashboardview ? "0% !important" : "-100% !important"};
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
