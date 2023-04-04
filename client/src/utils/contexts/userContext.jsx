import React from "react";

const UserContext = React.createContext();

export const useUser = () => React.useContext(UserContext);

const initialState = {
  user: {
    id: "",
    displayName: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // React.useEffect(() => {
  //   fetch("/auth")
  //     .then((res) => (res.status === 200 ? res.json() : res.text()))
  //     .then((res) => dispatch({ type: "LOGIN", payload: res }))
  //     .catch((err) => console.warn(err.message));
  // }, []);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
