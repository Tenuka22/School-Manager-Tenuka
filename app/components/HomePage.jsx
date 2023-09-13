import React from "react";
import { WebsiteContent } from "../constants/constants";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex items-start justify-center flex-col drop-shadow-2xl p-7 ">
        <span className="title-text text-rose-600 ">
          {WebsiteContent.Content.Homepage.Title}
        </span>
        <span className="normal-text">
          {WebsiteContent.Content.Homepage.Description}
        </span>
      </div>
      <Link
        href={`${WebsiteContent.Content.Homepage.ExploreBtn.HREF}`}
        className="flex items-center justify-center flex-col absolute bottom-12 left-12 hover:animate-HomePageBtnAni opacity-80 "
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
            fill="currentColor"
          />
          <path
            d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
            fill="currentColor"
          />
        </svg>
        <span className="normal-text">
          {WebsiteContent.Content.Homepage.ExploreBtn.Description}
        </span>
      </Link>
    </div>
  );
};

export default HomePage;
