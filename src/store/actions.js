import {
  getFilmsRepo,
  getActorsRepo,
  getPlanetsRepo,
  getStarshipsRepo,
  getFilmDetailRepo,
  getActorDetailRepo,
  getPlanetDetailRepo,
  getStarshipDetailRepo,
} from "./repositories";

import {
  getFilmsPending,
  getFilmsFullfilled,
  getFilmsRejected,
  getFilmSearchPending,
  getFilmSearchFullfilled,
  getFilmSearchRejected,
  getFilmDetailPending,
  getFilmDetailFullfilled,
  getFilmDetailRejected,

  ///////
  getActorsPending,
  getActorsFullfilled,
  getActorsRejected,
  getActorDetailPending,
  getActorDetailFullfilled,
  getActorDetailRejected,
  /////////
  getStarshipsPending,
  getStarshipsFullfilled,
  getStarshipsRejected,
  getStarshipDetailPending,
  getStarshipDetailFullfilled,
  getStarshipDetailRejected,
  /////////////
  getPlanetsPending,
  getPlanetsFullfilled,
  getPlanetsRejected,
  getPlanetDetailPending,
  getPlanetDetailFullfilled,
  getPlanetDetailRejected,
  ///////
} from "./slices";

export const getFilmSearch = (params) => {
  return (dispatch) => {
    dispatch(getFilmSearchPending());
    getFilmsRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getFilmSearchFullfilled(response?.data));
        } else {
          dispatch(getFilmSearchRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getFilmSearchRejected(error.message));
        }
      });
  };
};

export const getFilms = (params) => {
  return (dispatch) => {
    dispatch(getFilmsPending());
    getFilmsRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getFilmsFullfilled(response?.data));
        } else {
          dispatch(getFilmsRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getFilmsRejected(error.message));
        }
      });
  };
};

export const getFilmDetail = (params) => {
  return (dispatch) => {
    dispatch(getFilmDetailPending());
    getFilmDetailRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getFilmDetailFullfilled(response?.data));
        } else {
          dispatch(getFilmDetailRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getFilmDetailRejected(error.message));
        }
      });
  };
};

////////
export const getActors = (params) => {
  return (dispatch) => {
    dispatch(getActorsPending());
    getActorsRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getActorsFullfilled(response?.data));
        } else {
          dispatch(getActorsRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getActorsRejected(error.message));
        }
      });
  };
};

export const getActorDetail = (params) => {
  return (dispatch) => {
    dispatch(getActorDetailPending());
    getActorDetailRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getActorDetailFullfilled(response?.data));
        } else {
          dispatch(getActorDetailRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getActorDetailRejected(error.message));
        }
      });
  };
};

///

export const getStarships = (params) => {
  return (dispatch) => {
    dispatch(getStarshipsPending());
    getStarshipsRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getStarshipsFullfilled(response?.data));
        } else {
          dispatch(getStarshipsRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getStarshipsRejected(error.message));
        }
      });
  };
};

export const getStarshipDetail = (params) => {
  return (dispatch) => {
    dispatch(getStarshipDetailPending());
    getStarshipDetailRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getStarshipDetailFullfilled(response?.data));
        } else {
          dispatch(getStarshipDetailRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getStarshipDetailRejected(error.message));
        }
      });
  };
};

////
export const getPlanets = (params) => {
  return (dispatch) => {
    dispatch(getPlanetsPending());
    getPlanetsRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getPlanetsFullfilled(response?.data));
        } else {
          dispatch(getPlanetsRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getPlanetsRejected(error.message));
        }
      });
  };
};

export const getPlanetDetail = (params) => {
  return (dispatch) => {
    dispatch(getPlanetDetailPending());
    getPlanetDetailRepo(params)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getPlanetDetailFullfilled(response?.data));
        } else {
          dispatch(getPlanetDetailRejected(response?.message));
        }
      })
      .catch((error) => {
        if (error && error.response) {
          dispatch(getPlanetDetailRejected(error.message));
        }
      });
  };
};
