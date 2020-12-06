import React from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../utils/contexts/userContext";

function Auth() {
    const history = useHistory();
    const [state] = useUser();
  return (
      <div  className="col text-right mr-3">
        {state.user.displayName ? (
          <p> {state.user.displayName} </p>
        ) : (
          <a onClick={() => history.push("/login")}><i class="fas fa-user-lock text-muted smaller"></i>Login</a>
        )}
      </div>

  );
}

export default Auth;