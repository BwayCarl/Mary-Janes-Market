import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";
import { UserProvider } from "./utils/contexts/userContext";

// stripe testing

import Payment from "./Payment";

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
              <Route exact path="/login" component={Login} />
              <Route exact path="Payment" component={Payment} />
            </Switch>
          </Router>
          <Footer />
        </StoreProvider>
      </UserProvider>
    </div>
  );
}

export default App;
