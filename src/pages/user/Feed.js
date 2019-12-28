import React from "react";
import "./Feed.css";
import { useQuery } from '@apollo/react-hooks';
import { 
  getArticlesPreview
} from '../../queries/queries';
import { Link } from "react-router-dom";

const Feed = () => {

  const { loading, error, data } = useQuery(getArticlesPreview, {
    variables: {
      category: "News"
    }
  });

  return (
    <div className="feed">
      <h2>The Feed</h2>
      {error && console.log(error) }
      {loading && <h1>Loading</h1>}
      {data && console.log(data)}

      {data && data.articles.map(article => {
        return (
          <article key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h1>{article.title}</h1>
            </Link>
            <p>{article.text.text.split(" ").slice(0, 30).join(" ")}...</p>
            <div className="categories-list">
              {article.category.map(category => {
                return <Link key={category.title} to={`/category/${category.title.toLowerCase()}`}>{category.title}</Link>;
              })}
            </div>
          </article>
        )})}
    </div>
  );
};

export default Feed;
