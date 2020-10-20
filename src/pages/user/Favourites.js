import React from "react";
import "./Favourites.css";
import { useQuery } from "@apollo/react-hooks";
import { getArticlesByIDList } from "../../queries/queries";
import FavouritesList from "./FavouritesList";
import Loading from "../../components/Loading";
import SubjectHeading from "../../components/SubjectHeading";

const Favourites = ({ favourites, addFavourite, removeFavourite }) => {
  console.log("loading these faourites ", favourites);

  const { loading, error, data } = useQuery(getArticlesByIDList, {
    variables: {
      idList: favourites,
    },
    fetchPolicy: "network-only",
  });

  return (
    <div className="favourites">
      <SubjectHeading categoryText={"Favourites"} />

      {loading && <Loading />}
      {loading && console.log("did a loading")}
      {error && <h3>ERROR {console.log("error: ", JSON.stringify(error))}</h3>}

      {data && console.log("THAT DATA: ", data)}
      {data && (
        <FavouritesList
          data={data}
          favourites={favourites}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      )}

      {data && data.length === 0 && (
        <div className="no-more-results">
          <h3>No Favourites</h3>
        </div>
      )}
    </div>
  );
};

export default Favourites;
