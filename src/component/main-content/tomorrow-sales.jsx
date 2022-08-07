import "./tomorrow-sales.scss";
import Card from "../card/card";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const TomorrowSales = (props) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios
        .get(`http://localhost:3001/dataBase?_limit=5&_page=${currentPage}`)
        .then((response) => {
          setPhotos([...photos, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    let minHeight =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);

    if (minHeight < 70) {
      setFetching(true);
    }
  };

  return (
    <section className="tomorrow-sales">
      <div className="tomorrow-sales__title">Tomorrow's Sales</div>
      {photos.map((data) => (
        <div className="tomorrow-sales__main-card" key={data.id}>
          <Card theme={props.theme} data={data} />
        </div>
      ))}
    </section>
  );
};
export default TomorrowSales;
