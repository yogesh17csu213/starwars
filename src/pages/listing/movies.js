import React, { useEffect } from "react";
import "../../assets/css/movies.css";
import ListCard from "../../components/listcard";
import { useSelector, useDispatch } from "react-redux";
import { getFilms } from "../../store/actions";
import { Container } from "react-bootstrap";
import CarouselMovies from "../../components/carousel";
import { COLORS } from "../../constants";

const Movies = () => {
  const dispatch = useDispatch();
  const { films } = useSelector((state) => state.starwars);
  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <div className="movies">
      <CarouselMovies />
      <Container className="my-5 py-4 bg-dark text-light">
        <h3>Movies</h3>
        <div className="d-flex flex-wrap card-row">
          {films?.fullfilled?.results?.map((item, index) => {
            let cardColorIndex = index % COLORS.length;
            let cardColor = COLORS[cardColorIndex];
            return (
              <ListCard
                color={cardColor}
                heading={`Release Date: ${item.release_date}`}
                title={item.title}
                url={`/movies/${item.url.split("films/")[1]}`}
                body={item.opening_crawl.slice(0, 100) + "..."}
                rowWithSingleValues={[
                  { heading: "Characters", text: item?.characters?.length },
                  { heading: "Starships", text: item?.starships?.length },
                  { heading: "Planets", text: item?.planets?.length },
                ]}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Movies;
