import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../styles/Dashboard.css";
import Home from "./Home";

const Dashboard = (content) => {
  return (
    
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">

          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            Dashboard
          </main>
        
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;
