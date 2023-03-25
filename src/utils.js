export const dataRow = (dataObj, type) => {
  return dataObj.map((item) => {
    let data = {};
    data.text = type === "films" ? item.title : item.name;
    if (type === "films") {
      data.url = `/movies/${item.url.split("films/")[1]}`;
    }
    if (type === "characters") {
      data.url = `/actors/${item.url.split("people/")[1]}`;
    }
    if (type === "starships") {
      data.url = `/starships/${item.url.split("starships/")[1]}`;
    }
    if (type === "planets") {
      data.url = `/planets/${item.url.split("planets/")[1]}`;
    }
    return data;
  });
};
