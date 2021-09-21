import React from "react";
import UserPanel from "./userPanel";
import Navbar from "./NavBar";

const Dashboard = () => {
  return (
    <>
      <div className="d-container-parent d-flex flex-column justify-content-center">
        <div className="d-container-main d-flex justify-content-between  w-100  pr-2 pr-md-4 ">
          <Navbar />

          <div className="d-right-parent align-self-center w-100 rounded">
            <div className="d-right-parent-main h-100 rounded">
              <UserPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
