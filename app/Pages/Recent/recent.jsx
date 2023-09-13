"use client";
import { getRecent } from "@app/components/Fetch/Fetch";
import React, { useEffect, useState } from "react";

const Recent = () => {
  const [recentData, setRecentData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRecent();
        setRecentData(data);
      } catch (error) {
        console.error("Error fetching recent data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="flex mt-2 justify-center items-center flex-col min-h-screen gap-4">
      {recentData
        .slice()
        .reverse()
        .map((Activity) => (
          <div
            id={Activity.id}
            className="flex items-center justify-center flex-col w-3/4 rounded-xl shadow-lg bg-slate-50 px-8 py-6"
          >
            <span className="highlited-text self-start m-3">
              {Activity.title}
            </span>
            <span className="">{Activity.body}</span>
            {Activity.images && (
              <div className="flex items-center justify-center flex-col mt-8 max-sm:flex-col sm:flex-row flex-wrap gap-4">
                {Activity.images.map((image) => (
                  <img
                    className="w-[100px] sm:w-[320px] object-cover object-center aspect-video"
                    src={image.url}
                    alt={image.url}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Recent;
