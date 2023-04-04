import React, { createContext, useReducer, useContext } from "react";
import { SET_CART_ID, SET_QUANTITY } from "./Actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CART_ID:
            return {
                ...state,
                customerId: action.id,
            };
        case SET_QUANTITY:
            return {
                ...state,
                product: action.product,
            }
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        customerId: '',
        product: [],
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
