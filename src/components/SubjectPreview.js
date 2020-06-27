import React from "react";
import "./SubjectPreview.css";
import MiniFeed from "./MiniFeed";
import { getArticlesByThemeB } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";

const SubjectPreview = ({ previewSubject }) => {
  const { loading, error, data } = useQuery(getArticlesByThemeB, {
    variables: {
      category: previewSubject,
      first: 4,
    },
  });

  const capitalisedSubject = previewSubject[0]
    .toUpperCase()
    .concat(previewSubject.slice(1));

  return (
    <div className={`${previewSubject}-preview subject-preview`}>
      <h3 className="heading">{capitalisedSubject}</h3>
      {loading && <h5>Loading</h5>}
      {data && <MiniFeed articles={data.articles} category={previewSubject} />}
      {error && <h5>Error</h5>}
      {error && console.log("ERROR: ", error)}
    </div>
  );
};

export default SubjectPreview;
