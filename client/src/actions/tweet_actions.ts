import { getTweets, getUserTweets, writeTweet } from "../utils/tweet_api";
import { Action, Dispatch } from "redux";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";

interface ReceiveTweetsAction extends Action<typeof RECEIVE_TWEETS> {
  tweets: TweetResponse[]
}

interface ReceiveUserTweetsAction extends Action<typeof RECEIVE_USER_TWEETS> {
  tweets: TweetResponse[]
}

interface ReceiveNewTweetAction extends Action<typeof RECEIVE_NEW_TWEET> {
  tweet: TweetResponse
}

export type TweetActions = ReceiveTweetsAction | ReceiveUserTweetsAction | ReceiveNewTweetAction;

export interface TweetResponse {
  _id: string
  text: string
  date: string
}

export const receiveTweets = (tweets: TweetResponse[]): ReceiveTweetsAction => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const receiveUserTweets = (tweets: TweetResponse[]): ReceiveUserTweetsAction => ({
  type: RECEIVE_USER_TWEETS,
  tweets
});

export const receiveNewTweet = (tweet: TweetResponse): ReceiveNewTweetAction => ({
  type: RECEIVE_NEW_TWEET,
  tweet
})

export const fetchTweets = () => (dispatch: Dispatch) => (
  getTweets()
    .then(tweets => dispatch(receiveTweets(tweets.data)))
    .catch(err => console.log(err))
);

export const fetchUserTweets = (id: string) => (dispatch: Dispatch) => (
  getUserTweets(id)
    .then(tweets => dispatch(receiveUserTweets(tweets.data)))
    .catch(err => console.log(err))
);

export const composeTweet = (data: any) => (dispatch: Dispatch) => (
  writeTweet(data)
    .then(tweet => dispatch(receiveNewTweet(tweet.data)))
    .catch(err => console.log(err))
);
