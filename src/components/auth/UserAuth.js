import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./UserAuth.css";

//assets
import Google from "../../assets/social/google.svg";
import Facebook from "../../assets/social/facebook.svg";

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isSignIn, setIsSignIn] = useState(true);
  const history = useNavigate();
  const location = useLocation();
  const [isButtonHide, setIsButtonHide] = useState(false);
  useEffect(() => {
    if (location.pathname == "/register") {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  }, [location.pathname]);
  console.log(location.pathname);
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();
    setIsButtonHide(true);
    const auth = getAuth();
    if((email && password) !== '' ){
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = auth.currentUser;
          toast.success(` you have successfully SignedUp with ${user.email}`);
          setTimeout(() => history("/"), 5000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error?.customData?._tokenResponse?.error?.message;
          toast.error(errorMessage);
          setIsButtonHide(false);
        });
    }else{ 
      toast.warning(`please enter email and password`);
    setIsButtonHide(false);}
  };

  const signIn = (e) => {
    e.preventDefault();
    setIsButtonHide(true);
    const auth = getAuth();
    if((email && password) !== '' ){
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = auth.currentUser;
        toast.success(` you have successfully LoggedIn with ${user.email}`);
        setTimeout(() => history("/"), 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsButtonHide(false);
      });
    }else{
    toast.warning(`please enter email and password`);
    setIsButtonHide(false);}
  };

  const loginWithFB = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("loginWithFB", result);
        toast.success(
          ` you have successfully LoggedIn with ${user.displayName}`
        );
        setTimeout(() => history("/"), 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("loginWithFBerror", error);
        toast.warning(error);
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success(
          ` you have successfully LoggedIn with ${user.displayName}`
        );
        setTimeout(() => history("/"), 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.warning(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  {isSignIn ? "Login" : "Sign Up"}
                </h5>
                <form onSubmit={signIn}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={changeHandler}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={changeHandler}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div className="d-grid">
                    {isSignIn ? (
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                        onClick={signIn}
                        disabled={isButtonHide}
                      >
                        Sign in
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger btn-login text-uppercase fw-bold"
                        type="submit"
                        onClick={signUp}
                        disabled={isButtonHide}
                      >
                        sign up
                      </button>
                    )}
                  </div>
                </form>
                <div className="d-flex justify-content-between">
                  {isSignIn ? (
                    <div className="mb-3">
                      click here to
                      <Link to="/register">
                        <label
                          className="form-check-label pointerText"
                          for="rememberPasswordCheck"
                        >
                          SignUp
                        </label>
                      </Link>
                    </div>
                  ) : (
                    <div className="mb-3 cursor-pointer">
                      click here to
                      <Link to="/login">
                        <label
                          className="form-check-label pointerText"
                          for="rememberPasswordCheck"
                        >
                          Login
                        </label>
                      </Link>
                    </div>
                  )}
                  {isSignIn && (
                    <div className="form-check mb-3 cursor-pointer">
                      <Link to="/passwordReset">
                        <label
                          className="form-check-label pointerText"
                          for="rememberPasswordCheck"
                        >
                          Forgot Password?
                        </label>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="borderLine" />
                <div className="iconContainer">
                  <img
                    src={Google}
                    onClick={loginWithGoogle}
                    alt="Login with Google"
                    className="socialIcon"
                  />
                  <img
                    src={Facebook}
                    onClick={loginWithFB}
                    alt="Login with Facebook"
                    className="socialIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserAuth;
