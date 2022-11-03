import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success(` you have successfully Sent an email`);
          setTimeout(() => history("/login"), 5000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    } else {
      toast.warning(` Please enter a valid email`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Reset password
                </h5>
                <form onSubmit={submitHandler}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    password Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Forgotpassword;
