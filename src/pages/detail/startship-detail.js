import React, { useState, useEffect } from "react";
import { getStarshipDetail } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useGetDataWithCustomKeys from "../../customHooks";
import { Container } from "react-bootstrap";
import DetailCard from "../../components/detailcard";
import { dataRow } from "../../utils";
const StarshipDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [apiResponseData, setApiRequest] = useGetDataWithCustomKeys();
  const [films, setFilms] = useState([]);
  const { starshipDetail } = useSelector((state) => state.starwars);

  useEffect(() => {
    dispatch(getStarshipDetail(params.id));
  }, []);

  useEffect(() => {
    let dataToCall = [];
    if (starshipDetail?.fullfilled) {
      starshipDetail.fullfilled.films.forEach((item, index) => {
        dataToCall.push(item);
      });
      setApiRequest(dataToCall);
    }
  }, [starshipDetail?.fullfilled]);

  useEffect(() => {
    if (apiResponseData.length > 0) {
      console.log(apiResponseData);
      let films = [];
      apiResponseData.forEach((item) => {
        if (item.title) {
          films.push(item);
        }
      });
      setFilms(films);
    }
  }, [apiResponseData]);

  return (
    <div className="starship-detail">
      <Container className="my-5 py-4">
        {starshipDetail?.fullfilled ? (
          <DetailCard
            imageUrl={
              "https://i.pinimg.com/736x/5e/5b/8b/5e5b8bccf50274495a1549d681c72b7f.jpg"
            }
            title={"Starship : " + starshipDetail?.fullfilled?.name}
            description={starshipDetail?.fullfilled?.opening_crawl}
            category={starshipDetail?.fullfilled?.starship_class}
            rating={starshipDetail?.fullfilled?.hyperdrive_rating}
            rowWithMultipleValues={[
              { name: "Films", data: dataRow(films, "films") },
            ]}
            rowWithSingleValues={[
              {
                name: "Model",
                text: starshipDetail?.fullfilled?.model,
              },
              {
                name: "Manufacturer",
                text: starshipDetail?.fullfilled?.manufacturer,
              },
              {
                name: "Max Atmosphering Speed",
                text:
                  starshipDetail?.fullfilled?.max_atmosphering_speed +
                  " Km/sec",
              },
              {
                name: "Passengers",
                text: starshipDetail?.fullfilled?.passengers,
              },
              {
                name: "Crew",
                text: starshipDetail?.fullfilled?.crew,
              },
              {
                name: "Cargo Capacity",
                text: starshipDetail?.fullfilled?.cargo_capacity + " litres",
              },
            ]}
          />
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};
export default StarshipDetail;
