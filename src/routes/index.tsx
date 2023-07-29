import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
