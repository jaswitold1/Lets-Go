import Maps from "./components/Maps";
import Navi from "./components/Navi";
import Sidebar from "./components/Sidebar";
import "./scss/main.scss";
//redux
import { useSelector } from "react-redux";

function App() {
  const hamburgerWidth = useSelector((state) => state.hamburgerWidth);

  return (
    <>
      <div style={{ width: hamburgerWidth }} className='hamburgerMenu'></div>
      <div className='App'>
        <Navi />
        <Maps />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
