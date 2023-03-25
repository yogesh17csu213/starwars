import React, { useEffect } from "react";
import ListCard from "../../components/listcard";
import { useSelector, useDispatch } from "react-redux";
import { getStarships } from "../../store/actions";
import { COLORS } from "../../constants";
import { Container } from "react-bootstrap";
const Starships = () => {
  const dispatch = useDispatch();
  const { starships } = useSelector((state) => state.starwars);
  useEffect(() => {
    dispatch(getStarships());
  }, []);
  return (
    <div className="planets">
      <Container className="my-5 py-4">
        <h3>All Starships</h3>
        <div className="d-flex flex-wrap card-row">
          {starships?.fullfilled?.results?.map((item, index) => {
            let cardColorIndex = index % COLORS.length;
            let cardColor = COLORS[cardColorIndex];
            let body = `I am ${item.name}. My model is ${item.model} and manufacturer is ${item.manufacturer}.`;
            let starship =
              item.starship_class.charAt(0).toUpperCase() +
              item.starship_class.slice(1);
            return (
              <ListCard
                color={cardColor}
                heading={`Starship Class : ${
                  item.starship_class === "unknown" ? "Not Available" : starship
                }`}
                title={item.name}
                url={`/starships/${item.url.split("starships/")[1]}`}
                body={body}
                rowWithSingleValues={[
                  { heading: "Pilots", text: item?.pilots?.length },
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
export default Starships;
