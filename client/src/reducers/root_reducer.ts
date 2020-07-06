import { combineReducers } from "redux";
import tweetsReducer from "./tweets_reducer";
import sessionReducer from "./session_reducer";

export const rootReducer = combineReducers({
  session: sessionReducer,
  tweets: tweetsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
