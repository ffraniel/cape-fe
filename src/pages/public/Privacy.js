import React from "react";
import "./Privacy.css";
import { useSpring, animated } from "react-spring";
import { animationConfig } from "../../animations";

const Privacy = () => {
  const animationProps = useSpring(animationConfig);

  return (
    <div className="privacy-page page medium-vertical-padding container">
      <animated.div style={animationProps}>
        <h1>Privacy</h1>
        <p>
          Privacy is important and it is only fair you know how your data is
          used by this website. This information pertains to the website only.
          For information about the CAPE organisation please contact the current
          chair.
        </p>
        <h3>What data is stored?</h3>
        <p>
          We keep a record of whether you allow us to store your privacy
          preferences in{" "}
          <a href="https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage">
            local storage
          </a>
          . With this information we can save your email on your local computer
          so you do not need to type in your full email address everytime you
          come to log in.
        </p>
        <h3>Third Party Providers</h3>
        <p>
          We use Google Firebase Auth to manage the user login area. To do so we
          use the service as a database of accounts. The only information that
          is stored is the email address - there is no other data attached that
          could be compromised.
        </p>
      </animated.div>
    </div>
  );
};

export default Privacy;
