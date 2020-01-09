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

  return (
    <div className="category">
      {loading && <h1>Loading</h1>}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}

      {data && 
        <article className="container" key={data.article.id}>
          <h1>{data.article.title}</h1>
          <p>{data.article.text.text}</p>
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
