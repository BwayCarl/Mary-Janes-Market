import React, {useEffect} from "react";
import Jumbotron from "./Jumbotron";
import ProductSection from "./ProductSection";
import AgeModal from "./AgeModal";
import "../styles/Main.css";
import ProductIntro from "./ProductIntro";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CART_ID } from '../utils/Actions.js'


function Main() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        createCart();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const createCart = () =>{
  const cartID = Math.floor(Math.random() * 100000000000) + 1
    
  if (!localStorage.getItem("cartID")){
    //if cartID is not set in localstorage, then set it
    dispatch({
          id: cartID ,
          type: SET_CART_ID
        })
    localStorage.setItem("cartID", cartID)
    console.log("create cart in localstorage, " ,cartID);
  } else {
    //otherwise set global state with the existing cartID
    dispatch({
          id: localStorage.getItem("cartID"),
          type: SET_CART_ID
        })
  }
}

  return (
    <main className="main">

      <AgeModal />
      <Jumbotron />
      <ProductIntro />
    </main>
  );
}

export default Main;
