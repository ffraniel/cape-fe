import React from "react";
import "./Article.css";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Loading from "../../components/Loading";
import Breadcrumb from "../../components/Breadcrumb";
import { getArchiveText } from "../../queries/queries";

const ArchiveArticle = () => {
  const { archiveYear } = useParams();

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  const { loading, error, data } = useQuery(getArchiveText, {
    variables: {
      year: parseInt(archiveYear),
    },
  });

  if (data && (data.archives === null || data.archives.length === 0)) {
    return (
      <animated.div style={animationProps} className="category">
        <Breadcrumb text={"Back"} />
        <article className="container full-height-page">
          <h3>No archive for the year {archiveYear} found</h3>
        </article>
      </animated.div>
    );
  }


  return (
    <animated.div style={animationProps} className="article-container ">
      <Breadcrumb text={"Back"} />
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error.networkError.result.errors)}</h1>}
      {data && data.archives &&
        <article className="article-item">
          {console.log(data)}
          <div className="article-header medium-vertical-padding">
            <div className="container">
              <h1 className="article-title header-trigger">
                {data.archives[0].title}
              </h1>
            </div>
          </div>
          <div className="article-body large-padding">
            <div className="container">
              <div
                className="article-html"
                dangerouslySetInnerHTML={{ __html: data.archives[0].text.html }}
              ></div>
            </div>
          </div>
        </article>
      }

    </animated.div>
  );
};

export default ArchiveArticle;
