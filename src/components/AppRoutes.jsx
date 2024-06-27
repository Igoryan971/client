import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import Chat from "./Chat";
import AdminPage from "./AdminPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
);

export default AppRoutes;
