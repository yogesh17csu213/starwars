import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: {},
  filmDetail: {},
  filmSearch: {},
  actors: {},
  actorDetail: {},
  startships: {},
  starshipDetail: {},
  planets: {},
  planetDetail: {},
};

export const appSlice = createSlice({
  name: "starwars",
  initialState,
  reducers: {
    getFilmsPending(state, action) {
      return {
        ...state,
        films: { loading: true },
      };
    },
    getFilmsFullfilled(state, action) {
      return {
        ...state,
        films: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getFilmsRejected(state, action) {
      return {
        ...state,
        films: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearFilms(state, action) {
      return {
        ...state,
        films: {},
      };
    },

    getFilmSearchPending(state, action) {
      return {
        ...state,
        filmSearch: { loading: true },
      };
    },
    getFilmSearchFullfilled(state, action) {
      return {
        ...state,
        filmSearch: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getFilmSearchRejected(state, action) {
      return {
        ...state,
        filmSearch: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearFilmSearch(state, action) {
      return {
        ...state,
        filmSearch: {},
      };
    },

    getFilmDetailPending(state, action) {
      return {
        ...state,
        filmDetail: { loading: true },
      };
    },
    getFilmDetailFullfilled(state, action) {
      return {
        ...state,
        filmDetail: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getFilmDetailRejected(state, action) {
      return {
        ...state,
        filmDetail: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearFilmDetail(state, action) {
      return {
        ...state,
        filmDetail: {},
      };
    },

    getActorsPending(state, action) {
      return {
        ...state,
        actors: { loading: true },
      };
    },
    getActorsFullfilled(state, action) {
      return {
        ...state,
        actors: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getActorsRejected(state, action) {
      return {
        ...state,
        actors: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearActors(state, action) {
      return {
        ...state,
        actors: {},
      };
    },

    getActorDetailPending(state, action) {
      return {
        ...state,
        actorDetail: { loading: true },
      };
    },
    getActorDetailFullfilled(state, action) {
      return {
        ...state,
        actorDetail: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getActorDetailRejected(state, action) {
      return {
        ...state,
        actorDetail: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearActorDetail(state, action) {
      return {
        ...state,
        actorDetail: {},
      };
    },

    ////////

    getStarshipsPending(state, action) {
      return {
        ...state,
        starships: { loading: true },
      };
    },
    getStarshipsFullfilled(state, action) {
      return {
        ...state,
        starships: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getStarshipsRejected(state, action) {
      return {
        ...state,
        starships: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearStarships(state, action) {
      return {
        ...state,
        starships: {},
      };
    },

    getStarshipDetailPending(state, action) {
      return {
        ...state,
        starshipDetail: { loading: true },
      };
    },
    getStarshipDetailFullfilled(state, action) {
      return {
        ...state,
        starshipDetail: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getStarshipDetailRejected(state, action) {
      return {
        ...state,
        starshipDetail: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearStarshipDetail(state, action) {
      return {
        ...state,
        starshipDetail: {},
      };
    },

    ///////////
    getPlanetsPending(state, action) {
      return {
        ...state,
        planets: { loading: true },
      };
    },
    getPlanetsFullfilled(state, action) {
      return {
        ...state,
        planets: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getPlanetsRejected(state, action) {
      return {
        ...state,
        planets: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearPlanets(state, action) {
      return {
        ...state,
        planets: {},
      };
    },

    getPlanetDetailPending(state, action) {
      return {
        ...state,
        planetDetail: { loading: true },
      };
    },
    getPlanetDetailFullfilled(state, action) {
      return {
        ...state,
        planetDetail: {
          loading: false,
          fullfilled: action.payload,
        },
      };
    },
    getPlanetDetailRejected(state, action) {
      return {
        ...state,
        planetDetail: {
          loading: false,
          rejected: action.payload,
        },
      };
    },
    clearPlanetDetail(state, action) {
      return {
        ...state,
        planetDetail: {},
      };
    },
  },
});

export const {
  getFilmsPending,
  getFilmsFullfilled,
  getFilmsRejected,
  clearFilms,

  getFilmSearchPending,
  getFilmSearchFullfilled,
  getFilmSearchRejected,
  clearFilmSearch,
  getFilmDetailPending,
  getFilmDetailFullfilled,
  getFilmDetailRejected,
  clearFilmDetail,

  getActorsPending,
  getActorsFullfilled,
  getActorsRejected,
  clearActors,

  getActorDetailPending,
  getActorDetailFullfilled,
  getActorDetailRejected,
  clearActorDetail,

  getStarshipsPending,
  getStarshipsFullfilled,
  getStarshipsRejected,
  clearStarships,

  getStarshipDetailPending,
  getStarshipDetailFullfilled,
  getStarshipDetailRejected,
  clearStarshipDetail,

  getPlanetsPending,
  getPlanetsFullfilled,
  getPlanetsRejected,
  clearPlanets,

  getPlanetDetailPending,
  getPlanetDetailFullfilled,
  getPlanetDetailRejected,
  clearPlanetDetail,
} = appSlice.actions;

export default appSlice.reducer;
