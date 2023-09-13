"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WebsiteContent } from "../constants/constants";
import Image from "next/image";

const SideBar = (props) => {
  const { setSelectedItem } = props;
  const { setToggledSidebar } = props;

  const [Selected, setSelected] = useState(
    WebsiteContent.Content.SideBar.Items.Top02Sec[0].Item.Name
  );
  const [ToggleBtn, setToggleBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setToggleBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`max-sm:text-xs fixed top-0 left-0 h-screen z-40 overflow-hidden flex flex-col justify-center text-xs sidebar  ${
        ToggleBtn ? "items-start" : "items-center"
      } ${ToggleBtn ? "w-[242px]" : "w-[60px]"} ${
        ToggleBtn ? "sidebar-exit" : "sidebar-enter"
      }`}
    >
      {ToggleBtn === true ? (
        <div className="pl-1 max-sm:pl-0 flex items-start justify-center max-sm:gap-2 flex-col gap-[4vh] ">
          <button
            onClick={() => {
              setToggleBtn(false);
              setToggledSidebar(false);
            }}
            style={{ whiteSpace: "nowrap" }}
            id="top-01-sec"
            className="flex-col top-5 gap-4 flex items-start justify-center Sidebar-Logo-Sec mb-8 ml-8 "
          >
            <Image
              className="w-12 h-12 aspect-square object-cover object-center rounded-full shadow-md Sidebar-Logo"
              width={WebsiteContent.Content.SideBar.Items.Top01Sec.Item.Width}
              height={WebsiteContent.Content.SideBar.Items.Top01Sec.Item.Height}
              placeholder={
                WebsiteContent.Content.SideBar.Items.Top01Sec.Item.Placeholder
              }
              src={WebsiteContent.Content.SideBar.Items.Top01Sec.Item.Src}
              alt="logo"
              id={WebsiteContent.Content.SideBar.Items.Top01Sec.Item.Name}
            />
            <span className="normal-text">{WebsiteContent.SchoolName}</span>
          </button>

          <div
            id="top-02-sec"
            className={`flex items-start flex-col justify-center gap-1`}
          >
            {WebsiteContent.Content.SideBar.Items.Top02Sec.map((index) => {
              return (
                <button
                  onClick={() => {
                    setSelected(index.Item.Name);
                    props.setSelectedItem(index.Item.Name);
                    setToggleBtn(false);
                    props.setToggledSidebar(false);
                  }}
                  id={`${Selected === index.Item.Name ? "SelectedBtn" : ""}`}
                  style={{ whiteSpace: "nowrap" }}
                  className={`${
                    Selected === index.Item.Name
                      ? "text-rose-700 shadow-lg"
                      : ""
                  }flex  items-start z-10 justify-center flex-row gap-4  px-8 py-2 `}
                >
                  {index.Item.Name}
                </button>
              );
            })}
          </div>
          <div
            id="center-sec"
            className={`flex items-start flex-col justify-center gap-1`}
          >
            {WebsiteContent.Content.SideBar.Items.CenterSec.map((index) => {
              return (
                <button
                  onClick={() => {
                    setSelectedItem(index.Item.Name);
                    setSelected(index.Item.Name);
                    props.setSelectedItem(index.Item.Name);
                    setToggleBtn(false);
                    props.setToggledSidebar(false);
                  }}
                  id={`${Selected === index.Item.Name ? "SelectedBtn" : ""}`}
                  style={{ whiteSpace: "nowrap" }}
                  className={`${
                    Selected === index.Item.Name
                      ? "text-rose-700 shadow-lg"
                      : ""
                  }flex  items-start z-10 justify-center flex-row gap-4  px-8 py-2 `}
                >
                  {index.Item.Name}
                </button>
              );
            })}
          </div>
          <div
            id="bottom-sec"
            className={`flex items-start flex-col justify-center gap-1`}
          >
            {WebsiteContent.Content.SideBar.Items.BottomSec.map((index) => {
              return (
                <button
                  onClick={() => {
                    setSelectedItem(index.Item.Name);
                    setSelected(index.Item.Name);
                    props.setSelectedItem(index.Item.Name);
                    setToggleBtn(false);
                    props.setToggledSidebar(false);
                  }}
                  id={`${Selected === index.Item.Name ? "SelectedBtn" : ""}`}
                  style={{ whiteSpace: "nowrap" }}
                  className={`${
                    Selected === index.Item.Name
                      ? "text-rose-700 shadow-lg"
                      : ""
                  }flex  items-start z-10 justify-center flex-row gap-4  px-8 py-2 `}
                >
                  {index.Item.Name}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <button
            className="self-start absolute top-12 left-1/2 -translate-x-1/2 p-4"
            onClick={() => {
              setToggleBtn(true);
              setToggledSidebar(true);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
                fill="currentColor"
              />
              <path
                d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
                fill="currentColor"
              />
              <path
                d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default SideBar;
