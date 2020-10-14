import React from "react";
import "./Mosaic.css";
import LazyImage from "../components/LazyImage";
import cape1 from "../assets/conference-photos/conference-1.jpg";
import cape2 from "../assets/conference-photos/conference-2.jpg";
import cape3 from "../assets/conference-photos/conference-3.jpg";
import cape4 from "../assets/conference-photos/conference-4.jpg";
import cape5 from "../assets/conference-photos/conference-5.jpg";
import cape6 from "../assets/conference-photos/conference-6.jpg";
import cape7 from "../assets/conference-photos/conference-7.jpg";
import cape8 from "../assets/conference-photos/conference-8.jpg";
import cape9 from "../assets/conference-photos/conference-9.jpg";
import cape10 from "../assets/conference-photos/conference-10.jpg";
import cape11 from "../assets/conference-photos/conference-11.jpg";
import cape12 from "../assets/conference-photos/conference-12.jpg";
import cape13 from "../assets/conference-photos/conference-13.jpg";
import cape14 from "../assets/conference-photos/conference-14.jpg";
import cape15 from "../assets/conference-photos/conference-15.jpg";

const imageArray = [
  cape1,
  cape2,
  cape3,
  cape4,
  cape5,
  cape6,
  cape7,
  cape8,
  cape9,
  cape10,
  cape11,
  cape12,
  cape13,
  cape14,
  cape15,
];

const Mosaic = () => {
  return (
    <div className="mosaic">
      {imageArray.map((image, key) => (
        <LazyImage
          alt={"Photo from 2019 CAPE conference"}
          src={image}
          key={key}
        />
      ))}
    </div>
  );
};

export default Mosaic;
