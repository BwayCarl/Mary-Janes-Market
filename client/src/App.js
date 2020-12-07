import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Education from "./pages/Education"
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";
import { UserProvider } from "./utils/contexts/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <StoreProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
          <Footer />
        </StoreProvider>
      </UserProvider>
    </div>
  );
}

export default App;
