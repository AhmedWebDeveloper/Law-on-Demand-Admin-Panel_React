import React from "react";
import VideoApproval from "./videoapproval";
const VideoPlayer = () => {
  return (
    <>
      <div className="table-container video-table-container  rounded h-100">
        <table className="table mb-0">
          <thead className="table-head  position-sticky  top-0 ">
            <tr>
              <th scope="col">Video</th>
              <th scope="col">Approval</th>
            </tr>
          </thead>
          <tbody>
            <VideoApproval />
          </tbody>
        </table>
      </div>
    </>
  );
};
export default VideoPlayer;
 