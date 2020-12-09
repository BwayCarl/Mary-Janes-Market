import React from "react";
import "../styles/Login.css";

export default (props) => {
  return (
    <div className="text-center my-3 mx-auto">
      <a
        href="http://localhost:4000/auth/facebook"
        className="loginBtn loginBtn--facebook"
      >
        Login with Facebook
      </a>
    </div>
  );
};
