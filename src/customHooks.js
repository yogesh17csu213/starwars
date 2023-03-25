import React, { useState, useEffect } from "react";
import axios from "axios";
const useGetDataWithCustomKeys = (props) => {
  const [data, setData] = useState({});
  const callApis = (urlDataObject) => {
    let allUrls = urlDataObject.map((item) => axios.get(item));
    axios.all(allUrls).then((responses) => {
      let allResponses = [];
      responses.forEach((resp) => {
        allResponses.push(resp.data);
      });
      setData(allResponses);
    });
  };
  return [data, callApis];
};
export default useGetDataWithCustomKeys;
