import React from "react";
import Maps from "./Maps";
import Sidebar from "./Sidebar";
import Guide from "./Guide";

function Main() {
  return (
    <div>
      <Guide />
      <Maps />
      <Sidebar />
    </div>
  );
}

export default Main;
