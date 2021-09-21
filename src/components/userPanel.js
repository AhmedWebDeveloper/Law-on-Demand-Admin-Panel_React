import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Data from "./userData";
const UserPanel = () => {
  const [UserActivationText, setUserActivationText] = useState(true);
  const [userslistnumbers, setuserslistnumbers] = useState("100");

  const [data, setData] = useState(Data);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(100);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    // console.log(Number(event.target.id))
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "page-item page-link  active-pagi-number"
              : " pagi-number page-item page-link"
          }
          // className="active"
        >
          {/* <a className="page-link " href="#"> */}
          {number}
          {/* </a> */}
        </li>
      );
    } else {
      return null;
    }
  });

  const userslistnumbersfun = (e) => {
    var Total_Pages = [];
    for (
      let i = 1;
      i <= Math.ceil(data.length / Number(e.target.innerText));
      i++
    ) {
      Total_Pages.push(i);
    }

    if (currentPage > Total_Pages.length) {
      setcurrentPage(Total_Pages.length);
      setuserslistnumbers(e.target.innerText);
      setitemsPerPage(Number(e.target.innerText));
      if (Total_Pages.length > 5) {
        setminPageNumberLimit(Total_Pages.length - 5);
        setmaxPageNumberLimit(Total_Pages.length);
      } else {
        setminPageNumberLimit(0);
        setmaxPageNumberLimit(5);
      }
    }

    setuserslistnumbers(e.target.innerText);
    setitemsPerPage(Number(e.target.innerText));
  };

  const lastpagefun = () => {
    setcurrentPage(pages.length);
    setmaxPageNumberLimit(pages.length);

    setminPageNumberLimit(pages.length - 5);
  };
  const firstpagefun = () => {
    setcurrentPage(1);
    setminPageNumberLimit(0);
    setmaxPageNumberLimit(5);
  };

  const handleNextbtn = () => {
    setcurrentPage(1);

    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="page-item" onClick={handleNextbtn}>
        <a className="page-link shadow-none text-dark" href="#">
          &hellip;
        </a>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="page-item " onClick={handlePrevbtn}>
        <a className="page-link shadow-none text-dark" href="#">
          &hellip;
        </a>
      </li>
    );
  }

  const useravailabilityFun = (useravailability) => {
    setUserActivationText(!UserActivationText);
    const modalText = UserActivationText
      ? "User deactivated"
      : "User activated";
    Swal.fire({
      text: modalText,
      icon: "success",
      showConfirmButton: false,
      timer: 900,
    });
  };
  return (
    <>
      <div className="table-container-parent rounded h-100">
        <div className="table-container rounded">
          <table className="table mb-0">
            <thead className="table-head position-sticky top-0">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Activate/Deactivate</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((value, index) => (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.country}</td>
                  <td>
                    <div className="form-check form-switch">
                      {/* <input 
                               className={`form-check-input shadow-none ${
                                UserActivationText ? "" : "focus-active-input"
                              }`}
                                type="checkbox"
                                onClick={() =>
                                  useravailabilityFun(value.activate)
                                }
                                
                              /> */}
                      <input
                        className={`form-check-input shadow-none ${
                          UserActivationText ? "" : "focus-active-input"
                        }`}
                        type="checkbox"
                        onClick={() => useravailabilityFun(value.activate)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-flex justify-content-end table-bottom-pagi-parent bg-white">
        <nav aria-label="Page navigation example " className="mx-3">
          <ul className="pagination mb-0">
            <button
              className="border-0 page-item"
              disabled={currentPage === pages[0] ? true : false}
              onClick={() => firstpagefun()}
            >
              <a
                className="back-pagi-link page-link shadow-none "
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true" className="fw-bold">{`<<`}</span>
              </a>
            </button>
            <button
              className="border-0 page-item"
              disabled={currentPage === pages[0] ? true : false}
              onClick={handlePrevbtn}
            >
              <a
                className="back-pagi-link page-link shadow-none text-muted"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true" className="fw-bold">{`<`}</span>
              </a>
            </button>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <button
              className="border-0 page-item"
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              <a
                className="next-pagi-link page-link shadow-none"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true" className="fw-bold">
                  {`>`}{" "}
                </span>
              </a>
            </button>
            <button
              className="border-0 page-item"
              disabled={currentPage === pages[pages.length - 1] ? true : false}
              onClick={lastpagefun}
            >
              <a
                className="next-pagi-link page-link shadow-none"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true" className="fw-bold">
                  {`>>`}{" "}
                </span>
              </a>
            </button>
          </ul>
        </nav>
        <div className="btn-group dropup bg-transparent pagi-user-list-numbers">
          <button
            type="button"
            className="n-of-users-list-dropdown dropdown btn btn-secondary dropdown-toggle bg-white border shadow-none text-dark py-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userslistnumbers}
          </button>
          <ul className="dropdown-menu ">
            <a
              href="#"
              className="list-number-link-10 dropdown-item "
              onClick={userslistnumbersfun}
            >
              <li className="list-number-li ">10</li>
            </a>
            <a
              href="#"
              className="list-number-link-25 dropdown-item "
              onClick={userslistnumbersfun}
            >
              <li className="list-number-li ">25</li>
            </a>
            <a
              href="#"
              className="list-number-link-50 dropdown-item "
              onClick={userslistnumbersfun}
            >
              <li className="list-number-li ">50</li>
            </a>
            <a
              href="#"
              className="list-number-link-100 dropdown-item "
              onClick={userslistnumbersfun}
            >
              <li className="list-number-li">100</li>
            </a>
          </ul>
        </div>
      </div>
      <style global jsx>
        {`
          .back-pagi-link {
            background-color: ${currentPage === pages[0]
              ? "rgb(221, 219, 219)"
              : "white "};
            cursor: ${currentPage === pages[0] ? "default" : "pointer "};
            color: ${currentPage === pages[0]
              ? "gray !important"
              : "black !important "};
          }
          .next-pagi-link {
            background-color: ${currentPage === pages[pages.length - 1]
              ? "rgb(221, 219, 219)"
              : "white "};
            color: ${currentPage === pages[pages.length - 1]
              ? "gray !important"
              : "black!important "};
            cursor: ${currentPage === pages[pages.length - 1]
              ? "default"
              : "pointer "};
          }

          .list-number-link-${userslistnumbers} {
            background-color: #233b5e !important;
            color: #fff !important;
          }
        `}
      </style>
    </>
  );
};

export default UserPanel;
