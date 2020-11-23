import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import Cart from "./pages/cart"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
        <Header />
        <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
        </Router>
        <Footer />
    </div>
  );
}

export default App;



