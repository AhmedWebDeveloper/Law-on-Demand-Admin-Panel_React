import React from "react";
import ContactPanel from "./contactPanel";
import Navbar from "./NavBar";

const Dashboard = () => {
  return (
    <>
      <div className="d-container-parent d-flex flex-column justify-content-center ">
        <div className="d-container-main d-flex justify-content-between w-100  pr-2 pr-md-4 ">
          <Navbar />

          <div className="d-right-parent align-self-center w-100 rounded">
            <div className="d-right-parent-main h-100 rounded">
              <div className="contact-panel-container h-100">
                <div className="contact-panel-main h-100">
                  <ContactPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
