import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      <main className="flex-grow flex-shrink-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;