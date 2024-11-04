import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Navbar */}

      <div className="h-16">
        {/* div class for fixing sticky issue */}
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-232px)] p-12 container mx-auto">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
