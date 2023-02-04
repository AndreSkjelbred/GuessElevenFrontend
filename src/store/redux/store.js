import { configureStore } from "@reduxjs/toolkit";
import guessElevenReducer from "./guessEleven";
import teamInfoReducer from "./teamInfo";
import videoReducer from "./video";

export const store = configureStore({
  reducer: {
    guessEleven: guessElevenReducer,
    teamInfo: teamInfoReducer,
    video: videoReducer,
  },
});
