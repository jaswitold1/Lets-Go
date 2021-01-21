import React from "react";
import Maps from "./Maps";
import Sidebar from "./Sidebar";
import LowerMenu from "./LowerMenu";
function Main() {
  return (
    <div>
      <LowerMenu />
      <Maps />
      <Sidebar />
    </div>
  );
}

export default Main;
