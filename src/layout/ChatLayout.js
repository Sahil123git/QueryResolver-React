import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const ChatLayout = () => {
  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Outlet />
    </div>
  );
};
