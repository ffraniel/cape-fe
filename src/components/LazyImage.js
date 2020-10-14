import React, { useState } from "react";
import "./LazyImage.css";
import loadingImage from "../assets/conference-photos/loading-image.jpg";

const LazyImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <img
          className="loading-image"
          src={loadingImage}
          alt="loading indicator"
        />
      )}
      <img
        style={loading ? { display: "none" } : {}}
        className="mosaic-image lazy-image"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default LazyImage;
