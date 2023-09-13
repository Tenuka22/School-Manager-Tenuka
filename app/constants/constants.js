export const WebsiteContent = {
  SchoolName: "St.Aloysius College",
  Grades: [
    { Id: "G001", Name: "Grade 01" },
    { Id: "G002", Name: "Grade 02" },
    { Id: "G003", Name: "Grade 03" },
    { Id: "G004", Name: "Grade 04" },
  ],
  Classes: {
    G001: [
      { Id: "G001A", Name: "Grade 01 A" },
      { Id: "G001B", Name: "Grade 01 B" },
    ],

    G002: [
      { Id: "G002A", Name: "Grade 02 A" },
      { Id: "G002B", Name: "Grade 02 B" },
    ],

    G003: [
      { Id: "G003A", Name: "Grade 03 A" },
      { Id: "G003B", Name: "Grade 03 B" },
      { Id: "G003C", Name: "Grade 03 C" },
    ],
  },

  Content: {
    Homepage: {
      Title: "School Manager",
      Description: "Trying to create Someones Live Better ",

      ExploreBtn: {
        Description: "Explore The School & ...",
        HREF: "/MainPage",
      },
    },
    User: {
      UserControl: {
        AboutTitle01: "My Space",
      },
    },
    SideBar: {
      Items: {
        Top01Sec: {
          Item: {
            Name: "Sidebr-Logo",
            Src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60",
            Width: "400",
            Height: "400",
            Placeholder: "empty",
          },
        },
        Top02Sec: [
          {
            Item: {
              Name: "Home",
            },
          },
          {
            Item: {
              Name: "Admin Dashboard",
            },
          },
        ],
        CenterSec: [
          {
            Item: {
              Name: "Recent Activities",
            },
          },
          {
            Item: {
              Name: "User",
            },
          },
          {
            Item: {
              Name: "Notificaions",
            },
          },
        ],
        BottomSec: [
          {
            Item: {
              Name: "About School",
            },
          },
          {
            Item: {
              Name: "Contact-Us",
            },
          },
          {
            Item: {
              Name: "Credits",
            },
          },
        ],
      },
    },
  },
};
