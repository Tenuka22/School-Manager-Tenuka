import "./globals.css";

export const metadata = {
  title: "School Manager",
  description: "Created By Tenuka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <link href="https://css.gg/css" rel="stylesheet" />
      </body>
    </html>
  );
}
