"use client";
import { AuthProvider } from "@/context/AuthContext"; 
import Navbar from "@/components/Navbar"; 
import "@/styles/globals.css"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TechABLE - Job Portal</title>
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
