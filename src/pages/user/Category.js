import React from "react";
import "./Category.css";
import { useQuery } from '@apollo/react-hooks';
import { 
  Link, 
  useParams
} from 'react-router-dom';
import { getArticlesByTheme } from '../../queries/queries';

const Category = () => {
  
  const { category } = useParams();

  const { loading, error, data } = useQuery(getArticlesByTheme, {
    variables: {
      category: category
    }
  });

  return (
    <div className="category">
      <h1>Category : "{category}"</h1>
      {loading && <h1>Loading</h1>}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}

      {data && data.articles.map(article => {
        return (
          <article key={article.id}>
            <h1>{article.title}</h1>
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

export default Category
