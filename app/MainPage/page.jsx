"use client";
import React, { Suspense, useEffect, useState } from "react";
import SideBar from "@app/components/SideBar";
import { WebsiteContent } from "@app/constants/constants";
import AdminDashboard from "../Pages/AdminDashboard/admin-dash";
import Recent from "../Pages/Recent/recent";
import Notifications from "../Pages/Notifications/notifications";
import About from "../Pages/About/about";
import Contact from "../Pages/Contact/contact";
import Credits from "../Pages/Credits/credits";
import UserMenu from "../Pages/User/user";
import Loading from "@app/loading";

const MainPage = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [User, setUser] = useState();
  const [LoadingAnimation, setLoadingAnimation] = useState(true);
  const [selectedItem, setSelectedItem] = useState(
    WebsiteContent.Content.SideBar.Items.Top02Sec[0].Item.Name
  );
  const [ToggledSidebar, setToggledSidebar] = useState(false);
  const [Admin, setAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true" && signedIn === true) {
      setAdmin(true);
    }
    if (localStorage.getItem("isAdmin") === "false") {
      setAdmin(false);
    }
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoadingAnimation(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const renderContent = () => {
    if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.Top02Sec[0].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <div className="min-h-screen flex items-center justify-center flex-col">
              Home
            </div>
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.Top02Sec[1].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <AdminDashboard
              Admin={Admin}
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.CenterSec[0].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <Recent
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.CenterSec[1].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <UserMenu
              setAdmin={setAdmin}
              Admin={Admin}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.CenterSec[2].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <Notifications
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.BottomSec[0].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <About
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.BottomSec[1].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <Contact
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else if (
      selectedItem ===
      WebsiteContent.Content.SideBar.Items.BottomSec[2].Item.Name
    ) {
      return (
        <>
          <Suspense fallback={<Loading />}>
            <Credits
              LoadingAnimation={LoadingAnimation}
              setLoadingAnimation={setLoadingAnimation}
            />
          </Suspense>
        </>
      );
    } else {
      return (
        <>
          <span className="text-xl font-poppins">
            I Think There is an Problem
          </span>
        </>
      );
    }
  };

  return (
    <>
      {LoadingAnimation === true ? (
        <Loading />
      ) : (
        <>
          <div className="absolute w-full h-7  bg-rose-600 backdrop-brightness-75 opacity-80 top-0 left-0 z-20">
            <span className="absolute max-sm:ml-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              {selectedItem}
            </span>
          </div>
          <div className="min-h-screen fixed z-50 top-0 left-0">
            <SideBar
              setSelectedItem={setSelectedItem}
              setToggledSidebar={setToggledSidebar}
            />
          </div>
          <div
            className={`pl-[60px] justify-center items-center flex flex-col mt-7`}
          >
            {renderContent()}
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
