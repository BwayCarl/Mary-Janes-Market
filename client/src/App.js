import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";
import { UserProvider } from "./utils/contexts/userContext";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <StoreProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
          </StoreProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
