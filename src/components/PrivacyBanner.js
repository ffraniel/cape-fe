import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyBanner.css";

const PrivacyBanner = ({ isLocalStorageAllowed, handleAllowStorageChange }) => {
  return (
    <div
      className={
        isLocalStorageAllowed !== ""
          ? "privacy-banner hidden"
          : "privacy-banner"
      }
    >
      <div className="banner-container">
        <p>
          Lots of text with a link to the
          <Link to="/privacy">Privacy page</Link>.
        </p>
        <button
          className="btn privacy-banner-btn"
          onClick={handleAllowStorageChange}
        >
          Agree
        </button>
      </div>
    </div>
  );
};

export default PrivacyBanner;
