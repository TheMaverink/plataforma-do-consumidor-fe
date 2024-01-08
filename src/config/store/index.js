import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import PatientsContainer from "containers/Users";
import MiscContainer from "containers/Misc";

// let middlewares = [listenerMiddlewareInstance];

// if (process.env.NODE_ENV === "development") {
//   middlewares = [logger];
// }

const store = configureStore({
  reducer: {
    [PatientsContainer.slice.name]: PatientsContainer.slice.reducer,
    [MiscContainer.slice.name]: MiscContainer.slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(middlewares),
    getDefaultMiddleware(),
});

export default store;
