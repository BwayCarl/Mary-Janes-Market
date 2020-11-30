import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <div className="App">
      <StoreProvider>
        
        <Router>
        <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
        </Router>
        <Footer />
        </StoreProvider>
    </div>
  );
}

export default App;



