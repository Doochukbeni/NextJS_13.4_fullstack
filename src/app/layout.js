import AuthProvider from "./components/AuthProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fullstack home page ",
  description: "this is a project sample",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="container pb-10 mt-11">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
