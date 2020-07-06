import { TweetResponse } from "../actions/tweet_actions";
import { FC } from "react";
import React from "react";

const TweetBox: FC<{ text: string }> = ({ text }) => {
  return <div>
    <h3>{text}</h3>
  </div>
}

export default TweetBox;
