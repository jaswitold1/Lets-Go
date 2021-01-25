import Navi from "./components/Navi";
import Main from "./components/Main";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Logout from "./components/Logout";
import HamburgerMenu from "./components/HamburgerMenu";

//scss
import "./scss/main.scss";

//router
import { BrowserRouter, Route } from "react-router-dom";

// div100vh iOS Safari toolbars overlapping fix
import Div100vh from "react-div-100vh";
function App() {
  return (
    <>
      <BrowserRouter>
        <Div100vh className='App'>
          <Navi />
          <HamburgerMenu />

          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/logout' component={Logout} />
        </Div100vh>
      </BrowserRouter>
    </>
  );
}

export default App;
