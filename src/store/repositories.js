import axios from "axios";
import { Urls } from "./urls";

export const getFilmsRepo = (params) => {
  return axios({
    method: "GET",
    url: Urls.FILMS,
    params: params,
  });
};

export const getActorsRepo = (params) => {
  return axios({
    method: "GET",
    url: Urls.PEOPLE,
  });
};

export const getPlanetsRepo = (params) => {
  return axios({
    method: "GET",
    url: Urls.PLANETS,
  });
};

export const getSpeciesRepo = (params) => {
  return axios({
    method: "GET",
    url: Urls.SPECIES,
  });
};
export const getStarshipsRepo = (params) => {
  return axios({
    method: "GET",
    url: Urls.STARSHIPS,
  });
};

export const getVehiclesRepo = (params) => {
  return axios({
    method: "GET",
    url: Urls.VEHICLES,
  });
};

export const getFilmDetailRepo = (id) => {
  return axios({
    method: "GET",
    url: Urls.FILMS + id,
  });
};

export const getActorDetailRepo = (id) => {
  return axios({
    method: "GET",
    url: Urls.PEOPLE + id,
  });
};

export const getPlanetDetailRepo = (id) => {
  return axios({
    method: "GET",
    url: Urls.PLANETS + id,
  });
};

export const getSpeciesDetailRepo = (id) => {
  return axios({
    method: "GET",
    url: Urls.SPECIES + id,
  });
};
export const getStarshipDetailRepo = (id) => {
  return axios({
    method: "GET",
    url: Urls.STARSHIPS + id,
  });
};
export const getVehiclesDetailRepo = (id) => {
  return axios({
    method: "GET",
    url: Urls.VEHICLES + id,
  });
};
