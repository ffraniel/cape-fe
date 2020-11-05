import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyBanner.css";

const PrivacyBanner = ({
  isLocalStorageAllowed,
  handleAllowStorageChange,
  setIsLocalStorageAllowed,
}) => {
  return (
    <div
      className={
        isLocalStorageAllowed !== ""
          ? "privacy-banner hidden"
          : "privacy-banner"
      }
      role="dialog"
      tabIndex="-1"
      aria-label="Privacy popup asking you if user agrees to terms allowing use of browser Local Storage and email address for account"
    >
      <div className="banner-container">
        <p>
          Allow use of cookies
          <Link to="/privacy">Privacy page</Link>
        </p>
        <div>
          <button
            className="btn privacy-banner-btn"
            onClick={handleAllowStorageChange}
          >
            Agree
          </button>
          <button
            onClick={() => {
              setIsLocalStorageAllowed(false);
            }}
            className="btn deny-btn"
          >
            <span>Deny</span>x
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;
