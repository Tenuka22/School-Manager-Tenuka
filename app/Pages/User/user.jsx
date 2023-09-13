"use client";

import React, { useState, useRef, useEffect } from "react";
import { getUsers, getAdmins } from "@app/components/Fetch/Fetch";
import { WebsiteContent } from "@app/constants/constants";
import Loading from "@app/loading";

const UserMenu = ({
  signedIn,
  setSignedIn,
  LoadingAnimation,
  setLoadingAnimation,
  Admin,
  setAdmin,
}) => {
  /*  */
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [Error, setError] = useState(false);
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Designation: "",
  });
  const [selectedGrade, setSelectedGrade] = useState("");
  const gradeRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const designationRef = useRef();

  /* UseEffects */
  useEffect(() => {
    if (Error == true) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [Error]);

  useEffect(() => {
    const isUserSignedIn = localStorage.getItem("isUserSignedIn");

    if (isUserSignedIn === "true") {
      setSignedIn(true);

      const userData = {
        Name: localStorage.getItem("UserName") || "",
        Email: localStorage.getItem("UserEmail") || "",
        Designation: localStorage.getItem("UserDesignation") || "",
      };
      setUserData(userData);

      const isAdmin = localStorage.getItem("isAdmin") === "true";
      setAdmin(isAdmin);
    }
  }, [setSignedIn, setAdmin]);

  useEffect(() => {
    if (selectedGrade === "select") {
      setSelectedGrade("");
    }
  }, [gradeRef]);
  useEffect(() => {
    const form = document.querySelector("form");

    if (form) {
      const handleSubmit = (event) => {
        event.preventDefault();
      };

      form.addEventListener("submit", handleSubmit);

      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);
  /* UseEffects */
  /* Functions */
  const UserControl = () => {
    const handleSignOut = () => {
      localStorage.removeItem("isUserSignedIn");
      localStorage.removeItem("signInTime");
      localStorage.removeItem("UserName");
      localStorage.removeItem("UserEmail");
      localStorage.removeItem("UserDesignation");
      localStorage.removeItem("isAdmin");
      setSignedIn(false);
      setUserData({
        Name: "",
        Email: "",
        Designation: "",
      });
    };

    return (
      <>
        {LoadingAnimation === true ? (
          <Loading />
        ) : (
          <div className="min-h-screen flex items-center justify-center flex-col">
            {Error && (
              <div className="drop-shadow-lg absolute bottom-4 normal-text text-red-400 border-red-500 border-2 px-4 py-2 shadow-sm rounded-md">
                Something Is Off
              </div>
            )}

            {() => {
              LoadingAnimation(true);
              setTimeout(() => {
                setLoadingAnimation(false);
              }, 5000);
            }}

            <div className="flex items-center justify-center flex-col">
              <button
                className="mt-4 absolute top-6 right-4 bg-red-500  text-white normal-text w-12 h-12 rounded-full flex items-center justify-center "
                onClick={handleSignOut}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <div className="flex items-center relative justify-center flex-col gap-3 md:flex-row md:gap-7">
                <div
                  id="my-space"
                  className="max-md:w-[60vw] self-start max-md:h-[27vh] md:w-[400px] md:h-[170px] rounded-xl shadow-xl bg-rose-400 text-white normal-text flex items-center justify-center relative"
                >
                  <button className="absolute right-4 bottom-4 shadow-2xl rounded-full w-[35px] h-[35px] ">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div
                    id="about"
                    className="flex items-center justify-center relative flex-col"
                  >
                    <span className="highlited-text mb-04">
                      {WebsiteContent.Content.User.UserControl.AboutTitle01}
                    </span>
                    <span className="normal-text self-start">{`Name : ${userData.Name}`}</span>
                    <span className="normal-text self-start">{`Email : ${userData.Email.substring(
                      0,
                      15
                    )}...`}</span>
                    <span className="normal-text self-start">{`Designation : ${userData.Designation}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
    /*  */
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoadingAnimation(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const admins = await getAdmins();
      const users = await getUsers();

      const admin = admins.find(
        (admin) => admin.email === email && admin.password === password
      );

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.removeItem("isAdmin");
        localStorage.setItem("isAdmin", "false");
        setAdmin(false);
      } else if (admin) {
        localStorage.removeItem("isAdmin");
        localStorage.setItem("isAdmin", "true");
        setAdmin(true);
      }

      if (admin || user) {
        localStorage.setItem("isUserSignedIn", "true");
        localStorage.setItem("UserName", admin?.name || user.name);
        localStorage.setItem("UserEmail", admin?.email || user.email);
        localStorage.setItem(
          "UserDesignation",
          admin?.designation || user.designation
        );
        localStorage.setItem("userId", admin?.id || user?.id);
        localStorage.setItem("signInTime", new Date().toISOString());

        setSignedIn(true);
        setShowSignIn(false);
        setShowSignUp(false);
        setError(false);
      } else {
        setError(true);
      }

      setLoadingAnimation(false);
    } catch (error) {
      console.error("Error:", error);
      setError(true);
      setLoadingAnimation(false);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoadingAnimation(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const designation = designationRef.current.value;

    if (!email || !password || !name || !designation) {
      setError(true);
      setLoadingAnimation(false);
      return;
    }

    const newUser = {
      email,
      password,
      name,
      designation,
    };

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setShowSignIn(true);
        setShowSignUp(false);
        setError(false);
      } else {
        if (response.status === 409) {
          setError("Account already exists");
        } else {
          setError("Sign up failed");
        }
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    }

    setLoadingAnimation(false);
  };
  /* Functions */
  return (
    <div>
      {signedIn ? (
        <>
          <UserControl />
        </>
      ) : (
        <>
          <>
            {LoadingAnimation === true ? (
              <>
                <Loading />
              </>
            ) : (
              <>
                {showSignIn === false && showSignUp === false ? (
                  <div className="h-screen flex items-center justify-center flex-col">
                    <span className="highlighted-text text-rose-800">
                      You Are Not Signed In
                    </span>
                    <button
                      className="w-52 h-10 mt-8 bg-rose-500 rounded-md text-white normal-text"
                      onClick={() => {
                        setShowSignIn(true);
                      }}
                    >
                      Sign In
                    </button>
                    <button
                      className="w-52 h-10 mt-2 bg-rose-500 rounded-md text-white normal-text"
                      onClick={() => {
                        setShowSignUp(true);
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                ) : (
                  <>
                    {showSignIn && (
                      <div className="flex items-center justify-center pt-20 h-screen flex-col">
                        <div className="flex items-center justify-center flex-col">
                          <span className="highlited-text ">Sign In</span>
                          <form
                            onSubmit={(e) => handleSignIn(e)}
                            id="sign-in-form"
                            className="mt-8 flex items-center justify-center flex-col gap-2"
                          >
                            <input
                              ref={emailRef}
                              placeholder="Email ..."
                              type="email"
                              className="md:w-[400px] w-[50vw] md:h-12 h-10 rounded bg-rose-200 text-black outline-red-900 shadow-md text-center"
                            />
                            <input
                              ref={passwordRef}
                              placeholder="Password ..."
                              type="password"
                              className="md:w-[400px] w-[50vw] md:h-12 h-10 rounded bg-rose-200 text-black outline-red-900 shadow-md text-center self-"
                            />
                            <button
                              className="bg-red-300 w-32 rounded-xl text-white h-9"
                              onClick={(e) => {
                                handleSignIn(e);
                                setLoadingAnimation(true);
                                setTimeout(() => {
                                  setLoadingAnimation(false);
                                }, 5000);
                              }}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                    {showSignUp && (
                      <div className="flex items-center justify-center pt-20 h-screen flex-col">
                        <div className="flex items-center justify-center flex-col">
                          <span className="highlited-text">Sign Up</span>
                          <form
                            id="signup-form"
                            className="mt-8 flex items-center justify-center flex-col gap-2"
                          >
                            <select
                              ref={designationRef}
                              placeholder="Designation ..."
                              type="text"
                              className="md:w-[400px] w-[50vw] md:h-12 h-10 rounded bg-rose-200 text-black outline-red-900 shadow-md text-center"
                            >
                              <option>Student</option>
                              <option>Teacher</option>
                            </select>
                            <input
                              ref={nameRef}
                              placeholder="Name ..."
                              type="text"
                              className="md:w-[400px] w-[50vw] md:h-12 h-10 rounded bg-rose-200 text-black outline-red-900 shadow-md text-center self-"
                            />
                            <input
                              ref={emailRef}
                              placeholder="Email ..."
                              type="email"
                              className="md:w-[400px] w-[50vw] md:h-12 h-10 rounded bg-rose-200 text-black outline-red-900 shadow-md text-center"
                            />
                            <input
                              ref={passwordRef}
                              placeholder="Password ..."
                              type="password"
                              className="md:w-[400px] w-[50vw] md:h-12 h-10 rounded bg-rose-200 text-black outline-red-900 shadow-md text-center self-"
                            />
                            <button
                              className="bg-red-300 w-32 rounded-xl text-white h-9"
                              onClick={(e) => {
                                handleSignUp(e);
                                setLoadingAnimation(true);
                                setTimeout(() => {
                                  setLoadingAnimation(false);
                                }, 5000);
                              }}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};
export default UserMenu;
