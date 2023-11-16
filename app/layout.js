import "./globals.css";

export const metadata = {
  title: "Tic Tac Toe",
  description: "Basic Tic Tac Toe Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-sky-500 to-indigo-500">
        {children}
      </body>
    </html>
  );
}
