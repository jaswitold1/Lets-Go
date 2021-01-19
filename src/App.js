import Maps from "./components/Maps";
import Navi from "./components/Navi";
import Sidebar from "./components/Sidebar";
import "./scss/main.scss";

function App() {
  return (
    <div className='App'>
      <div className='hamburgerMenu'>klklk</div>
      <div className='main'>
        <Navi />
        <Maps />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
