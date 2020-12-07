import React from "react";
import CartTable from "../components/CartTable"
import { useStoreContext } from "../utils/GlobalState";

function Cart() {
    const [state] = useStoreContext();
    console.log(state)
    return (
        <div className="cart">
            <CartTable />
        </div>
    );
};

export default Cart;