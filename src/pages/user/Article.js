import React from "react";
import "./Article.css";
import { useQuery } from '@apollo/react-hooks';
import { 
  Link,
  useParams
} from 'react-router-dom';
import { getArticle } from '../../queries/queries';
import {useSpring, animated} from 'react-spring';
import Loading from '../../components/Loading';

const Article = () => {
  const { articleID } = useParams();

  const animationProps = useSpring({
    opacity: 1, 
    transform: 'translate(0, 0)',
    from: {opacity: 0, transform: 'translate(0, 20px)'},
    config: {
      mass: 2,
      friction: 28
    }
  });

  const { loading, error, data } = useQuery(getArticle, {
    variables: {
      id: articleID
    }
  });

  if (data && (data.article === null || data.article.length === 0)) {

    return (
      <animated.div style={animationProps} className="category">
        <article className="container">
          <h3>There are no articles for the category '{articleID}'.</h3>
        </article>
      </animated.div>
    );
  }

  return (
    <animated.div style={animationProps} className="article-container medium-vertical-padding">
      {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && console.log(data)}
      {data && 
        <article className="article-item container" key={data.article.id}>
          <h1 className="article-title header-trigger">{data.article.title}</h1>
          <div dangerouslySetInnerHTML={{__html: data.article.text.html}}></div>
          <div className="categories-list">
            {data.article.categories.map(category => {
              return <Link className="category-list-link" key={category.title} to={`/category/${category.title.toLowerCase()}`}>{category.title}</Link>;
            })}
          </div>
        </article>
      }
    </animated.div>
  );
};

export default Article;
