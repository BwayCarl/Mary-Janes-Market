import React, { createContext, useReducer, useContext } from "react";
import { SET_CART_ID } from "./Actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CART_ID:
            return {
                ...state,
                customerId: action.id,
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        customerId: '',
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
