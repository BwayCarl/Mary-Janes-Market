import React from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../utils/contexts/userContext";

function Auth() {
    const history = useHistory();
    const [state] = useUser();
  return (
      <div  className="">
        {state.user.displayName ? (
          <p> {state.user.displayName} </p>
        ) : (
          <div className="mr-2" onClick={() => history.push("/login")}><span className="login-icon"><i class="fas fa-user-lock"></i></span>Login</div>
        )}
      </div>

  );
}

export default Auth;