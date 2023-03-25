import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActors } from "../../store/actions";
import ListCard from "../../components/listcard";
import { COLORS } from "../../constants";
import { Container } from "react-bootstrap";

const Actors = () => {
  const dispatch = useDispatch();
  const { actors } = useSelector((state) => state.starwars);
  useEffect(() => {
    dispatch(getActors());
  }, []);
  return (
    <div className="actors">
      <Container className="my-5 py-4">
        <h3>All Actors</h3>
        <div className="d-flex flex-wrap card-row">
          {actors?.fullfilled?.results?.map((item, index) => {
            let cardColorIndex = index % COLORS.length;
            let cardColor = COLORS[cardColorIndex];
            let body = `I am ${item.name}. My height is ${item.height}cm and weight is ${item.mass}kg. I have ${item.skin_color} skin and ${item.hair_color} hair. My eyes are of ${item.eye_color} color.`;
            return (
              <ListCard
                color={cardColor}
                heading={`Gender: ${
                  item.gender === "n/a"
                    ? "Not Available"
                    : item.gender === "male"
                    ? "Male"
                    : "Female"
                }`}
                title={item.name}
                url={`/actors/${item.url.split("people/")[1]}`}
                body={body}
                rowWithSingleValues={[
                  { heading: "Films", text: item?.films?.length },
                  { heading: "Starships", text: item?.starships?.length },
                  { heading: "Vehicles", text: item?.vehicles?.length },
                ]}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Actors;
