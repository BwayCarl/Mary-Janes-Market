import React from "react";

const UserContext = React.createContext();

export const useUser = () => React.useContext(UserContext);

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
