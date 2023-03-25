import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices";
import thunk from "redux-thunk";

const middleware = [];
if (process.env.REACT_APP_ENV === "dev" || true) {
  const { logger } = require(`redux-logger`);
  middleware.push(logger);
}

middleware.push(thunk);
export const store = configureStore({
  reducer: { starwars: appSlice },
  middleware,
});
