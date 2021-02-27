import Navi from "./components/Navi";
import Main from "./components/Main";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Logout from "./components/Logout";
import HamburgerMenu from "./components/HamburgerMenu";
import AddLocation from "./components/AddLocation";

//scss
import "./scss/main.scss";
//css
import "./components/src/L.Control.MapCenterCoord.css";

//router
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Navi />
          <HamburgerMenu />

          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/add-place' component={AddLocation} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
