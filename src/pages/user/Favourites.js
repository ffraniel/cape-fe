import React from "react";
import "./Favourites.css";
import { useQuery } from "@apollo/react-hooks";
import { getArticlesByIDList } from "../../queries/queries";
import FavouritesList from "./FavouritesList";
import Loading from "../../components/Loading";
import SubjectHeading from "../../components/SubjectHeading";

const Favourites = ({ favourites, addFavourite, removeFavourite }) => {
  const variables = {
    ids: favourites,
  };

  const { loading, error, data } = useQuery(getArticlesByIDList, {
    variables,
  });

  return (
    <div className="favourites page medium-vertical-padding">
      <SubjectHeading categoryText={"Favourites"} />
      <div className="container"></div>

      {loading && <Loading />}

      {favourites.length > 0 && error && (
        <h3>ERROR {console.log("error: ", error)}</h3>
      )}

      {favourites.length > 0 &&
        data &&
        console.log("THAT DATA: ", data.articles)}
      {favourites.length > 0 && data && (
        <FavouritesList
          articles={data.articles}
          favourites={favourites}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      )}

      {favourites.length === 0 && (
        <div className="container no-favourites">
          <h3>No Favourites</h3>
          <p>Articles you Favourite will display here</p>
          <p>To add a favourite go to an article and click the star button</p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
