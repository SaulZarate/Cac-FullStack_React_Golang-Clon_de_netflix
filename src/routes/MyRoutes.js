import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";

const MyRoutes = () => {
  return (
    <Routes>
      {/* 
        Routes Protected
      */}
      <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
      }/>


      {/* 
        Routes public 
      */}
      <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
      }/>

      <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
      }/>

      <Route path="/resetPassword" element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
      }/>

    </Routes>
  );
};

export default MyRoutes;
