import React, { useState } from "react";
import Swal from "sweetalert2";
import { Player, BigPlayButton } from "video-react";
import data from "./videodata";
const Videoapproval = () => {
  const [videoApproval, setVideoApproval] = useState(false);
  const verifyVideo = () => {
    setVideoApproval(!videoApproval);
    const modalText = videoApproval ? "Video disapproved" : "Video approved";
    Swal.fire({
      text: modalText,
      icon: "success",
      showConfirmButton: false,
      timer: 900,
    });
  };
  return (
    <>
      {data.map((value, index) => (
        <tr className="">
          <td className="w-50">
            <div className="card">
              <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <BigPlayButton position="center" />
              </Player>

              <div className="card-body pt-0 pb-1">
                <h5 className="card-title mb-0">{value.title}</h5>
                <p className="card-text fw-normal">{value.detail}</p>
              </div>
            </div>
          </td>
          <td className="">
            <div className="form-check form-check1 form-switch d-flex align-items-center">
              <input
                className={`form-check-input activ shadow-none ${
                  videoApproval ? "" : "focus-active-input"
                }`}
                type="checkbox"
                onClick={() => verifyVideo()}
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Videoapproval;
