import React from "react";
import "./Article.css";
import { useQuery } from '@apollo/react-hooks';
import { 
  Link,
  useParams
} from 'react-router-dom';
import { getArticle } from '../../queries/queries';

const Article = () => {
  const { articleID } = useParams();

  const { loading, error, data } = useQuery(getArticle, {
    variables: {
      id: articleID
    }
  });

  if (data && (data.article === null || data.article.length === 0)) {

    return (
      <div className="category">
        <article className="container">
          <h3>There are no articles for the category "{articleID}".</h3>
        </article>
      </div>
    );
  }

  return (
    <div className="category">
      {loading && <h1>Loading</h1>}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && console.log(data)}
      {data && 
        <article className="container" key={data.article.id}>
          <h1>{data.article.title}</h1>
          <div dangerouslySetInnerHTML={{__html: data.article.text.html}}></div>
          <div className="categories-list">
            {data.article.category.map(category => {
              return <Link key={category.title} to={`/category/${category.title.toLowerCase()}`}>{category.title}</Link>;
            })}
          </div>
        </article>
      }
    </div>
  );
};

export default Article;
