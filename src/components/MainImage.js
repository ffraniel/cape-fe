import React, { useState } from "react";
import "./MainImage.css";

const MainImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <h2 className="main-image-loading-indicator">Loading</h2>}
      <img
        style={loading ? { display: "none" } : {}}
        className="article-main-image"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default MainImage;
