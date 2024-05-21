import React, { FC } from "react";
import "./App.css";
import Dashboard from "./admin/pages/Dashboard";
import ManageQuestions from "./admin/pages/ManageQuestions";
import EditManageQuestions from "./admin/pages/EditManageQuestions";
import AdminProfile from "./admin/pages/AdminProfile";
import SFCharts from "./admin/pages/SFCharts";
import QMSCharts from "./admin/pages/QMSCharts";
import IACharts from "./admin/pages/IACharts";
import ManageUsers from "./admin/pages/ManageUsers";

import Home from "./user-side/pages/Home";
import LandingPage from "./user-side/pages/LandingPage";
import DataPrivacy from "./user-side/pages/DataPrivacy";
import UserProfile from "./user-side/pages/UserProfile";
import Login from "./admin/pages/Login";
import Register from "./admin/pages/Register";
import FormPage from "./user-side/pages/FormPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from "./admin/components/SideNavbar";
import SideNavbarUser from "./user-side/components/SideNavbarUser";

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin/*"
            element={
              <>
                <SideNavbar />
                <div className="p-4 sm:ml-64">
                  <div className="p-2 border-gray-200 border-dashed rounded-lg mt-14">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route
                        path="managequestions"
                        element={<ManageQuestions />}
                      />
                      <Route
                        path="editmanagequestions"
                        element={<EditManageQuestions />}
                      />
                      <Route path="adminprofile" element={<AdminProfile />} />
                      <Route path="sfcharts" element={<SFCharts />} />
                      <Route path="iacharts" element={<IACharts />} />
                      <Route path="qmscharts" element={<QMSCharts />} />
                      <Route path="manageusers" element={<ManageUsers />} />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/*"
            element={
              <>
                <SideNavbarUser />
                <div className="p-4 sm:ml-64">
                  <div className="p-2 border-gray-200 border-dashed rounded-lg mt-9">
                    <Routes>
                      <Route path="/landingpage" element={<LandingPage />} />
                      <Route path="/form/:formId" element={<FormPage />} />
                      <Route path="/dataprivacy" element={<DataPrivacy />}/>
                      <Route path="/userprofile" element={<UserProfile />} />
                      <Route path="/formpage" element={<FormPage />} />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
