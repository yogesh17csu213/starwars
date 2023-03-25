import React, { useEffect } from "react";
import ListCard from "../../components/listcard";
import { useSelector, useDispatch } from "react-redux";
import { getPlanets } from "../../store/actions";
import { COLORS } from "../../constants";
import { Container } from "react-bootstrap";
const Planets = () => {
  const dispatch = useDispatch();
  const { planets } = useSelector((state) => state.starwars);
  useEffect(() => {
    dispatch(getPlanets());
  }, []);
  return (
    <div className="planets">
      <Container className="my-5 py-4">
        <h3>All Planets</h3>
        <div className="d-flex flex-wrap card-row">
          {planets?.fullfilled?.results?.map((item, index) => {
            let cardColorIndex = index % COLORS.length;
            let cardColor = COLORS[cardColorIndex];
            let body = `I am ${item.name}. My Rotation period is ${item.rotation_period} hrs and Orbital period is ${item.orbital_period}days. I have ${item.climate} climate and ${item.gravity} gravity. My terrain are of ${item.terrain}.`;
            return (
              <ListCard
                color={cardColor}
                heading={`Population : ${
                  item.population === "unknown"
                    ? "Not Available"
                    : item.population
                }`}
                title={item.name}
                url={`/planets/${item.url.split("planets/")[1]}`}
                body={body}
                rowWithSingleValues={[
                  { heading: "Residents", text: item?.residents?.length },
                  { heading: "Films", text: item?.films?.length },
                ]}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Planets;
