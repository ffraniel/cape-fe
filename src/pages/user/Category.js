import React from "react";
import "./Category.css";
import { useQuery } from '@apollo/react-hooks';
import {
  useParams
} from 'react-router-dom';
import { getArticlesByTheme } from '../../queries/queries';
import List from './List';

const Category = () => {
  
  const { category } = useParams();

  const { loading, error, data } = useQuery(getArticlesByTheme, {
    variables: {
      category: category
    }
  });

  return (
    <div className="container">
      <h1>Category : "{category}"</h1>
      {loading && <h1>Loading</h1>}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>}
      {data && <List data={data} />}
    </div>
  );
};

export default Category
