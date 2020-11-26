import React from "react";
import "./SubjectHeading.css";
import Breadcrumb from "./Breadcrumb";

const SubjectHeading = ({ categoryText }) => {
  if (categoryText === "Resource") {
    categoryText = categoryText + "s";
  }
  return (
    <div className="subject-heading">
      <Breadcrumb text={"Back to Home"} />
      <h3 className="subject-heading--header">{categoryText}</h3>
      <div className="subject-heading--text-container">
        <p className="subject-heading--text">
          {categoryText === "News" && <NewsText />}
          {categoryText === "Events" && <EventsText />}
          {categoryText === "Guidance" && <GuidanceText />}
          {categoryText === "Resources" && <ResourcesText />}
          {categoryText === "Minutes" && <MinutesText />}
          {categoryText === "Favourites" && <FavouritesText />}
        </p>
      </div>
    </div>
  );
};

const NewsText = () => <>All the latest news about Child Protection</>;

const EventsText = () => (
  <>Keep up to date with the latest CAPE conferences and events</>
);

const GuidanceText = () => (
  <>Guidance advice on issues arising in Child Protection</>
);

const ResourcesText = () => (
  <>Resources to aid in learning and communicating best practice</>
);

const MinutesText = () => <>All the latest news about Child Protection</>;

const FavouritesText = () => (
  <>
    A place to save and manage articles.
    <br />
    Click the red cross to remove an article from your favourites
  </>
);

export default SubjectHeading;
