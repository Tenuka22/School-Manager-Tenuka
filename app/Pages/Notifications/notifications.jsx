"use client";
import React, { useEffect, useState } from "react";
import { fetchNotifications } from "@app/components/FilterNotifications";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        id="notificaton-sec"
        className="flex items-center justify-center flex-col gap-3"
      >
        {notifications
          .slice()
          .reverse()
          .map((Notification) => (
            <div
              key={Notification.id}
              className="w-[72vw] bg-slate-50 backdrop-filter backdrop-opacity-25 px-12 py-8 rounded-lg flex items-center justify-center flex-col gap-2 relative sm:w-[58vw] border-rose-300 group transition-all cursor-pointer"
            >
              <span className="self-start ">{Notification.title}</span>
              <span className="mt-5">{Notification.body}</span>
              <div className="h-[1rem]" />
              <span className="absolute bottom-0 left-0 bg-rose-500 px-8 py-2 rounded-r-xl text-white group-hover:opacity-100 -translate-x-5 group-hover:translate-x-0 opacity-0 transition-all duration-100000">
                {Notification.creator}
              </span>
              <span className="absolute bottom-0 right-0 px-8 py-2 bg-violet-400 rounded-l-sm text-white">
                {Notification.whom}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
