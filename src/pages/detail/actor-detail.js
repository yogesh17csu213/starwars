import React, { useState, useEffect } from "react";
import { getActorDetail } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import DetailCard from "../../components/detailcard";
import useGetDataWithCustomKeys from "../../customHooks";
import { dataRow } from "../../utils";
const ActorDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [apiResponseData, setApiRequest] = useGetDataWithCustomKeys();
  const { actorDetail } = useSelector((state) => state.starwars);
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    dispatch(getActorDetail(params.id));
  }, []);

  useEffect(() => {
    let dataToCall = [];
    if (actorDetail?.fullfilled) {
      actorDetail.fullfilled.films.forEach((item, index) => {
        dataToCall.push(item);
      });
      actorDetail.fullfilled.starships.forEach((item, index) => {
        dataToCall.push(item);
      });
      dataToCall.push(actorDetail.fullfilled.homeworld);
      setApiRequest(dataToCall);
    }
  }, [actorDetail?.fullfilled]);

  useEffect(() => {
    if (apiResponseData.length > 0) {
      console.log(apiResponseData);
      let films = [];
      let starships = [];
      let planets = [];
      apiResponseData.forEach((item) => {
        if (item.title) {
          films.push(item);
        }
        if (item.model) {
          starships.push(item);
        }
        if (item.climate) {
          planets.push(item);
        }
      });
      setFilms(films);
      setStarships(starships);
      setPlanets(planets);
    }
  }, [apiResponseData]);

  return (
    <div className="actor-detail">
      <Container className="my-5 py-4">
        {actorDetail?.fullfilled ? (
          <DetailCard
            imageUrl={
              "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Fimg_4069-2000.jpg"
            }
            title={"Charactor : " + actorDetail?.fullfilled?.name}
            description={actorDetail?.fullfilled?.opening_crawl}
            rating={
              actorDetail?.fullfilled?.gender === "n/a"
                ? "N/A"
                : actorDetail?.fullfilled?.gender === "male"
                ? "Male"
                : "Female"
            }
            category={actorDetail?.fullfilled?.skin_color}
            rowWithMultipleValues={[
              { name: "Films", data: dataRow(films, "films") },
              { name: "Starships", data: dataRow(starships, "starships") },
              { name: "Planets", data: dataRow(planets, "planets") },
            ]}
            rowWithSingleValues={[
              { name: "Birth Year", text: actorDetail?.fullfilled?.birth_year },
              { name: "Height", text: actorDetail?.fullfilled?.height + "cm" },
              {
                name: "Weight",
                text: actorDetail?.fullfilled?.mass + "kg",
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
export default ActorDetail;
