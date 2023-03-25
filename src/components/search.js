import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getFilmSearch } from "../store/actions";
import { clearFilmSearch } from "../store/slices";
import { useNavigate, useLocation } from "react-router-dom";
const Search = (props) => {
  const dispatch = useDispatch();
  const { filmSearch } = useSelector((state) => state.starwars);
  const [selectedOption, setSelectedOption] = useState();
  const [movieOptions, setMovieOptions] = useState([]);
  const [debounceState, setDebounceState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onInputChange = (obj) => {
    setSelectedOption(null);
    setMovieOptions([]);
    if (obj.length > 0) {
      clearTimeout(debounceState);
      setIsLoading(true);
      let debounce = setTimeout(() => {
        let params = { search: obj };
        dispatch(clearFilmSearch());
        dispatch(getFilmSearch(params));
      }, 1000);
      setDebounceState(debounce);
    }
  };
  const onHandleChange = (obj) => {
    setSelectedOption(obj);
    navigate(`/movies/${obj.url.split("films/")[1]}`);
  };

  useEffect(() => {
    dispatch(clearFilmSearch());
    console.log(selectedOption, location);
    if (
      `/movies/${selectedOption?.url?.split("films/")[1]}` !== location.pathname
    ) {
      setSelectedOption(null);
      setMovieOptions([]);
    }
    setIsLoading(false);
    setDebounceState(false);
  }, [location]);

  useEffect(() => {
    if (filmSearch.fullfilled) {
      setMovieOptions(filmSearch?.fullfilled?.results);
      setIsLoading(false);
    }
  }, [filmSearch.fullfilled]);

  return (
    <Select
      className="col-5 text-dark"
      options={movieOptions}
      onInputChange={(obj) => onInputChange(obj)}
      onChange={onHandleChange}
      value={selectedOption}
      isLoading={isLoading}
      getOptionLabel={(option) => option.title}
      getOptionValue={(option) => option.url}
    />
  );
};
export default Search;
