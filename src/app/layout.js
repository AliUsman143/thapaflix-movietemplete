"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Headerr from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react"; // React hooks like useState can now be used
import LoginForm from "./components/LoginForm"; // Import the LoginForm component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
       
        {isLoggedIn ? (
          <>
           <Headerr />
            {children} {/* Display the rest of the content after login */}
            <Footer />
          </>
        ) : (
          <LoginForm onLoginSuccess={handleLoginSuccess} /> // Display login form if not logged in
        )}
       
      </body>
    </html>
  );
}
