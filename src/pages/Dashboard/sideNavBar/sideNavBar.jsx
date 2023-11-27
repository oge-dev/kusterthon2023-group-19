import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./sideNavBar.css";

const SideNavBar = () => {
  return (
    <div className="sideNavBar-wrapper">
      <div className="links">
        <NavLink to="/dashboard/admin">Admin</NavLink>
        <NavLink to="/dashboard/clientProfile">Client Profile</NavLink>
        <NavLink to="/dashboard/invoice">Invoice</NavLink>
        <NavLink to="/dashboard/paymentTransaction">Payment Transaction</NavLink>
        <NavLink to="/dashboard/paymentReceived">Payment Received</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
        <NavLink to="/dashboard/signOut">sign Out</NavLink>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavBar;
