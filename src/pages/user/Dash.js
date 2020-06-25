import React from "react";
import "./Dash.css";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { getArticlesPreviewB } from "../../queries/queries";
import Latest from "../../components/Latest";
import MiniFeed from "../../components/MiniFeed";
import EventsPreview from "../../components/EventsPreview";
import ResourcesPreview from "../../components/ResourcesPreview";
import GuidancePreview from "../../components/GuidancePreview";
import MinutesPreview from "../../components/MinutesPreview";
import Loading from "../../components/Loading";

const Dash = () => {
  const skipValue = 4;

  const { loading, error, data } = useQuery(getArticlesPreviewB, {
    variables: {
      category: "News",
      first: skipValue,
    },
  });

  return (
    <div className="dash">
      {loading && <Loading />}
      {data && (
        <>
          <div className="latest-article-container">
            <Latest article={data.articles[0]} />
          </div>
          <div className="recent-article-preview">
            <MiniFeed articles={data.articles.slice(1)} />
          </div>
        </>
      )}
      <EventsPreview />
      <ResourcesPreview />
      <GuidancePreview />
      <MinutesPreview />
      {error && <h3>ERROR</h3>}
      {error && console.log("ERROR: ", error.toString())}
    </div>
  );
};

export default Dash;
