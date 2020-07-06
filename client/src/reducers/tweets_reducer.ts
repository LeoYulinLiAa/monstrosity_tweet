import {
  RECEIVE_NEW_TWEET,
  RECEIVE_TWEETS,
  RECEIVE_USER_TWEETS,
  TweetActions,
  TweetResponse
} from "../actions/tweet_actions";

export interface TweetState {
  all: TweetResponse[]
  user: TweetResponse[]
  new: TweetResponse | null
}

const tweetsReducer = (state: TweetState = { all: [], user: [], new: null }, action: TweetActions) => {
  switch(action.type) {
    case RECEIVE_TWEETS:
      return { ...state, all: action.tweets };
    case RECEIVE_USER_TWEETS:
      return { ...state, user: action.tweets };
    case RECEIVE_NEW_TWEET:
      return { ...state, new: action.tweet };
    default:
      return state;
  }
};

export default tweetsReducer;
