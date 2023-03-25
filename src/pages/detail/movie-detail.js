import React, { useState, useEffect } from "react";
import { getFilmDetail } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/detailcard";
import { Container } from "react-bootstrap";
import useGetDataWithCustomKeys from "../../customHooks";
import { dataRow } from "../../utils";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [apiResponseData, setApiRequest] = useGetDataWithCustomKeys();
  const { filmDetail } = useSelector((state) => state.starwars);
  const [characters, setCharacters] = useState([]);
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    dispatch(getFilmDetail(params.id));
  }, [params.id]);
  useEffect(() => {
    let dataToCall = [];
    if (filmDetail?.fullfilled) {
      filmDetail.fullfilled.characters.forEach((item, index) => {
        dataToCall.push(item);
      });
      filmDetail.fullfilled.starships.forEach((item, index) => {
        dataToCall.push(item);
      });
      filmDetail.fullfilled.planets.forEach((item, index) => {
        dataToCall.push(item);
      });
      setApiRequest(dataToCall);
    }
  }, [filmDetail?.fullfilled]);

  useEffect(() => {
    if (apiResponseData.length > 0) {
      let characters = [];
      let starships = [];
      let planets = [];
      apiResponseData.forEach((item) => {
        if (item.gender) {
          characters.push(item);
        }
        if (item.model) {
          starships.push(item);
        }
        if (item.climate) {
          planets.push(item);
        }
      });
      setCharacters(characters);
      setStarships(starships);
      setPlanets(planets);
    }
  }, [apiResponseData]);

  return (
    <Container className="my-5 py-4">
      {filmDetail?.fullfilled ? (
        <DetailCard
          buttons={true}
          imageUrl={
            "https://i.pinimg.com/originals/93/5e/2f/935e2f6acf2c9a458de2fd15cd90ce14.jpg"
          }
          title={"Movie : " + filmDetail?.fullfilled?.title}
          rating="4.5/5"
          category={"Space Opera"}
          description={filmDetail?.fullfilled?.opening_crawl}
          rowWithMultipleValues={[
            { name: "Cast", data: dataRow(characters, "characters") },
            { name: "Starships", data: dataRow(starships, "starships") },
            { name: "Planets", data: dataRow(planets, "planets") },
          ]}
          rowWithSingleValues={[
            { name: "Director", text: filmDetail?.fullfilled?.director },
            { name: "Producer", text: filmDetail?.fullfilled?.producer },
            {
              name: "Release Date",
              text: filmDetail?.fullfilled?.release_date,
            },
          ]}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
export default MovieDetail;
