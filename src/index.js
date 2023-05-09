import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User.js";
import Score from "./Score.js";
import AdminLogin from "./Admin/AdminLogin.js";
import AdminRegister from "./Admin/AdminRegister.js";
import StudentLogin from "./Student/StudentLogin.js";
import StudentResgiter from "./Student/StudentResgiter.js";
import Admin from "./Admin.js";
import UserScore from "./Admin/UserScore.js";
import AdminHome from "./Admin/AdminHome.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/studentRegister" element={<StudentResgiter />} />
          <Route path="/userScore" element={<UserScore />} />
          <Route path="/studentRegister" element={<StudentResgiter />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </RecoilRoot>
  </React.StrictMode>
);
