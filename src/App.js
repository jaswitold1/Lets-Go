import Maps from "./components/Maps";
import Navi from "./components/Navi";
import Sidebar from "./components/Sidebar";
import "./scss/main.scss";

function App() {
  return (
    <div className='App'>
      <Navi />
      <Sidebar />
      <Maps />
    </div>
  );
}

export default App;
