import { fetchTweets, TweetResponse } from "../actions/tweet_actions";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/root_reducer";
import TweetBox from "./tweet_box";

const Tweet: FC = () => {

  const allTweetsSelector = (state: RootState) => state.tweets.all;

  const tweets = useSelector(allTweetsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  });

  if (tweets.length === 0) {
    return (<div>There are no Tweets</div>)
  } else {
    return (
      <div>
        <h2>All Tweets</h2>
        {tweets.map(tweet => (
          <TweetBox key={tweet._id} text={tweet.text} />
        ))}
      </div>
    );
  }

}

export default Tweet;
