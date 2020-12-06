import React from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../utils/contexts/userContext";

function Auth() {
    const history = useHistory();
    const [state] = useUser();
  return (
      <div>
        {state.user.displayName ? (
          <p> {state.user.displayName} </p>
        ) : (
          <div onClick={() => history.push("/login")}>Login</div>
        )}
      </div>

  );
}

export default Auth;