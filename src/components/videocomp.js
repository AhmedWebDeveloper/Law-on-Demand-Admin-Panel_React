import React from "react";
import Navbar from "./NavBar";
import Video from "./videocard";

const Dashboard = () => {
  return (
    <>
      <div className="d-container-parent d-flex flex-column justify-content-center ">
        <div className="d-container-main d-flex justify-content-between w-100  pr-2 pr-md-4 ">
          <Navbar />

          <div className="d-right-parent video-container align-self-center w-100 rounded">
            <div className="d-right-parent-main h-100 rounded">
              <div className="video-panel-container py-0 h-100">
                <div className="video-panel-main h-100">
                  <Video />
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
