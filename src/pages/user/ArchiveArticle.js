import React from "react";
import "./Article.css";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Loading from "../../components/Loading";
import Breadcrumb from "../../components/Breadcrumb";
// import { getArchive } from "../../queries/queries";

const ArchiveArticle = () => {
  const { articleID } = useParams();

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  // const { loading, error, data } = useQuery(getArticle, {
  //   variables: {
  //     id: articleID,
  //   },
  // });

  // if (data && (data.article === null || data.article.length === 0)) {
  //   return (
  //     <animated.div style={animationProps} className="category">
  //       <Breadcrumb text={"Back"} />
  //       <article className="container full-height-page">
  //         <h3>No article found. Something has gone wrong.</h3>
  //       </article>
  //     </animated.div>
  //   );
  // }

  const data = {
    article : {
      text: {
        html: `When hearing a second of Headful of Sugar, try to imagine what that actually means in 2022—specifically, in this ostensible post-Peak Pandemic normalization where B-market festival posters need to get filled and coffee shops comfort maskless patrons with All New Indie and the New Alt playlists. Opener “Who Put You Up to This?” accurately predicts Headful of Sugar’s greater lean toward the invisibly popular pop-rock that might variously (and wrongly) get described as “psych” or “surfy.” Co-producer Jake Portrait knows this territory as a member of Unknown Mortal Orchestra, and the fuzzed bass and blown-out, telltale drum ticking trace back to a single Tame Impala song. The gauzy romance of Tango in the Night is swapped out for its Y2K analog of polished countrypolitan breakup songs; the lyrics and sun-soaked production of “Stand By Me” draw from two separate eras of Sheryl Crow, and the brazen rip of “Strong Enough” in its chorus—“Are you man enough to stand by my side?”—is undermined completely by its tossed-off rhyme: “Are you strong enough to ride this ride?” Otherwise, Headful of Sugar accessorizes wisely, drawing on years spent opening for Beck, Cage the Elephant, Interpol, Courtney Barnett, Wolf Alice, and Bernie Sanders: a little bit of disco, a little bit of sync-friendly blog rock, some wry character studies, a healthy amount of post-electoral disillusionment.`
      }
    }
  };

  return (
    <animated.div style={animationProps} className="article-container ">
      <Breadcrumb text={"Back"} />
      {/* {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>} */}

        <article className="article-item">
          <div className="article-header medium-vertical-padding">
            <div className="container">
              <h1 className="article-title header-trigger">
                KSCIE 2019
              </h1>
            </div>
          </div>
          <div className="article-body large-padding">
            <div className="container">
              <div
                className="article-html"
                dangerouslySetInnerHTML={{ __html: data.article.text.html }}
              ></div>
            </div>
          </div>
        </article>

    </animated.div>
  );
};

export default ArchiveArticle;
