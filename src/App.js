import Maps from "./components/Maps";
import Navi from "./components/Navi";
import Sidebar from "./components/Sidebar";
import "./scss/main.scss";

function App() {
  return (
    <>
      <div className='hamburgerMenu'></div>
      <div className='App'>
        <Navi />
        <Maps />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
