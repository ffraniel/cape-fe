import React from "react";
import "./Favourites.css";
import { useQuery } from "@apollo/react-hooks";
import { getArticlesByIDList } from "../../queries/queries";
import FavouritesList from "./FavouritesList";
import Loading from "../../components/Loading";

const Favourites = ({ favourites }) => {
  const { loading, error, data } = useQuery(getArticlesByIDList, {
    variables: {
      idList: favourites,
    },
  });

  return (
    <div className="favourites">
      <h1>Favourites</h1>
      {loading && <Loading />}
      {error && <h3>ERROR {console.log("error: ", JSON.stringify(error))}</h3>}

      {data && data.articles && data.articles.length > 0 && (
        <FavouritesList articles={data.articles} />
      )}
      {data && console.log("THAT DATA: ", data)}

      {data && data.length === 0 && (
        <div className="no-more-results">
          <h3>No Favourites</h3>
        </div>
      )}
    </div>
  );
};

export default Favourites;
