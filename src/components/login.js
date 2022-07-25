import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import Emailicon from '../images/email_icon.png';
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email is Invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [visibility, setvisibility] = useState(false);
  const [alertcolor, setalertcolor] = useState();
  const [loginspinner, setloginspinner] = useState();
  const [alertMessage, setalertMessage] = useState();
  const [alertDisplay, setalertDisplay] = useState(false);
  const pass_visibility = () => {
    setvisibility(!visibility);
  };
  return (
    <>
      <div className="login-parent d-flex justify-content-center align-items-center ">
        <div className="login-main  d-flex justify-content-center align-items-center flex-column px-4  ">
          <img className="login-img " src={Logo} alt="" />
          <h2 className="login-title temb-2">Login Acount</h2>
          <p className="login-label text-black-50 ">
            Enter your Email and Password
          </p>
          <div
            className={`${
              alertMessage ? "d-block" : "d-none"
            } alert alert-${alertcolor} alert-dismissible fade show w-100 p-4 mt-3" role="alert d-flex justify-content-between ${
              alertDisplay ? "d-block" : "d-none"
            }`}
          >
            <span>{alertMessage}</span>
            <div
              className={`alert-cancel `}
              onClick={() => setalertDisplay(false)}
            ></div>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              setloginspinner(true);

              console.log(values);
              if (
                values.email === "contact@lawondemand.com" &&
                values.password === "lawadmin"
              ) {
                setalertMessage("Login Successful");
                setalertcolor("success");
                // setloginspinner(false)
                window.location.href = "/users";
              } else {
                setalertMessage("Email or Password is invalid");
                setalertcolor("danger");
                setloginspinner(false);
                setalertDisplay(true);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className=" form-floating mb-3 row g-3 d-flex  justify-content-end">
                {/* <form > */}

                <div className="emailinpput-parent form-floating ">
                  <Field
                    type="email"
                    className={`email-input form-control  ${
                      errors.email && touched.email ? "border-danger" : ""
                    }`}
                    name="email"
                    id="floatingInput"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="floatingInput "
                    className="h-auto text-muted  "
                  >
                    &nbsp; Email address{" "}
                  </label>

                  {errors.email && touched.email ? (
                    <div className="error_msg text-danger">{errors.email}</div>
                  ) : null}
                </div>
                <label className="email_icon  w-auto h-auto">
                  <svg
                    className="w-6 h-6 text-gray-500 email-img position-absolute right-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </label>
                <div className="passinput form-floating  mt-0 ">
                  <Field
                    type={`${visibility ? "text" : "password"}`}
                    className={`password-input form-control  ${
                      errors.password && touched.password ? "border-danger" : ""
                    }`}
                    name="password"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="floatingPassword"
                    className="h-auto text-muted"
                  >
                    &nbsp;&nbsp;Password
                  </label>
                  {visibility ? (
                    <svg
                      className="w-6 h-6 password-img"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={pass_visibility}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-500 password-img"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={pass_visibility}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      ></path>
                    </svg>
                  )}

                  {errors.password && touched.password ? (
                    <div className="error_msg text-danger">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                {/* <NavLink exact  className="mt-0 text-decoration-none w-auto" > */}
                <button
                  type="submit"
                  className="d-flex  align-items-center justify-content-between submit-btn my-0  btn text-white w-auto fw-bold"
                >
                  <span>Login</span>{" "}
                  <div
                    className="login-spinner mx-2 spinner-border text-light"
                    role="status"
                  >
                    <span className="  visually-hidden"></span>
                  </div>
                </button>
                {/* </NavLink> */}

                {/* </form>
                 */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <style global jsx>
        {`
          .login-spinner {
            display: ${loginspinner ? "block !important" : "none !important"};
          }
        `}
      </style>
    </>
  );
};

export default Login;
