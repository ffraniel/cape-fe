import React, { useEffect, useState} from "react";
import "./Category.css";
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { getArticlesByTheme } from '../../queries/queries';
import List from './List';
import Paginator from '../../components/Paginator';
import Loading from '../../components/Loading';

const Category = () => {
  
  const { category, pagination } = useParams();
  const [pageNumber, setPageNumber] = useState(pagination === undefined ? 0 : pagination);
  
  const skipValue = 2;

  const { loading, error, data, fetchMore } = useQuery(getArticlesByTheme, {
    variables: {
      category: category,
      first: skipValue,
      skip: 0
    }
  });
  
  useEffect(() => {
    setPageNumber(pagination === undefined ? 0 : pagination);
    fetchMore({
      variables: {
        category: category,
        first: skipValue,
        skip: skipValue * Number(pagination === undefined ? 0 : pagination)
      }, 
      updateQuery: (previousResult, {fetchMoreResult}) => {
        if (!fetchMoreResult) { 
          return previousResult;
        }
        console.log("always this; ", fetchMoreResult)
        return fetchMoreResult;
      }
    });
  }, [pagination, fetchMore, pageNumber, category]);

  let categoryText = category[0].toUpperCase().concat(category.slice(1))

  return (
    <div className="container">
      {data && data.articles.length > 0 && <h3>{categoryText}</h3>}
      {loading && <Loading />}
      {error && <h3>ERROR{console.log("error: ", error)}</h3>}
      {data && <List data={data} />}
      {data && 
        <Paginator 
          pageNumber={Number(pageNumber)} 
          length={data.articles.length} 
          isCategory={true} 
          category={category} 
        />}
    </div>
  );
};

export default Category
