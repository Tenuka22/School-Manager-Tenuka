import { fetchNotifications } from "@app/components/FilterAdminNotitfications";
import React, { Component } from "react";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      showMore: false,
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const data = await fetchNotifications();
    this.setState({ notifications: data });
  }

  toggleShowMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  NotificationRender = () => {
    const { notifications } = this.state;

    return (
      <div>
        <div className="min-h-screen flex items-center justify-center flex-col lg:flex-row flex-wrap gap-2">
          {notifications
            .slice()
            .reverse()
            .map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-center w-[70vw] sm:w-[80vw] lg:w-[44vw] flex-col bg-slate-50 px-14 py-8 relative"
              >
                <span className="self-start mb-0.5 font-semibold text-lg ml-8">
                  {notification.title}
                </span>
                <span className="sm:w-2/3 self-start">{notification.body}</span>
                <div className="h-[1rem]" />
                <span className="absolute  bottom-0 right-0 bg-rose-500 text-white px-8 py-2 rounded-l-xl">
                  {notification.creator}
                </span>
              </div>
            ))}
        </div>
      </div>
    );
  };
  render() {
    const { notifications, showMore } = this.state;
    const LastNotificationIndex = notifications.length - 1;
    const { Admin, LoadingAnimation } = this.props;
    return (
      <>
        {Admin ? (
          <div className="flex items-center justify-center flex-col mt-4">
            {showMore ? (
              <>{this.NotificationRender()}</>
            ) : (
              <>
                {notifications.length > 0 ? (
                  <div className="flex items-center justify-center flex-col w-[70vw] px-14 py-8 bg-slate-50 rounded-lg relative group">
                    <span className="self-start mb-2 text-base font-semibold ">
                      {notifications[LastNotificationIndex].title}
                    </span>
                    <span className="self-start">
                      {notifications[LastNotificationIndex].body}
                    </span>
                    <div className="h-[1rem]" />
                    <span className="self-end absolute bottom-0 left-0 mt-3 px-8 py-2 bg-rose-400 text-white rounded-l-md">
                      {notifications[LastNotificationIndex].creator}
                    </span>
                    <button
                      onClick={this.toggleShowMore}
                      className="px-9 py-3 bg-blue-500 absolute bottom-0 right-0 rounded-l-xl text-white group-hover:opacity-100 opacity-50 transition-all ease-out shadow-xl"
                    >
                      More
                    </button>
                  </div>
                ) : (
                  <span className="">No notifications available</span>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="h-screen highlited-text text-rose-500 flex items-center justify-center flex-col">
            There Might Be An Error
          </div>
        )}
      </>
    );
  }
}

export default AdminDashboard;
