import React from "react";
import "./Article.css";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../../queries/queries";
import { useSpring, animated } from "react-spring";
import Loading from "../../components/Loading";
import Breadcrumb from "../../components/Breadcrumb";
import DateFormatter from "../../components/DateFormatter";
import MainImage from "../../components/MainImage";
import HollowLikeImg from "../../assets/star.svg";
import SolidLikeImg from "../../assets/star-filled.svg";

const Article = ({ favourites, addFavourite, removeFavourite }) => {
  const { articleID } = useParams();
  console.log("does favs include it :", favourites.includes(articleID));
  console.log("ID: ", articleID);
  console.log("list: ", favourites);

  // const [isArticleInFavourites, setIsArticleInFavourites] = useState(false);

  // useEffect(() => {
  //   if (favourites) {
  //     if (favourites.includes(articleID)) {
  //       setIsArticleInFavourites(true);
  //     }
  //   }
  // }, [articleID, favourites]);

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  const { loading, error, data } = useQuery(getArticle, {
    variables: {
      id: articleID,
    },
  });

  const toggleFav = (e) => {
    e.preventDefault();
    if (favourites.includes(articleID)) {
      //remove
      removeFavourite(articleID);
    } else {
      //add to favs
      addFavourite(articleID);
    }
  };

  if (data && (data.article === null || data.article.length === 0)) {
    return (
      <animated.div style={animationProps} className="category">
        <Breadcrumb text={"Back"} />
        <article className="container full-height-page">
          <h3>No article found. Something has gone wrong.</h3>
        </article>
      </animated.div>
    );
  }

  return (
    <animated.div style={animationProps} className="article-container ">
      <Breadcrumb text={"Back"} />
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && console.log(data)}
      {data && (
        <article className="article-item" key={data.article.id}>
          <div className="article-header medium-vertical-padding">
            <div className="container">
              <h6 className="article-item-date">
                <DateFormatter date={data.article.updatedAt} />
              </h6>
              {data.article.updatedAt !== data.article.createdAt && (
                <h6 className="article-item-date-updated">Updated</h6>
              )}
              <h1 className="article-title header-trigger">
                {data.article.title}
              </h1>
              {data.article.author ? (
                <h3 className="article-author">{data.article.author}</h3>
              ) : (
                <h3 className="article-author">Editor</h3>
              )}
              <button className="fav-button" onClick={toggleFav}>
                <img
                  className="fav-button-img"
                  src={
                    favourites.includes(articleID)
                      ? SolidLikeImg
                      : HollowLikeImg
                  }
                  alt="like button"
                />
              </button>
            </div>
          </div>
          <div className="article-body large-padding">
            <div className="container">
              {data.article.images?.url && (
                <MainImage
                  alt={data.article.title}
                  src={data.article.images.url}
                />
              )}
              <div
                className="article-html"
                dangerouslySetInnerHTML={{ __html: data.article.text.html }}
              ></div>
              <div className="categories-list">
                {data.article.categories.map((category) => {
                  return (
                    <Link
                      className="category-list-link"
                      key={category.title}
                      to={`/category/${category.title.toLowerCase()}`}
                    >
                      {category.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      )}
    </animated.div>
  );
};

export default Article;
