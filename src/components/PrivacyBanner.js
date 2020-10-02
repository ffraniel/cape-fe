import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyBanner.css";

const PrivacyBanner = () => {
  //check localsto for permission - if non found show banner
  const [settingSaved, setIsSettingSaved] = useState(false);

  const agreePrivacy = (e) => {
    e.preventDefault();
    window.localStorage.setItem("allow-storage", "true");
    setTimeout(() => {
      setIsSettingSaved(true);
    }, 200);
  };

  return (
    <div className={settingSaved ? "privacy-banner hidden" : "privacy-banner"}>
      <div className="banner-container">
        <p>
          Lots of text with a link to the
          <Link to="/privacy">Privacy page</Link>.
        </p>
        <button className="btn privacy-banner-btn" onClick={agreePrivacy}>
          Agree
        </button>
      </div>
    </div>
  );
};

export default PrivacyBanner;
