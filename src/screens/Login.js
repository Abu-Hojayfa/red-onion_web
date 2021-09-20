import React from "react";
import AuthentiCation from "../components/LogInNdSignin/AuthentiCation";
import NavBar from "../components/NavBar/NavBar";

const Login = ({CountCart}) => {
  return (
    <div>
      <NavBar CountCart={CountCart} />
      <AuthentiCation />
    </div>
  );
};

export default Login;
