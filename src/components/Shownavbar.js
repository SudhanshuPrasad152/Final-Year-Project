import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Shownavbar = ({ children }) => {
  const location = useLocation();
  const [shownavbar, setshownavbar] = useState(false);
  useEffect(() => {
    console.log()
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/rent-item" ||
      location.pathname === "/forgot-password" ||
      location.pathname.substring(0,15) === "/reset-password"
    ) {
      setshownavbar(false);
    } else {
      setshownavbar(true);
    }
  }, [location]);
  return <div>{shownavbar && children}</div>;
};

export default Shownavbar;
