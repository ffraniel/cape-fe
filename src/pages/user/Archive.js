import React, {useState} from "react";
import "./Archive.css";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Loading from "../../components/Loading";
import Breadcrumb from "../../components/Breadcrumb";
import SubjectHeading from "../../components/SubjectHeading";
// import { getArchives } from "../../queries/queries";

const Archive = () => {

  const animationProps = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0, transform: "translate(0, 20px)" },
    config: {
      mass: 2,
      friction: 28,
    },
  });

  const list = [
    {title: "KSCIE 2017", id: "a", year: 2017}, 
    {title: "KSCIE 2018", id: "b", year: 2018}, 
    {title: "KSCIE 2019", id: "c", year: 2019}
  ];

  const [ordering, setOrdering] = useState("DESC");
  const [listInOrder, setListInOrder] = useState();

  // change ordering to isDescending, use boolean, have one list as it comes through, then flip it

  function handleOrderingChange(e) {
    setOrdering(e.target.value);
  }

  const ArchiveList = ({list}) => {

    return (
      <div className="archive-list-page">
        <SubjectHeading categoryText={"Archive"} />
        <section className="archive-list-container">        
          <div className="select-container">
            <label htmlFor="sort-order">Sort in <span className="red">{ordering === "ASCE" ? "ascending" : "descending"}</span> order</label>
            <select value={ordering} onChange={handleOrderingChange} name="sort-order" id="sort-order">
              <option value="DESC">DESC</option>
              <option value="ASCE">ASCE</option>
            </select>
          </div>
          <ul className="archive-list">
            {ordering === "DESC" && list.sort((a, b) => a.year - b.year).map(listItem => {
              return (
                <li key={listItem.id}>
                  <Link to={`/archive/${listItem.year}`}>{listItem.title}</Link>
                </li>
              )
            })}
            {ordering === "ASCE" && list.sort((a, b) => b.year - a.year).map(listItem => {
              return (
                <li key={listItem.id}>
                  <Link to={`/archive/${listItem.year}`}>{listItem.title}</Link>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  };


  return (
    <animated.div style={animationProps} className="article-container ">
      {/* {loading && <Loading />}
      {error && <h1>ERROR{console.log("error: ", error)}</h1>} */}
      {list && (
        <ArchiveList list={list} />
      )}
    </animated.div>
  );
};

export default Archive;
