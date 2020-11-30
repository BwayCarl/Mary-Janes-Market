import React from "react";
import Jumbotron from "./Jumbotron";
import ProductSection from "./ProductSection";
import AgeModal from "./AgeModal";
import "../styles/Main.css";
import { useHistory } from "react-router-dom";
import { useUser } from "../utils/contexts/userContext";

function Main() {
  const history = useHistory();
  const [state] = useUser();
  return (
    <main className="main">
      {state.user.displayName ? (
        <p> {state.user.displayName} </p>
      ) : (
        <div onClick={() => history.push("/login")}>Login</div>
      )}
      <AgeModal />
      <Jumbotron />
      <ProductSection />
    </main>
  );
}

export default Main;
