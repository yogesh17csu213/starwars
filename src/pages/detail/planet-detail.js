import React, { useState, useEffect } from "react";
import { getPlanetDetail } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useGetDataWithCustomKeys from "../../customHooks";
import { Container } from "react-bootstrap";
import DetailCard from "../../components/detailcard";
import { dataRow } from "../../utils";
const PlanetDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [apiResponseData, setApiRequest] = useGetDataWithCustomKeys();
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const { planetDetail } = useSelector((state) => state.starwars);
  useEffect(() => {
    dispatch(getPlanetDetail(params.id));
  }, []);

  useEffect(() => {
    let dataToCall = [];
    if (planetDetail?.fullfilled) {
      planetDetail.fullfilled.films.forEach((item, index) => {
        dataToCall.push(item);
      });
      planetDetail.fullfilled.residents.forEach((item, index) => {
        dataToCall.push(item);
      });
      setApiRequest(dataToCall);
    }
  }, [planetDetail?.fullfilled]);

  useEffect(() => {
    if (apiResponseData.length > 0) {
      console.log(apiResponseData);
      let films = [];
      let characters = [];
      apiResponseData.forEach((item) => {
        if (item.title) {
          films.push(item);
        }
        if (item.gender) {
          characters.push(item);
        }
      });
      setFilms(films);
      setCharacters(characters);
    }
  }, [apiResponseData]);

  return (
    <div className="planet-detail">
      <Container className="my-5 py-4">
        {planetDetail?.fullfilled ? (
          <DetailCard
            imageUrl={
              "https://i.pinimg.com/736x/e0/b6/dd/e0b6dd17bbfbdc74e2c62cea8056b461.jpg"
            }
            title={"Planet : " + planetDetail?.fullfilled?.name}
            description={planetDetail?.fullfilled?.opening_crawl}
            rating={planetDetail?.fullfilled?.climate}
            category={planetDetail?.fullfilled?.surface_water}
            rowWithMultipleValues={[
              { name: "Films", data: dataRow(films, "films") },
              { name: "Characters", data: dataRow(characters, "characters") },
            ]}
            rowWithSingleValues={[
              {
                name: "Diamete",
                text: planetDetail?.fullfilled?.diameter + " Km",
              },
              { name: "Gravity", text: planetDetail?.fullfilled?.gravity },
              {
                name: "Orbital Period",
                text: planetDetail?.fullfilled?.orbital_period + " days",
              },
              {
                name: "Population",
                text: planetDetail?.fullfilled?.population,
              },
              {
                name: "Terrain",
                text: planetDetail?.fullfilled?.terrain,
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
export default PlanetDetail;
