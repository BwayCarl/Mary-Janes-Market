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

// stripe testing

import Payment from "./components/Payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Hofl5LuJjLT1hU9eddiYJV7IDV6xKRCM1dWp1LgQALzX9Habzq26fjWx3gBS89qvMAvD7MVdiu3UD8rv2gURsJA00OIkacNMt"
);

function App() {
  return (
    <div className="App">
      <Router>
        <Elements stripe={stripePromise}>
          <UserProvider>
            <StoreProvider>
              <Header />
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/Payment" component={Payment} /> */}
                <Route exact path="/Payment" component={Payment} />
              </Switch>
              <Footer />
            </StoreProvider>
          </UserProvider>
        </Elements>
      </Router>
    </div>
  );
}

export default App;
