import React from "react";
import "./LoginPage.css";
import { animationConfig } from "../../animations";
import { useSpring, animated } from "react-spring";
import Login from "../../components/Login";

const LoginPage = () => {
  const animationProps = useSpring(animationConfig);

  return (
    <animated.div
      className="login-page page small-vertical-padding "
      style={animationProps}
    >
      <div className="header-trigger">
        <Login />
      </div>
    </animated.div>
  );
};

export default LoginPage;
